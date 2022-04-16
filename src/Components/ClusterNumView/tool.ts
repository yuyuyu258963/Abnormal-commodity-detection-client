import store from "../../reducer/store";
import { classedDataType } from "../../types/interface";

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
  for (let i = 0; i < clusteredData.length; i++) {
    const element = clusteredData[i];
    if (!clusterIdGroups.includes(element.classId)) {
      clusterIdGroups.push(element.classId)
      clusterNumCounter.push(0)
    }
    clusterNumCounter[clusterIdGroups.indexOf(element.classId)]++ ;
  }
  for (let i = 0; i < clusterIdGroups.length; i++) {
    const element = clusterIdGroups[i];
    BarMapData.push({value:clusterNumCounter[i] , name:element})
  }
  
  const option = {
    title: {
      text: '聚类数量',
    },
    tooltip: {
      trigger: 'item',
      
    },
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