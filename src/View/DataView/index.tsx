import { Button, Col, Input, Modal, notification, Progress, Radio, Row, Select, Slider } from 'antd'
import React, { useEffect, useState } from 'react'
import ErrorTypeChoice from '../../common/ErrType_choice'
import BoxMap from '../../Components/BoxMap'
import DataInfoCard from '../../Components/DataInfoCard'
import HeatMap from '../../Components/HeatMap'
import LineChart from '../../Components/LineChart'

import { ValKind } from '../../constants'

import store from "../../reducer/store"
import { debounce } from '../../utils'
import { HandelDataFilter } from '../DataFilter/tool'
import "./index.css"


type Props = {}

export default function DataView({}: Props) {
  const [update, setUpdate] = useState([false]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [errorType, setErrorType] = useState("价格异常");
  const [selectedValKind, setSelectedValKind] = useState<number>(0)
  const [filterRange, setFilterRange] = useState<number[]>([0,20])
  const data:any = store.getState()
  const {ProductionData:{ maxInfo, LineChartData }, FilteredDataLen } = data

  useEffect(()=>{
    store.subscribe(() => {
      setUpdate([!update[0]])
    })
  }, [])
  return (
    <div className="content DataView-content">
      <section className="section-header" >
        <Row  style={{marginTop: 12}} >
          <Col span="5" >
            属性： <Select
              defaultValue={0}
              style={{ width: 150 }}
              onChange={ val => setSelectedValKind(val) }
            >
            {
              ValKind && ValKind.map((value,index) => {
                return <Select.Option key={value} value={index}>{value}</Select.Option>
              })
            }
            </Select>
          </Col>
          <Col style={{marginTop:4}}>
            范围选择条： 
          </Col>
          <Col span="10" >
            <Slider
              range
              max={maxInfo[selectedValKind][1] < 100 ? 100 : maxInfo[selectedValKind][1]}
              min={maxInfo[selectedValKind][0] }
              step={Math.floor(maxInfo[selectedValKind][1] / 400) < 1 ? 1 : Math.floor(maxInfo[selectedValKind][1] / 400) }
              defaultValue={[maxInfo[selectedValKind][0], maxInfo[selectedValKind][1]]}
              onAfterChange={(val)=>{
                setFilterRange([Math.min(...val),Math.max(...val)])
              }}
            />
          </Col>
          <Col span="2">
            {/* <Input ></Input> */}
          </Col>
          <Col span="4" >
            <Button 
              type="primary"
              onClick={() => {
                setIsModalVisible(true);
              }}
              >
              筛选
            </Button>
            <Modal title="异常类型选择" visible={isModalVisible} 
                onOk={()=> {
                  setIsModalVisible(false);
                  debounce(HandelDataFilter, 200)([...filterRange],selectedValKind, errorType,[...update])
                }} onCancel={() => {
                  setIsModalVisible(false);
                  notification.success({
                          message: "取消筛选"
                        })
                }}>
                <Radio.Group 
                  style={{transform: 'translateX(80%)', marginTop:"4px"}}
                  onChange={(e:any)=>{
                    // console.dir(e.target.value)
                    setErrorType(e.target.value);
                  }} defaultValue={"价格异常"}>
                  <Radio value={"价格异常"}>价格异常</Radio>
                  <Radio value={"销量异常"}>销量异常</Radio>
                </Radio.Group>
              </Modal>
          </Col>
          <Col >
            剩余 &nbsp;
            <Progress size="small" type="circle" style={{marginTop:-10}} width={55} 
                      percent={ LineChartData.length === 0 ? 0 : Math.floor(100 * (1 - FilteredDataLen / LineChartData.length)) } 
                      format={() => {
                        return  LineChartData.length === 0 ? "0%" : String(Math.floor(100 * (1 - FilteredDataLen / LineChartData.length))) + "%"
                      }} />
          </Col>
        </Row>
      </section>
      <div className="data-info" >
        <section id="data-info-section" >
          <DataInfoCard />
        </section>
        <section id="dataViewRight-section" >
          <HeatMap />
        </section>
      </div>
      <div className="section-lineChart">
        <section className="box-chart" >
          <BoxMap />
        </section>
        <section className="line-chart" >
          <LineChart />
        </section>
      </div>
    </div>
  )
}