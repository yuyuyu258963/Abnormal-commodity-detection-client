import { Button, Col, Row } from 'antd'
import ProCard from '@ant-design/pro-card'
import React, { useEffect, useState } from 'react'
import { attributeData, ShopColName } from '../../constants'
import store from '../../reducer/store'

import "./index.css"

type Props = {}

export default function DataInfoCard({}: Props) {
  const [A,setA] = useState([false])
  useEffect(() => {
    store.subscribe(() => {
      // console.dir("更新")
      setA([!A[0]])
    })
  }, [])
  
  const data: any = store.getState()
  const {NodeInformation, ShopData } = data
  // console.dir({NodeInformation, ShopData})
  
  return (
    <ProCard
          hoverable
          size="small"
          tabs={{
            tabPosition:"top",
            onChange: (key) => {

            },
          }}
          style={{
            minHeight:"230px",
            height:"230px",
            width: "100%"
          }}
    
      >
        <ProCard.TabPane key="tab1" tab="商品">
          {
            attributeData.map((item: number | string,index: number)=>{
              return <Row key={index} style={{marginTop:"1px", marginLeft:"10px"}} >
                <Col span="3" >{item}</Col>:&nbsp;
                <Col
                  className="Col-id"
                  span="20"
                  title={NodeInformation[index]}
                  >{NodeInformation[index]}</Col>
              </Row>
            })
          }
        </ProCard.TabPane>
        <ProCard.TabPane key="tab2" tab="店铺" >
          <Row style={{marginLeft:"10px"}} >
          <Col span="20" >
            {
              ShopColName && ShopColName.map((item,index) => {
                return !item.show ? null : 
                  <Row key={index}>
                    <Col span="5" >{item.name}</Col>:&nbsp;
                    <Col
                      className="Col-id"
                      span="17" 
                      >{
                        (ShopData && ShopData.length) === 0 ? "" :
                          ShopData[0][item.jsonKey]
                      }</Col>
                  </Row>
              })
            }
          </Col>
          <Col span="2">
          {/* <Button 
            type='primary' 
            size="small"
            className="btn-shop-info" 
            onClick={()=>{

            }}
            >店铺商品信息</Button> */}
          </Col>
          </Row>
        </ProCard.TabPane>
        </ProCard>
  )
}