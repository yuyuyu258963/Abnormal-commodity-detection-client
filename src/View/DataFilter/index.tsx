import { Button, Col, Input, InputNumber, Row, Select } from 'antd'
import React, { createRef, memo, useState } from 'react'
import { RunCluster } from '../../axios'
import ClusterMap from '../../Components/ClusterMap'
import ClusterMeanView from '../../Components/ClusterMeanView'
import ClusterNumView from '../../Components/ClusterNumView'

import "./index.css"

type Props = {}

function DataFilter({}: Props) {
  const [selectedClusterMethod, setClusterMethod] = useState<string>('OPTICS')
  const [clusterNumber, setClusterNumber] = useState<number>(5)
  const [isClustered, setClusterState] = useState(false)
  
  return (
    <div className="content dataFilterView">
      <section className="section-header" >
        <Row style={{marginTop:"10px"}} >
          <Col span={2} style={{marginTop:"8px"}} >
            聚类方法：
          </Col>
          <Col span={3} style={{marginTop:"3px"}} >
            <Select defaultValue="OPTICS" style={{width:"120px"}} onChange={(v) => setClusterMethod(v) } >
              <Select.Option value="OPTICS" key="OPTICS" >OPTICS</Select.Option>
              <Select.Option value="KMEANS" key="KMEANS" >KMEANS</Select.Option>
              <Select.Option value="GMM"    key="GMM"    > GMM  </Select.Option>
              <Select.Option value="BIRCH"  key="BIRCH"  > BIRCH</Select.Option>
            </Select>
          </Col>
          <Col span={2} style={{marginTop:"8px"}} >
            聚类数量：
          </Col>
          <Col span={3}>
            <InputNumber min={1} max={20} defaultValue={5} onChange={v => setClusterNumber(v)} style={{marginTop:"3px"}} ></InputNumber >
          </Col>
          {/* <Col span={1}></Col> */}
          <Col span={5} style={{marginTop:"3px"}} >
            <Button 
              type="ghost"
              loading={isClustered}
              onClick={()=>{
                setClusterState(true);
                RunCluster(selectedClusterMethod, clusterNumber).then(() => {
                  setClusterState(false);
                })
              }} 
            >聚类</Button>
          </Col>
        </Row>
      </section>
      
      <div className="cluster-bottom-container" >
        <div className="cluster-left" >
          <section className="cluster-left-top" >
            <ClusterNumView />
          </section>
          <section className="cluster-left-bottom" >
            <ClusterMeanView />
          </section>
        </div>
        <section className="cluster-section" >
          <ClusterMap />
        </section>
      </div>
    </div>
  )
}
export default DataFilter