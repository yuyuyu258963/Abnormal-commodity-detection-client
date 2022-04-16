import { Col, Row } from 'antd'
import React from 'react'
import store from '../../../../reducer/store'
import TinyTable from '../TinyTable'
import { UnionPriceErrColumns, UnionSaleErrColumns } from '../TinyTable/config'

type Props = {}

export default function MiddleContent({}: Props) {
  const data:any = store.getState()
  const {priceErr, saleErr} = data;
  
  return (
    <div>
      <section className="model-content" >
        <Row style={{height: "100%"}} >
          <Col span={6} >
            <span style={{position: "absolute",top:"170px",width: "32px",textAlign: "center",backgroundColor:"#fff",left:"35px"}} >过滤</span>
            <div className="split-line" style={{marginTop:"180px",height:"4px"}} ></div>
          </Col>
          <Col span="1" style={{overflow: "hidden"}} >
            <div className="arrow" ></div>
          </Col>
          <Col span={17} >
            <TinyTable data={priceErr} Aper="filteredJiao" func={UnionPriceErrColumns}  marginTop="135px" />
          </Col>
        </Row>
      </section>

      <section className="model-content" >
        <Row style={{height: "100%"}} >
          <Col span={6} >
            <span style={{position: "absolute",top:"170px",width: "32px",textAlign: "center",backgroundColor:"#fff",left:"35px"}} >过滤</span>
            <div className="split-line" style={{marginTop:"180px",height:"4px"}} ></div>
          </Col>
          <Col span="1" style={{overflow: "hidden"}} >
            <div className="arrow" ></div>
          </Col>
          <Col span={17} >
            <TinyTable data={saleErr} Aper="filteredJiao" func={UnionSaleErrColumns}  marginTop="135px" />
          </Col>
        </Row>
      </section>
    </div>
  )
}