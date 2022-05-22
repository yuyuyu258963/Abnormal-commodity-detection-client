import { notification } from "antd";
import * as d3 from "d3";
import { handelStoreClassedDataFilter } from "../../reducer/action";
import store from "../../reducer/store";
import { classedDataType, ProductsDataType } from "../../types/interface";

/**
 *  用于获得绘制柱形统计图的配置 
 */
export const getClusterMeanViewOptions = (_:boolean[]) => {
  const data:any = store.getState();
  const clusteredData:classedDataType[] = data.clusteredData
  let clusterIdGroups: number[] = [];
  let classNumCounter: number[] = [];
  let classEdPrice:any[] = [["价格", "classId"]];
  let classEdSaleVolume:any[] = [["销量", "classId"]];
  for (let i = 0; i < clusteredData.length; i++) {
    const element = clusteredData[i];
    if (!clusterIdGroups.includes(element.classId)) {
      clusterIdGroups.push(element.classId)
      classEdPrice.push([Number(element.item_price), element.classId])
      classNumCounter.push(1);
      classEdSaleVolume.push([Number(element.item_sales_volume), element.classId])
    } else {
      const dataId = clusterIdGroups.indexOf(element.classId)
      classEdPrice[dataId + 1][0] += Number(element.item_price);
      classEdSaleVolume[dataId + 1][0] += Number(element.item_sales_volume);
      classNumCounter[dataId] ++ ;
    }
  }
  let priceMax = -100
  let saleVolumeMax = -100
  for (let i = 0; i < clusterIdGroups.length; i++) {
    classEdPrice[i + 1][0] /= classNumCounter[i];
    classEdSaleVolume[i + 1][0] /= classNumCounter[i];
    if (priceMax < classEdPrice[i + 1][0]) {
      priceMax = classEdPrice[i + 1][0]
    }
    if (saleVolumeMax < classEdSaleVolume[i + 1][0]) {
      saleVolumeMax = classEdSaleVolume[i + 1][0]
    }
  }
  const options = {
    title:{
      text: '类间平均信息',
    },
    grid: {
      // right: 3%,
    },
    xAxis: { name: '价格/销量',  },
    yAxis: { type: 'category' },
    legend: {},
    visualMap: {
      orient: 'horizontal',
      left: 'center',
      min: 10,
      max: priceMax,
      text: ['高', '低'],
      // Map the score column to color
      dimension: 0,
      inRange: {
        color: ['#65B581', '#FFCE34', '#FD665F']
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    series: [
      {
        name: "价格",
        type: 'bar',
        encode: classEdPrice.length === 0 ? {
          x: 'score',
          y: 'product'
        } : {x:"价格",y:"classId"},
        data:classEdPrice.length === 0 ? [
          ['score', 'amount', 'product'],
          [89.3, 58212, 'Matcha Latte'],
          [57.1, 78254, 'Milk Tea'],
          [74.4, 41032, 'Cheese Cocoa'],
          [50.1, 12755, 'Cheese Brownie'],
          [89.7, 20145, 'Matcha Cocoa'],
          [68.1, 79146, 'Tea'],
          [19.6, 91852, 'Orange Juice'],
          [10.6, 101852, 'Lemon Juice'],
          [32.7, 20112, 'Walnut Brownie']
        ] : [...classEdPrice],
      } , {
        name: "销量",
        type: 'bar',
        encode: classEdSaleVolume.length === 0 ? {
          x: 'score',
          y: 'product'
        } : {x:"价格",y:"classId"},
        data:classEdSaleVolume.length === 0 ? [
          ['score', 'amount', 'product'],
          [89.3, 58212, 'Matcha Latte'],
          [57.1, 78254, 'Milk Tea'],
          [74.4, 41032, 'Cheese Cocoa'],
          [50.1, 12755, 'Cheese Brownie'],
          [89.7, 20145, 'Matcha Cocoa'],
          [68.1, 79146, 'Tea'],
          [19.6, 91852, 'Orange Juice'],
          [10.6, 101852, 'Lemon Juice'],
          [32.7, 20112, 'Walnut Brownie']
        ] : [...classEdSaleVolume],
      }
    ]
  };
  
  return options;
}

/**
 * 用于处理筛选掉一个类的数据
 */
export const handelClassedDataFilter = (clickedClassId: number,errorType:string) => {
  const data:any = store.getState();
  const clusteredData : classedDataType[] = data.clusteredData;
  const {normalProductionData,ProductionData:{maxInfo}} = data;
  const selectedIdGroups = clusteredData.map( item => {
    if (item.classId === clickedClassId) {
      return item.id;
    }
  })
  const newFilteredData = normalProductionData.filter((item:ProductsDataType) => selectedIdGroups.includes(item.item_id))
  newFilteredData.forEach((item:ProductsDataType) => {
    item.errType = errorType;
    return item;
  })
  const newNormalData = normalProductionData.filter((item:ProductsDataType) => !selectedIdGroups.includes(item.item_id))
  const newClusteredData = clusteredData.filter( item => item.classId !== clickedClassId)
  store.dispatch(handelStoreClassedDataFilter({newFilteredData,newNormalData,newClusteredData, clickedClassId}))
  notification.success({
    message: "筛选成功"
  })
}
