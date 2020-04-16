import React, { Component } from 'react';
import { Layout } from 'antd';

//头部和侧边栏的引入位置
import CustomNav from '../../components/CustomNav'
import HeaderNav from '../../components/HeaderNav'
import style from './index.module.less'
const { Header, Content, Footer, Sider } = Layout;
class Admin extends Component {
  state = {}
  render() {
    return (
      <Layout className={style.wrapper}>
        {/* 侧边栏 - */}
        <Sider>
          <div className="logo" />
          <CustomNav></CustomNav>
        </Sider>
        <Layout >

        {/* 头部 - */}
          <Header style={{ background: '#fff' }}>
            <HeaderNav></HeaderNav>
          </Header>

        {/* 内容- */}
          <Content >
            {this.props.children}
            {/*这里得children是app.index中的路由切换*/}
          </Content>
          <Footer >Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;