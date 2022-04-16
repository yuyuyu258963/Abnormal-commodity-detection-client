import { Radio } from 'antd'
import * as d3 from 'd3'
import React, { useEffect, useState, memo } from 'react'
import { boxData } from '../../constants'
import store from '../../reducer/store'
import { BoxDataType } from '../../types/interface'
import "./index.css"
import { BoxMapDataType } from './interface'
import { drawBoxMap } from './tool'

type Props = {}

function BoxMap({}: Props) {
  const [ViewUpdate, setViewUpdate] = useState(false)
  // const [BoxDataDraw, SetBoxData] = useState<BoxDataType[]>(boxData)
  const [selectedVal,changeSelectedVal] = useState<number>(0)
  
  
  useEffect(() => {
    store.subscribe(()=> {
      const data:any = store.getState() 
      const {normalProductionData} = data
      if (normalProductionData.length > 0) {
        // let newData:BoxMapDataType[] = [
        //   {
        //     name: "价格",
        //     values: [],
        //   } ,{
        //     name: "销量",
        //     values: [],
        //   } 
        // ]

        // for (let i = 0; i < normalProductionData.length; i++) {
        //   newData[0].values.push(normalProductionData[i].item_price)
        //   newData[1].values.push(normalProductionData[i].item_sales_volume)
        // }
        // SetBoxData(newData)
        
        setViewUpdate(!ViewUpdate)
      }
    })
  },[])

  useEffect(() => {
    const data:any = store.getState() 
    const {normalProductionData} = data
    let newData:BoxMapDataType[] = [
      {
        name: "价格",
        values: [],
      } ,{
        name: "销量",
        values: [],
      } 
    ]
    for (let i = 0; i < normalProductionData.length; i++) {
      newData[0].values.push(normalProductionData[i].item_price)
      newData[1].values.push(normalProductionData[i].item_sales_volume)
    }
    
    if (newData[1].values.length !== 0) {
      drawBoxMap(selectedVal, newData)
    } else {
      drawBoxMap(selectedVal, boxData)
    }
    
  }, [ViewUpdate, selectedVal])
  
  return (
    <>
      <section style={{height: '6%'}} >
        箱线视图
        <Radio.Group 
          style={{transform: 'translateX(80%)', marginTop:"4px"}}
          onChange={(e:any)=>{
            // console.dir(e)
            changeSelectedVal(e.target.value)
          }} defaultValue={0}>
          <Radio value={0}>价格</Radio>
          <Radio value={1}>销量</Radio>
        </Radio.Group>
      </section>
      <svg id="box-map" >
        
      </svg>
    </>
  )
}

export default memo(BoxMap)