import { Alert, Button, Col, notification, Row, Select } from 'antd'
import React, { useState } from 'react'
import { RunModel } from '../../axios'
import { ModelGroups } from '../../constants'
import LeftContent from './components/LeftContent'
import MiddleContent from './components/MiddleContent'
import RightContent from './components/RightContent'

import "./index.css"

type Props = {}

export default function UseModel({}: Props) {
  const [runModelState, setRunModelState] = useState<boolean>(false)
  
  return (
    <div className="content useModel-content">
      <section className="section-header" style={{backgroundColor:"rgb(246,255,237)",border:"1px solid rgb(183,235,143)"}} >
        <Button 
          loading={runModelState}
          style={{marginTop:"10px"}}
          onClick={() => {
            setRunModelState(true);
            notification.success({
              message: "开始运行模型"
            })
            RunModel().then(_ => setRunModelState(false))
          }}>
          运行模型
          
        </Button>
        <ul className={!runModelState ? "pro-percent-gray" : "pro-percent-green"} data-color="green" >
        </ul>
      </section>
      <div className="useModel-bottom" >
        <LeftContent />
        <MiddleContent />
        <RightContent />
      </div>
    </div>
  )
}