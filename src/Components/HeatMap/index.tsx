import { Modal, notification, Radio } from 'antd';
import React, { Fragment, useEffect, useState, memo } from 'react'
import store from '../../reducer/store'
import { handelClassedDataFilter } from '../ClusterMeanView/tool';
import { handelSingalNormalChange } from '../TableCom/tool';
import { getColor, heatMapElem, MonthIndex } from './config';

import "./index.css"

type Props = {}

function checkSelect(item:number, index:number, selectedDataIndex:number):string {
  // if (index === selectedDataIndex) {
  //   return "red"
  // }
  if (item === -1) {
    return "rgb(218, 218, 218)"
  }
  return ""
}

// 绘制一行的图形
const rowMap = (lineData:number[], key:number, dataTitles:string[], selectedDataIndex: number, func:Function): JSX.Element => {
  // const [choicedDataId, setChoicedDataId] = useState("")

  const dataLen = lineData?.length ;
  // console.dir(dataLen)
  return (
    <Fragment key={key} >

      {
        lineData && lineData.map((item,index)=>{
          return <rect 
            key={index} 
            x={dataLen === 0 ? 0 : heatMapElem.offsetLeft + 25 + (1250 - heatMapElem.offsetRight * 2) / dataLen * index}
            y={heatMapElem.offsetTop + key * heatMapElem.height + heatMapElem.lineSpan * key}
            width={dataLen === 0 ? 0 : (1250 - heatMapElem.offsetRight * 2) / dataLen} 
            height={heatMapElem.height}
            fill={getColor(item)}
            stroke={checkSelect(item,index,selectedDataIndex)}
            onClick={(event)=>{
              // console.dir(dataTitles[index])
              func(dataTitles[index]);
              // setChoicedDataId(dataTitles[index])
            }}
          >
            <title >{dataTitles[index]}</title>
          </rect>
        })
      }
    </Fragment>
  )
}

function HeatMap({}: Props) {
  const [A,SetA] = useState([false])
  const [selectedVal,changeSelectedVal] = useState<number>(0)
  const [choicedDataId, setChoicedDataId] = useState("")
  useEffect(()  => {
    store.subscribe(()=>{
      SetA([!A[0]])
    })
  }, [])
  
  const data:any = store.getState()
  const {priceMatrix, matrixId, saleVolunmMatrix, NodeInformation} = data;
  const selectedProductId = NodeInformation[5]
  const selectedDataIndex = matrixId.indexOf(String(selectedProductId))

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [errorType, setErrorType] = useState("价格异常");
  const handelFilterOne = (dataID:string) => {
    setChoicedDataId(dataID)
    setIsModalVisible(true);
  }

  // console.dir(matrixId)
  const dataLen = saleVolunmMatrix[0].length
  return (
    <>
    <Modal title="异常类型选择" visible={isModalVisible}
        onOk={()=> {
          setIsModalVisible(false);
          const data:any = store.getState();
          const {normalProductionData} = data;
          let choicedData = {};
          for (let i = 0; i < normalProductionData.length; i++) {
            if (normalProductionData[i].item_id === choicedDataId) {
              choicedData = normalProductionData[i];
              break;
            }
          }
          if (JSON.stringify(choicedData) === '{}') {
              notification.warning({
                message: `ID为 ${choicedDataId} 的商品未在选中的目录数据内`
              })
              return ;
          } else {
            handelSingalNormalChange(choicedData, errorType)
          }
        }} onCancel={() => {
          setIsModalVisible(false);
          notification.success({
                  message: "取消筛选"
                })
        }}>
        <Radio.Group 
          style={{transform: 'translateX(80%)', marginTop:"4px"}}
          onChange={(e:any)=>{
            setErrorType(e.target.value);
          }} defaultValue={"价格异常"}>
          <Radio value={"价格异常"}>价格异常</Radio>
          <Radio value={"销量异常"}>销量异常</Radio>
        </Radio.Group>
      </Modal>
      <section style={{height: '12%'}} >
        &nbsp;&nbsp;店铺视图
        <Radio.Group 
          style={{transform: 'translateX(20%)', marginTop:"4px"}}
          onChange={(e:any)=> changeSelectedVal(e.target.value)} 
            defaultValue={0}>
          <Radio value={0}>价格</Radio>
          <Radio value={1}>销量</Radio>
        </Radio.Group>
      </section>
      
      <svg className="heatMap-svg" >
        <rect 
            x={heatMapElem.offsetLeft + 25 + (1250 - heatMapElem.offsetRight * 2) / dataLen * selectedDataIndex} 
            y={heatMapElem.offsetTop - 20} 
            width={(1250 - heatMapElem.offsetRight * 2) / dataLen} 
            height={20}
            fill="#99CC33" 
            ></rect>
        {
          selectedVal === 0 
          ?
          priceMatrix && [...priceMatrix].map((item: number[],key: number) => {
            return <Fragment >
                <text x="5px" y={heatMapElem.offsetTop + 30 + key * heatMapElem.height + heatMapElem.lineSpan * key} >{MonthIndex[key] + "月"}</text>
                <g key={key} >{rowMap(item, key, matrixId, selectedDataIndex,handelFilterOne)}</g>
              </Fragment>
          })
          :
          saleVolunmMatrix && [...saleVolunmMatrix].map((item: number[],key: number) => {
            return <Fragment >
                <text x="5px" y={heatMapElem.offsetTop + 30 + key * heatMapElem.height + heatMapElem.lineSpan * key} >{MonthIndex[key] + "月"}</text>
                <g key={key} >{rowMap(item, key, matrixId, selectedDataIndex,handelFilterOne)}</g>
              </Fragment>
          })
        }
      </svg>
    </>
  )
}

export default memo(HeatMap)