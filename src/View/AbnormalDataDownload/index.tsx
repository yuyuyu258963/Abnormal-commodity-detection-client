import { Button, Col, notification, Progress, Row } from 'antd'
import { DownloadOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
// import { AbnormalDataDownload } from '../../axios'
import TableCom from '../../Components/TableCom'
import store from '../../reducer/store'
import { UrlRoot } from '../../types/actionTypes'
import { flatten } from '../../utils';
import { ProductsDataType } from '../../types/interface';
import * as  XLSX from 'xlsx'
import { AbnormalDataDownload } from './tool';

type Props = {}

export default function AbDataDownload(props: Props) {
  const [update, setUpdate] = useState([false]);
  const data:any = store.getState()
  const {FilteredData, FilteredDataLen, selectedDataMonth, selectedDataAttr, ProductionData:{LineChartData}} = data;
  const preDataLen = LineChartData.length;
  const ColumnData = FilteredDataLen === 0 ? [] : flatten(FilteredData,2)

  // console.dir(ColumnData)
  useEffect(() => {
    store.subscribe(() => {
      setUpdate([!update[0]])
    })
  },[])
  
  return (
    <div className="content dataDownLoad">
      <section  className="section-header" >
        <Row style={{marginTop: 12}} >
          <Col span={3} >
              <Button
                icon={<DownloadOutlined />}
                onClick={()=> {
                AbnormalDataDownload([...ColumnData],[...update])
              }} >
                下载
                {/* <a  href={UrlRoot + 'upload' + `?month=${selectedDataMonth}&&attr=${selectedDataAttr}`} target="_blank" style={{fill: 'white', color:"black"}} >
                // 下载
                </a> */}
              </Button>
          </Col>
          <Col span={10}></Col>
          <Col span={8} >
            <Progress size="small" type="line" style={{marginTop:5}} width={50} percent={Number((100 * FilteredDataLen/preDataLen).toFixed(1))} 
                      format={() => !FilteredDataLen ? "无数据" : `筛选掉 ${(100 * FilteredDataLen/preDataLen).toFixed(1)}%，共 ${FilteredDataLen} 条数据`} />
          </Col>
        </Row>
      </section>
      <section className="section-table" >
      <TableCom tagColor="red" data={[...ColumnData]} haveErr={true} />
      </section>
    </div>
  )
}
