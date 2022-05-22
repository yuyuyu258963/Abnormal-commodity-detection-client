import store from "../../reducer/store";
import { classedDataType } from "../../types/interface";
import * as d3 from 'd3';

/**
 * 用于绘制聚类数量的工具
 */
export const getClusterNumOption = (_:boolean[]) => {
  const data:any = store.getState()
  const clusteredData:classedDataType[] = data.clusteredData
  // console.dir(clusteredData)
  let clusterIdGroups: number[] = [];
  let clusterNumCounter: number[] = [];
  let BarMapData = [];
  var colorScale_1 = d3.schemePaired;
  let colors = [];

  
  for (let i = 0; i < clusteredData.length; i++) {
    const element = clusteredData[i];
    
    if (!clusterIdGroups.includes(element.classId)) {
      clusterIdGroups.push(element.classId)
      clusterNumCounter.push(0)
    }
    clusterNumCounter[clusterIdGroups.indexOf(element.classId)]++ ;
  }

  const sorterData = clusterIdGroups.sort((a, b) => a - b);
  for (let index = 0; index < sorterData.length; index++) {
    const element = sorterData[index];
    const itemColor = element === -1 ? "black" : colorScale_1[element % 12]
    colors.push(itemColor)
  }
  for (let i = 0; i < clusterIdGroups.length; i++) {
    const element = clusterIdGroups[i];
    BarMapData.push({value:clusterNumCounter[i] , name:element})
  }

  if(colors.length === 0) {
    colors = ["#5470c6","#91cc75","#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452"]
  }
  
  const option = {
    title: {
      text: '聚类数量',
    },
    tooltip: {
      trigger: 'item',
      
    },
    legend: {
      orient: 'vertical',
      right: 'right',
    },
    color: colors,
    series: [
      {
        // name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '13',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: BarMapData.length === 0 ? [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ] : [...BarMapData],
      }
    ]
  };

  return option;
}