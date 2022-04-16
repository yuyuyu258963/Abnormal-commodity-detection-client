import { notification } from "antd"
import { filterDataAction } from "../../reducer/action"
import store from "../../reducer/store"


/**
 * 用于处理数据的筛选
 * @param filterRange 筛选的范围
 * @param selectedValKind 筛选数据的类型
 */
export function HandelDataFilter(filterRange:number[], selectedValKind:number, errType:string, _:boolean[]) {
  
  const data:any = store.getState()
  const LineChartData = data.normalProductionData
  const maxInfo = data.ProductionData.maxInfo
  maxInfo[selectedValKind] = filterRange

  const newLineChartData = LineChartData.filter((obj: any) => {
    const val = Object.values(obj) as any[];
    
    return filterRange[0] <= val[selectedValKind] && val[selectedValKind] <=  filterRange[1]
  })

  const filteredData = LineChartData.filter((obj: any) => {
    const val = Object.values(obj) as any[];
    obj.errType = errType;
    return filterRange[0] > val[selectedValKind] || val[selectedValKind] >  filterRange[1]
  })
  filteredData.forEach((obj:any) => {
    obj.errType = errType;
    return obj
  })
  store.dispatch(filterDataAction({maxInfo, newLineChartData, filteredData}))
  notification.success({
    message: "成功筛选"
  })
}