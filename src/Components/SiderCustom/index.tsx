import { Layout, Menu, Breadcrumb, Tooltip, Button, Modal, notification } from 'antd';

import React, { useState } from 'react'
import { UploadOutlined, ExclamationCircleOutlined, RetweetOutlined } from '@ant-design/icons';
import MENU_MAp from "./config"
import { NavLink } from 'react-router-dom';

import {MenuItemType} from "./interface"
import { handelRunBackFilter } from './tool';
import store from '../../reducer/store';
const { Header, Sider } = Layout;
const {SubMenu } = Menu; 

type Props = {}

const SiderCustom = (props: Props) => {

  const getMenuEle = (menu: Array<MenuItemType>) :any => 
          menu.map((item: MenuItemType) =>
            item.children && item.children.length !== 0 ? (
              <SubMenu
                  key={item.id}
                  icon={<item.icon />}
                  title={item.name}
              >
                { getMenuEle(item.children) }
              </SubMenu>
            ) : (
              <Menu.Item key={item.id}  icon={<item.icon size="small" />} >
                <NavLink  to={item.link} >
                  {item.name}
                </NavLink>
              </Menu.Item>
            )
        );
  
  return (
    <Sider collapsible collapsedWidth={60} theme="light" width={150} className="g-sider">
      <Menu mode="inline" style={{height: '100%'}} >
        {
          getMenuEle(MENU_MAp)
        }
        <Menu.Item icon={<RetweetOutlined />} onClick={(e)=> {
          const data:any = store.getState()
          const {FilteredData} = data;
          
          Modal.confirm({
            title: '您确定要取消上一次筛选嘛?',
            icon: <ExclamationCircleOutlined />,
            content:<>
              <p>{`您已经筛选过${FilteredData.length - 1}次了`}</p>
            </>,
            onOk() {
              handelRunBackFilter()
            },
            onCancel() {
              // notification.success({
              //   message: "成功取消撤回筛选"
              // })
            },
          });
        }} >
          <span >
            筛选回退
          </span>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default SiderCustom