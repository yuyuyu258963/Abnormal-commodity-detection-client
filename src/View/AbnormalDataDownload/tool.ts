import { notification } from 'antd';
import * as  XLSX from 'xlsx'
import store from '../../reducer/store';

/**
 * 用于前端导出异常的数据
 * @param ColumnData 要保存的数据 
 * @param _ 
 */
export const AbnormalDataDownload = (filterData: any, _ :boolean[]) => {
  const data:any = store.getState()
  const {selectedDataMonth,selectedDataAttr} = data;
  filterData.forEach((item:any) => {
    item.data_month = "20210" + selectedDataMonth
  })
  const newFilterData = filterData.map((item:any) => {
    item.data_month = "20210" + selectedDataMonth
    return item;
  })
  
  var filename = `20210${selectedDataMonth}-${selectedDataAttr}-异常数据.xlsx`;
  let loadData:Array<Array<any>> = newFilterData.map((obj: any) => [
    obj.item_id,
    obj.errType,
    obj.data_month,
    obj.user_id,
    obj.item_price,
    obj.item_sales_volume,
    obj.item_name,
  ])

  loadData = loadData.sort((a,b) => Number(a[4]) - Number(b[5]) )

  loadData.unshift(['商品ID', '异常类型', '时间', '店铺ID', '商品价格', '商品销量', "商品名称"])
  var sheetName = "异常商品信息";
  var wb = XLSX.utils.book_new(),
  ws = XLSX.utils.aoa_to_sheet(loadData);
  console.log(ws);
  XLSX.utils.book_append_sheet(wb, ws, sheetName);
  XLSX.writeFile(wb, filename);
  notification.success({
    message: "下载数据成功"
  })
}