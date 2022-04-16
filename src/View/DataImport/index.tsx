import { Button, Col, Progress, Row, Select, TreeSelect } from 'antd'
import React, { useEffect, useState } from 'react'
import store from "../../reducer/store"
import { handelChangeDataMonth, handelChangeDataName, selectDataAction } from "../../reducer/action"

import { V1Kind, TreeSelectData, DataMonth } from "../../constants"
import { LoadData } from "../../axios/index"
// import TableCom


import "./index.css"
import TableCom from '../../Components/TableCom'

const { Option } = Select;

declare type selectedInfoType = {
  val:    string | number;
  pos:    string;
  // hasPreData: boolean,
}

type Props = {}

export default function DataImport({}: Props) {
  const [updateView, setUpdateView] = useState<boolean[]>([false])
  const [selectedMonth, setSelectedMonth] = useState<string>("6")
  const [selectedId, setSelected] = useState<selectedInfoType>({val:"运动户外",pos:"0-0"})
  const [isGetData, setGetData]  = useState<boolean>(false)
  const TableData:any = store.getState()
  const ColumnData = TableData?.normalProductionData
  const preDataLen = TableData?.ProductionData.LineChartData.length
  useEffect(() => {
    store.subscribe(()=>{
      setUpdateView([!updateView[0]])
    })
  },[])

  return (
    <div className="content DataImport-content">
      <section className="section-header" >
        <Row style={{marginTop: 12}} >
          <Col span="3" >
            月份： 
            <Select
              defaultValue={"6"}
              style={{ width: 80 }}
              onChange={ val => {
                setSelectedMonth(val)
                store.dispatch(handelChangeDataMonth(val));
              }}
            >
              {
                DataMonth.map(item => <Select.Option key={item} value={item}>{item}</Select.Option> )
              }
            </Select>
          </Col>

          <Col span="6" >
            种类： <TreeSelect
              defaultValue={"运动户外"}
              treeData={TreeSelectData}
              style={{ width: 200 }}
              onChange={(val: string,_: any,ex: any) =>{
                const {pos:newPos} = ex.allCheckedNodes[0];
                const selectedPath = newPos.split("-")
                const v1Index = Number(selectedPath[1]);
                const fileName = V1Kind[v1Index]

                store.dispatch(handelChangeDataName({fileName,val}))
                setSelected({val, pos:newPos})
              }}
              />
          </Col>
          <Col span="2" >
            <Button
              type="primary"
              loading={isGetData}
              style={{backgroundColor:"#253044"}}
              onClick={()=>{
                const {val:selected,pos} = selectedId;
                const selectedPath = pos.split("-")
                const v1Index = Number(selectedPath[1])
                const selectedPathId = String(selectedPath.length - 1);
                const fileName = V1Kind[v1Index]
                // console.dir({fileName, selectedPathId})
                setGetData(true)
                LoadData({ fileName, selected, selectedPathId, selectedMonth }).then((data) => {
                  // console.dir(data);
                  store.dispatch(selectDataAction(data))
                  setGetData(false)
                })
              }}
            >导入</Button>
          </Col>
          <Col span="2"></Col>
          <Col span="8" >
            <Progress size="small" type="line" style={{marginTop:5}} width={50} percent={Number((100 * ColumnData.length/preDataLen).toFixed(1))} 
                      format={() => ColumnData.length === 0 ? "无数据" : `剩余 ${(100 * ColumnData.length/preDataLen).toFixed(1)}%，共 ${ColumnData.length} 条数据`} />
          </Col>
        </Row>
      </section>
      <section className="section-table" >
        <TableCom tagColor='blue' data={ColumnData} haveErr={false} />
      </section>
    </div>
  )
}