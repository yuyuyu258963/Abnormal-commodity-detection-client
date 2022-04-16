import axios from 'axios';
import { UrlRoot } from '../../types/actionTypes';
import { notification } from 'antd';
import { ProductsDataType, shopDataType } from '../../types/interface';
import { changeClusterData, changeMatrixData, clickSingleLine, handelModel2DATAFilter } from '../../reducer/action';
import store from '../../reducer/store';

/**
 * 用于商品的数据
 */
export const LoadData = async (data:any) => {
  let resData
  await axios({
    method: 'post',
    timeout: 50000,
    url: UrlRoot + 'getData',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  }).then((response) => {
    resData = response.data
    notification.success({
      message: "成功获取数据"
    })
  }).catch((error) => {
    notification.warning({
      message: error
    })
    resData = "error"
  })
  return resData
}

/**
 * 用于查询一个商品对应的数据
 */
export const SearchSinglePro = (NodeInformation:Array<number | string>) => {
  axios({
    method: "post",
    timeout: 50000,
    url: UrlRoot + "getShopData",
    headers: {
      'Content-Type': '*'
    },
    data: JSON.stringify({userId:NodeInformation[7]})
  }).then(res => {
    const ShopData = res.data.shopData;
    store.dispatch(clickSingleLine({ShopData,NodeInformation}))
    
  }).catch(err => {
    console.dir(err);
  })
}

/**
 * 用于获取绘制热力矩阵的数据
 * @param userId 店铺的 Id
 */
export const GetMatrixData = (userId: string) =>{
  axios({
    method: 'GET',
    timeout: 500000,
    url: UrlRoot + "getmatrixdata",
    params:{
      "userid" : userId
    },
    headers: {
      'Content-Type': '*'
    },
  }).then( res => {
    const priceMatrix:number[][] = res.data.priceMatrix
    const saleVolunmMatrix:number[][] = res.data.saleVolunmMatrix
    const matrixId:string[][] = res.data.matrixId
    store.dispatch(changeMatrixData({priceMatrix,matrixId,saleVolunmMatrix}))
  }).catch( err => {
    console.dir("err")
    
  })
}

/**
 * 用于发送聚类的请求
 * @param methodName 聚类方法
 * @param clusterNumber 聚类数量
 */
export const RunCluster = async (methodName: string, clusterNumber: number) => {
  const data:any = store.getState()
  const {normalProductionData} = data
  // console.dir({methodName, clusterNumber, productionData:normalProductionData})
  await axios({
    method: "post",
    timeout: 500000,
    url: UrlRoot + "cluster",
    headers: {
      'Content-Type': '*'
    },
    data: JSON.stringify({methodName, clusterNumber:String(clusterNumber), productionData:normalProductionData})
  }).then( res => {
    const {classedData:resData} = res.data
    console.dir(resData);
    store.dispatch(changeClusterData(resData));
    notification.success({
      message: "聚类结束"
    })
  })
  .catch( err => {
    notification.warning({
      message: "聚类失败"
    })
  })
  return 
}

/**
 * 发送数据
 */
export const AbnormalDataDownload = (filterData: any, _ :boolean[]) => {
  const data:any = store.getState()
  const {selectedDataMonth} = data;
  filterData.forEach((item:any) => {
    item.data_month = "20210" + selectedDataMonth
  })
  const newFilterData = filterData.map((item:any) => {
    item.data_month = "20210" + selectedDataMonth
    return item;
  })

  
  
  axios({
    method: "post",
    timeout: 50000,
    url: UrlRoot + 'saveData',
    headers: {
      'Content-Type': '*'
    },
    data: JSON.stringify({filterData:newFilterData})
  }).then( res => {
    notification.success({
      message: "下载数据成功"
    })
  }).catch( err => {
    notification.warning({
      message: "下载数据失败"
    })
  })
}

// 运行模型
export const RunModel = async () => {
  const data:any = store.getState();
  const normalProductionData: ProductsDataType[] = data.normalProductionData;
  const {selectedDataMonth, selectedDataName} = data;
  // console.dir({selectedDataMonth, selectedDataName})
  
  const Data = normalProductionData.map( item =>  ({
      item_id:item.item_id,
      item_price:item.item_price,
      item_sales_volume:item.item_sales_volume,
    }))
  
  await axios({
    method: "POST",
    timeout: 50000,
    url: UrlRoot + "runModel",
    headers: {
      'Content-Type': '*'
    },
    data: JSON.stringify({Data,selectedDataMonth,selectedDataName})
  }) .then( res => {
    const {priceErr,saleErr} = res.data;
    // console.dir(priceErr)
    // console.dir(saleErr)
    store.dispatch(handelModel2DATAFilter({priceErr,saleErr}))
    notification.success({
      message: "运行模型成功"
    })
  }) .catch( err => {
    notification.error({
      message: "运行模型失败"
    })
    console.dir(err)
  })
  return
}
