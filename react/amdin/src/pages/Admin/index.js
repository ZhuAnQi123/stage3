//我是整个页面的结构

import React, { Component } from 'react';
import CustomNav from '../../components/CustomNav'
import { Layout } from 'antd';
import style from './index.module.less'
const { Header, Content, Footer, Sider } = Layout;
class Admin extends Component {
  state = {}
  render() {
    return (
      <Layout className={style.wrapper}>
        {/* 侧边栏 */}
        <Sider>
          <div className="logo" />
          <CustomNav></CustomNav>
        </Sider>

        <Layout >
          <Header style={{ background: 'red' }}>这里是头部</Header>
          <Content >
            {/*可以看menu的结构，有二级的渲染在这里 */}
            {this.props.children}
          </Content>
          <Footer >Ant Design ©2018 Created by Ant UED </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;