import React from 'react'
import ReactECharts from 'echarts-for-react';

import store from '../../reducer/store'
import { ProductsDataType } from '../../types/interface';
import { GetMatrixData, SearchSinglePro } from '../../axios';
import { throttle } from '../../utils';

type Props = {}

const getOption = ()=>{
  const data:any = store.getState()
  const LineChartData = data.normalProductionData
  // console.dir(LineChartData)
  
  const option = {
    title: {
      text:"Line Chart",
    },
    parallelAxis: [
      { dim: 0, name: '价格' },
      { dim: 1, name: '销量' },
      { dim: 2, name: '收藏数' },
      { dim: 3, name: '评论数' },
      { dim: 4, name: '库存' },
    ],
    // tooltip: {
    //   // padding: 10,
    //   // fill:"black",
    //   // backgroundColor: "transparent",
    //   // borderColor: '#777',
    //   // borderWidth: 1,
    // },
    tooltip: {
      backgroundColor:"rgba(52, 69, 107, 0.7)",
      textStyle: {
        fontSize: "12px",
        fill: 'white',
        color: "white",
      } ,
      extraCssText:{
        boxShadow: "0 0 1.5vw #1f69b9b9 inset",
        border: "1px solid rgb(33, 64, 165)",
      },
      formatter: (e:any,c:any, d:any) => {
        const {value} = e;
        return  `价 格：${value[0]}<br/>
                 销 量: ${value[1]}<br/>
                 收藏数: ${value[2]}<br/>
                 评论数: ${value[3]}<br/>
                 库存: ${value[4]}<br/>
                 ID: ${value[5]}<br/>
                  `
      }
    },
    parallel: {                         // 这是『坐标系』的定义
      left: '5%',                     // 平行坐标系的位置设置
      right: '13%',
      bottom: '5%',
      top: '15%',
      parallelAxisDefault: {          // 『坐标轴』的公有属性可以配置在这里避免重复书写
          type: 'value',
          nameLocation: 'end',
          nameGap: 20
      }
  },
    grid:{
      x:1,
      y:1,
      x2:1,
      y2:1,
    },
    series: [
      {
        name:"正常",
        type: 'parallel',
        lineStyle: {
          opacity: 0.5,
          width: 1,
          color: 'skyblue',
        },
        animation:true,
        animationThreshold:true,
        data:  LineChartData.map((item:ProductsDataType)=>{
          // let lineColor = "#FF6666"
          // if ( (errDataLine[0] === -1 ||  item.item_price < errDataLine[0]) 
          //     && 
          // (errDataLine[1] === -1  || item.item_sales_volume <= errDataLine[1]) )
          // lineColor = "skyblue"
          return {
            value:[
              item.item_price,
              item.item_sales_volume,
              item.item_fav_num,
              item.total_eval_num,
              item.item_stock,
              item.item_id,
              item.item_name,
              item.user_id,
            ],
            lineStyle: {
              opacity: 0.5,
              width: 1,
              // color: lineColor,
            },
          }
        }) ,
      }, 
      // {
      //   name: "框选",
      //   type: 'parallel',
      //   lineStyle: {
      //     opacity: 1,
      //     width: 2,
      //     color: 'orange',
      //   },
      //   smooth: true,
      //   animation:true,
      //   animationThreshold:true,
      //   data: SelectAvgData
      // }, 
    ]
  };
  return option
}

export default function LineChart({}: Props) {
  
  return (
    <ReactECharts 
        option={getOption()} 
        lazyUpdate={true}
        style={{width:"95%",height:"100%",margin:"0 auto"}}
        onEvents={{'click':(a:any)=>{
          let NodeInformation: (string | number)[]
          if (typeof a.data === "object") {
            NodeInformation = a.data.value
          } else {
            NodeInformation = a.data
          }
          throttle(SearchSinglePro)(NodeInformation)
          throttle(GetMatrixData)(NodeInformation[7])

          // SearchSinglePro(NodeInformation)
        }}}
      />
  )
}