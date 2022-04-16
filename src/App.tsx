const { Header, Content, Footer, Sider } = Layout;
import { Layout, Menu, Breadcrumb } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import {routes} from "./router/router"
import SiderCustom from './Components/SiderCustom';
import ViewComp from "./View"

const {
  AbDataDownload,
  DataFilter,
  DataImport,
  DataView,
  NotFound,
  OtherMap,
} = ViewComp

import { Route, Routes } from 'react-router-dom';
import { TitleIcon } from './icons';

function App() {
  return (
    <Layout style={{height: '100%'}} >
        <Header className="antd-header" style={{height:"50px",backgroundColor:"rgb(0,60,90)"}} >
          {
            TitleIcon
          }
          <span id="my-title" >
            商品异常检测</span>
        </Header>
          <Layout >
            <SiderCustom />
            <Content 
              style={{
              margin: '6px 12px',
              padding: 12,
              minHeight: 280,
              }} >
              <Routes>
                <Route path="/" element={<DataImport />} />
                {
                  routes && routes.map( (item:any) => <Route key={item.link} path={item.link} element={<item.component />} /> )
                }
                {/* <Route path="/dataImport" element={<DataImport />} />
                <Route path="/dataView" element={<DataView />} />
                <Route path="/dataFilter" element={<DataFilter />} />
                <Route path="/abnormalDataDownload" element={<AbDataDownload />} /> */}

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Content>
          </Layout>
      </Layout>
  );
}

export default App;
