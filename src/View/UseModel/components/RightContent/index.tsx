import React, { useState } from 'react'
import ReactECharts from 'echarts-for-react';
import { acceptFilter, GetFilterNumOptions } from './tool';
import store from '../../../../reducer/store';
import { Button, Col, Modal, notification, Row, Tag } from 'antd';
// import 'echarts-liquidfill';

type Props = {}

export default function RightContent({}: Props) {
  const [isPriceModalVisible, setIsPriceModalVisible] = useState<boolean>(false)
  const [isSaleModalVisible, setIsSaleModalVisible] = useState<boolean>(false)
  
  
  const data:any = store.getState()
  const {priceErr, saleErr} = data;
  let All_percentNum = priceErr?.filteredJiao_percentNum + saleErr?.filteredJiao_percentNum
  if (isNaN(All_percentNum)) {
    All_percentNum = 1;
  } else {
    All_percentNum = (1 -All_percentNum / 100).toFixed(4)
  }
  return (
    <section className="model-content-right" >
      <div style={{height:"50%"}}>
        <div style={{fontWeight:600,fontSize:"18px"}} >&nbsp; 接受筛选</div>
        <Row style={{height:"45%"}} >
          <Col span={6}></Col>
          <Col span={6} >
            <Tag color="red" style={{marginTop:"80px"}} >价格异常</Tag>
          </Col>
          <Col span={5} >
              <Modal title="筛选确认" visible={isPriceModalVisible} 
                onOk={()=> {
                  setIsPriceModalVisible(false);
                  acceptFilter(priceErr.data, "价格异常")
                  // debounce(HandelDataFilter, 200)([...filterRange],selectedValKind, errorType,[...update])
                }} onCancel={() => {
                  setIsPriceModalVisible(false);
                  notification.success({
                          message: "取消筛选"
                        })
                }}>
                  <p>
                    您确定要筛选掉价格异常这一部分的数据嘛
                  </p>
              </Modal>
            <Button 
              disabled={All_percentNum === 1} 
              style={{marginTop:"75px",width:"120px"}} 
              onClick={() => {
                setIsPriceModalVisible(true);
                // acceptFilter(priceErr.data, "价格异常")
              }}
              >接受筛选</Button>
          </Col>
        </Row>
        <Row style={{height:"45%"}} >
        <Col span={6}></Col>
          <Col span={6} >
            <Tag color="warning" style={{marginTop:"80px"}} >销售异常</Tag>
          </Col>
          <Col span={5} >
              <Modal title="筛选确认" visible={isSaleModalVisible} 
                onOk={()=> {
                  setIsSaleModalVisible(false);
                  acceptFilter(saleErr.data, "销量异常")
                  // debounce(HandelDataFilter, 200)([...filterRange],selectedValKind, errorType,[...update])
                }} onCancel={() => {
                  setIsSaleModalVisible(false);
                  notification.success({
                          message: "取消筛选"
                        })
                }}>
                  <p>
                    您确定要筛选掉销量异常这一部分的数据嘛
                  </p>
              </Modal>
            
            <Button  
              disabled={All_percentNum === 1} 
              style={{marginTop:"75px",width:"120px"}} 
              onClick={() => {
                // acceptFilter(saleErr.data, "销量异常")
                setIsSaleModalVisible(true);

              }}
              >接受筛选</Button>
          </Col>
        </Row>
      </div>
      
      <ReactECharts
        option={GetFilterNumOptions(Number((All_percentNum * 100).toFixed(2)))} 
        lazyUpdate={true}
        style={{width:"100%",height:"50%",margin:"0 auto" ,borderTop:"1px solid gray"}}
      />
    </section>
  )
}