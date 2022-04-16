import { notification } from "antd";
import { handelTagSingalToAbnormal, handelTagSingalToNormal } from "../../reducer/action";
import store from "../../reducer/store"


/**
 * 用于出发store中数据的改变
 * @param selectedId 选中的数据的ID
 */
export const handelSingalErrChange = (obj:any) => {
  const ProductId = obj.item_id
  const data:any = store.getState()
  let {normalProductionData, FilteredData} = data;

  normalProductionData.push(obj)
  const newFiltered = FilteredData.map((filterIter:any) =>{
    return filterIter.filter((item:any) => item.item_id !== ProductId) 
  })
  store.dispatch(handelTagSingalToNormal({newFiltered,newNormal:normalProductionData}))
  notification.success({
    message: `ID: ${ProductId} 成功标为正常`
  })
}

/**
 * 
 * @param obj 选中的数据
 */
export const handelSingalNormalChange = (obj:any,errType:string) => {
  obj.errType = errType;
  const ProductId = obj.item_id
  const data:any = store.getState()
  let {normalProductionData, FilteredData} = data;
  
  const nNormal = normalProductionData.filter((item:any) => item.item_id !== ProductId)
  FilteredData[0].push(obj)
  store.dispatch(handelTagSingalToAbnormal({nNormal,nFiltered:FilteredData}))
  notification.success({
    message: `ID: ${ProductId} 成功标为${errType}`
  })
}
