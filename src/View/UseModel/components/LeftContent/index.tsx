import { Col, Row, Tag } from 'antd'
import React from 'react'
import store from '../../../../reducer/store'
import TinyTable from '../TinyTable'
import { PriceErrColumns, SaleErrColumns, UnionPriceErrColumns, UnionSaleErrColumns } from '../TinyTable/config'



type Props = {}

export default function LeftContent({}: Props) {
  const data:any = store.getState()
  const {priceErr, saleErr} = data;

  return (
    <div>
      <section className="model-content" >
        <Row style={{ height:"100%"}} >
          <Col span="3" style={{ textAlign:"center" }} >
            <Tag color="red" style={{marginTop:"170px"}} >价格异常</Tag>
          </Col>
          <Col span="10" >
            <Row style={{height:"49.5%"}} >
              <TinyTable data={priceErr} Aper="isf" func={PriceErrColumns}  marginTop="40px" />
            </Row>
            <div className="split-line" ></div>
            <Row style={{height:"49.5%"}} >
              <TinyTable data={priceErr} Aper="cblof" func={PriceErrColumns}  marginTop="40px" />
            </Row>
          </Col>
          <Col span="1" style={{overflow: "hidden"}} >
            <div className="arrow2" ></div>
          </Col>
          <Col span={9} >
            <TinyTable data={priceErr} Aper="jiao" func={UnionPriceErrColumns}  marginTop="135px" />
          </Col>
        </Row>
      </section>

      <section className="model-content" >
        <Row style={{ height:"100%"}} >
          <Col span="3" style={{ textAlign:"center" }} >
            <Tag color="warning" style={{marginTop:"170px"}} >销售异常</Tag>
          </Col>
          <Col span="10" >
            <Row style={{height:"49.5%"}} >
              <TinyTable data={saleErr} Aper="isf" func={SaleErrColumns} marginTop="40px" />
            </Row>
            <div className="split-line" ></div>
            <Row style={{height:"49.5%"}} >
              <TinyTable data={saleErr} Aper="cblof" func={SaleErrColumns} marginTop="40px" />
            </Row>
          </Col>
          <Col span="1" style={{overflow: "hidden"}} >
            <div className="arrow2" ></div>
          </Col>
          <Col span={9} >
            <TinyTable data={saleErr} Aper="jiao" func={UnionSaleErrColumns}  marginTop="130px" />
          </Col>
        </Row>
      </section>
    </div>
  )
}