import { BoxDataType, classedDataType, ProductsDataType, shopDataType } from "../types/interface"

export interface GetDataInfoType {
  DataLen?:                    number,
  LineChartData?:              ProductsDataType[],
  errDataLine?:                number[],
  maxInfo?:                    number[][],
  status?:                     string,
} 


// 状态库的数据类型
export declare interface StoreDatatype {
  ProductionData:           GetDataInfoType,
  value?:                   string,
  normalProductionData:     ProductsDataType[],
  FilteredData:             Array<ProductsDataType[]>,
  NodeInformation:          Array<string|number>,
  ShopData:                 shopDataType[],
  priceMatrix:              number[][],
  saleVolunmMatrix:         number[][],
  matrixId:                 string[][],
  boxData:                  BoxDataType[],
  errDataLine?:             number[],
  clusteredData:            classedDataType[],
  actionName:               string,
  historyMaxInfo:           number[][][],
  selectedDataMonth:        string,
  selectedDataName:         string,
  [n:string]:               any
}
