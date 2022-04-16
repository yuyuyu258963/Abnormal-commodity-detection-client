import React from 'react'
import ReactECharts from 'echarts-for-react';

import "./index.css"
import { OtherViewOption } from './tool';

type Props = {}

export default function OtherMap({}: Props) {
  return (
    <div className="content otherViewMap">
      <section  className="section-otherViewMap">
        <ReactECharts 
          option={OtherViewOption} 
          lazyUpdate={true}
          style={{width:"98%",height:"98%",margin:"0 auto",fontWeight:"bold"}}
        />
      </section>
    </div>
  )
}