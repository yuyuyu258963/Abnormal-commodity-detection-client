import React, { useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react';
import { getClusterNumOption } from './tool';
import store from '../../reducer/store';
import { CLASSED_DATA_FILTER, GET_CLUSTER_DATA } from '../../reducer/constant';

type Props = {}

export default function ClusterNumView({}: Props) {
  const [update, setUpdate] = useState([false]);
  useEffect(() => {
    store.subscribe(()=>{
      const data :any = store.getState();
      const {actionName} = data;
      // if (actionName === GET_CLUSTER_DATA || actionName === CLASSED_DATA_FILTER) {
        setUpdate([!update[0]])
      // }
    })
  }, [])
  
  return (
    <ReactECharts 
        option={getClusterNumOption([...update])} 
        lazyUpdate={true}
        style={{width:"95%",height:"100%",margin:"0 auto"}}
        onEvents={{'click':(e:any)=>{
          const clusterId: number = e.data.name
        }}}
      />
  )
}