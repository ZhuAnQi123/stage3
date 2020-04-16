import React, { Component } from 'react';
import style from  './index.module.less'
import uploadApi from '../../../api/upload'
import goodsApi from '../../../api/goods'
import config from '../../../config'
import {Card, message} from 'antd';
class GoodsAdd extends Component {
  state = {
    "name":"默认名字",
    "desc":'默认描述',
    "path":null,
    "link":"http://www.baidu.com",
    "stock":0,
    "putaway":0,
    "price":0,
    "unit":"件",
    "kind":'',
    "types":[] 
  }
  async componentDidMount(){
    let {code ,list}= await goodsApi.kindlist() 
    this.setState({types:list})
    
  }
  // 添加商品
  submit=async()=>{
    //前面的path给的是null，需要添加
   if (!this.state.path){return message.info('请先上传图片')}
   let {code,msg}  = await goodsApi.add(this.state)
   if(code){ return message.error(msg)}
   console.log(this)
   this.props.history.replace('/admin/goodsInfo')
  }

  // 图片上传
  upload= async ()=>{
    // 1. 获取图片里的内容
    let  file = this.refs.img.files[0]
    if(!file){ return message.error('请先选择一张图片')}
    // 图片的验证
    let {size,type} = file 
    console.log(type)
    let types = ['jpg',"jpeg",'gif','png']
    if(size>1000000){ return message.warning('图片超过1m')}
    if(types.indexOf(type.split('/')[1])===-1){ return message.warning('只允许jpg.jpeg,gif,png四种类型')}
    // 调用接口
    // 将图片转化为formdata 
    let formdata = new FormData()
    formdata.append('hehe',file)
    //code,msg,path.打印返回结果找🤦‍
    let {code,msg,path} = await uploadApi.getImg(formdata)
    if(code){ return message.error(msg)}
    this.setState({path})
  }
  render() { 
    let {name,desc,path,link,stock,putaway,price,unit,types,kind} = this.state
    return ( 
      <div className={style.box}>
         <Card title='商品添加'>
            名称: <input type='text' value={name} onChange={(e)=>{
              this.setState({name:e.target.value})
            }}/><br/>
            描述: <input type='text' value={desc} onChange={(e)=>{
              this.setState({desc:e.target.value})
            }}/><br/>
            链接: <input type='text' value={link} onChange={(e)=>{
              this.setState({link:e.target.value})
            }}/><br/>
            库存: <input type='number' value={stock} onChange={(e)=>{
              this.setState({stock:e.target.value})
            }}/><br/>
            发布状态: 
            <select value={putaway} onChange={(e)=>{
              this.setState({putaway:Number(e.target.value)})
            }}>
              <option value={-1}>下架</option>
              <option value={0}>未上架</option>
              <option value={1}>上架</option>
            </select>
            
            <br/>
            价格: <input type='number' value={price} onChange={(e)=>{
              this.setState({price:e.target.value})
            }}/><br/>
            单位: <input type='text' value={unit} onChange={(e)=>{
              this.setState({unit:e.target.value})
            }}/><br/>
            {/* 渲染类别 */}
            类别:
            <select value={kind} onChange={(e)=>{
                this.setState({kind:e.target.value})
            }}>
              {types.map((item,index)=>{
                return( <option value={item._id} key={item._id}>{item.kindName}</option>)
              })}
            </select>
            {/* 缩略图 */}
            缩略图:
            <input type="file" ref='img'/> <button onClick={this.upload}>上传图片</button>
            {config.serverIp}
            <img width='120' height='80' src={config.serverIp+path} alt=""/>
            <button onClick={this.submit}>添加</button>
         </Card>
      </div>
     );
  }
}
 
export default GoodsAdd;
/*
商品添加
1.用户输入信息
2.获取用户输入的信息
3.调用添加接口
4.添加成功后 可以在页面不动 也可以跳转回列表页
*/ 