import React from 'react';
import { Layout } from 'antd';
import AppHeader from './compomemts/common/header';
import "./App.css"
import { Routes, Route } from 'react-router-dom';
import Home from "./compomemts/common/Home/Home"
import Components from "./compomemts/common/Home/Components"
import Props from "./compomemts/common/Home/Props"
import OnClick from "./compomemts/common/onClick"
import Life from "./compomemts/common/Home/Life"
import Fragment from "./compomemts/common/Home/Fragment"
import Hooks from "./compomemts/common/Home/Hook"
import Form from "./compomemts/common/Home/Form"
import { Content } from 'antd/lib/layout/layout';
const { Header, Footer } = Layout;


const App = () => (
  <div>
    <Layout className="layout">
      <Header >
        <AppHeader />
      </Header>
      <Content>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/components' element={<Components />} />
          <Route path='/props' element={<Props />} />
          <Route path='/form' element={<Form />} />
          <Route path='/onClick' element={<OnClick />} />
          <Route path='/lifecircle' element={<Life />} />
          <Route path='/fragment' element={< Fragment />} />
          <Route path='/hooks' element={< Hooks />} />
        </Routes>
      </Content>
      <Content></Content>
      <Footer className='ant-layout-footer ' style={{ textAlign: 'center' }}>App ©2022 Created by @polina_shpak</Footer>
    </Layout>
  </div>
);



export default App;


