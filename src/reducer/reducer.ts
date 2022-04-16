import { boxData } from "../constants";
import { ProductsDataType } from "../types/interface";
import { CHANGE_DATA_MONTH, CHANGE_DATA_NAME, CHANGE_MATRIX_DATA, CLASSED_DATA_FILTER, CLICK_SINGLE_LINE, FILTER_DATA, FILTER_STATE_BACK, GET_CLUSTER_DATA, MODEL2_DATA_FILTER, MODEL_ACCPET_FILTER, SELECT_DATA, Tag_SINGAL_ABNORMAL, TAG_SINGAL_NORMAL } from "./constant";

import { StoreDatatype } from "./interface"

const initState:StoreDatatype = {
  ProductionData: {
    maxInfo:                [[0,10],[0,10],[0,10],[0,10],[0,10],[0,10],],
    LineChartData:          [],
    errDataLine:            [],
  },
  normalProductionData:     [],
  FilteredData:             [[]],
  FilteredDataLen:          0,
  NodeInformation:          ["","","","","","","",],
  ShopData:                 [],
  priceMatrix:              [[]],
  saleVolunmMatrix:         [[]],
  matrixId:                 [[]],
  clusteredData:            [],
  boxData:                  boxData,
  actionName:               "",
  selectedDataMonth:        "6",
  selectedDataName:         "运动户外",
  selectedDataAttr:         "运动户外",
  priceErr:                 {},
  saleErr:                  {},
  historyMaxInfo:           [[[0,10],[0,10],[0,10],[0,10],[0,10],[0,10],]],
  // value: "默认值"
}

const reducer = (state = initState, action:any) => {
  const {type, data} = action;
  // console.dir(action)
  // console.dir(data)
  switch (type) {
    case CHANGE_DATA_MONTH:
      state.selectedDataMonth = data;
      return state;
    case CHANGE_DATA_NAME:
      state.selectedDataName = data.fileName;
      state.selectedDataAttr = data.val;
      return state;
    case SELECT_DATA:
      state.actionName = SELECT_DATA
      state.normalProductionData = data.LineChartData
      state.ProductionData = data
      state.historyMaxInfo.push(data.maxInfo?.concat() as number[][])
      return state;
    case FILTER_DATA:
      state.actionName = FILTER_DATA
      const {newLineChartData,filteredData,maxInfo} = data
      state.normalProductionData = newLineChartData
      state.FilteredDataLen += filteredData.length;
      state.historyMaxInfo.push(state.ProductionData.maxInfo?.concat() as number[][])
      // state.FilteredData = [...filteredData,...state.FilteredData]
      state.FilteredData.push(filteredData)
      state.ProductionData.maxInfo = maxInfo
      return state;
    case CLICK_SINGLE_LINE:
      state.actionName = CLICK_SINGLE_LINE
      const {NodeInformation,ShopData} = data;
      state.NodeInformation = NodeInformation
      state.ShopData = ShopData
      return state;
    case CHANGE_MATRIX_DATA:
      state.actionName = CHANGE_MATRIX_DATA
      const {priceMatrix, matrixId, saleVolunmMatrix} = data;
      state.priceMatrix = priceMatrix
      state.saleVolunmMatrix = saleVolunmMatrix
      state.matrixId = matrixId
      return state;
    case GET_CLUSTER_DATA:
      state.actionName = GET_CLUSTER_DATA
      state.clusteredData = data
      return state
    case CLASSED_DATA_FILTER:
      const {newNormalData,newFilteredData,newClusteredData} = data;
      state.actionName = CLASSED_DATA_FILTER
      state.normalProductionData = newNormalData;
      state.FilteredDataLen += newFilteredData.length;
      state.FilteredData.push(newFilteredData)
      // state.FilteredData = [...newFilteredData,...state.FilteredData]
      state.clusteredData = newClusteredData
      return state;
    case FILTER_STATE_BACK:
      // 返回上一次筛选
      const preFilteredData = state.FilteredData.pop() as ProductsDataType[]
      state.FilteredDataLen -= preFilteredData.length;
      state.normalProductionData = [...state.normalProductionData,...preFilteredData]
      state.ProductionData.maxInfo = state.historyMaxInfo.pop()?.concat()
      return state;
    case MODEL2_DATA_FILTER:
      const {priceErr,saleErr} = data;
      state.priceErr = priceErr;
      state.saleErr = saleErr;
      return state;
    case MODEL_ACCPET_FILTER:
      const {NewModelFilterEdData , NewNormalData} = data;
      state.actionName = MODEL_ACCPET_FILTER
      state.normalProductionData = NewNormalData;
      state.FilteredDataLen += NewModelFilterEdData.length;
      state.FilteredData.push(NewModelFilterEdData)
      return state;
      
    case TAG_SINGAL_NORMAL:
      const {newFiltered,newNormal} = data;
      state.actionName = TAG_SINGAL_NORMAL;
      state.normalProductionData = newNormal;
      state.FilteredData = newFiltered;
      state.FilteredDataLen --;

      return state;
    case Tag_SINGAL_ABNORMAL:
      const {nFiltered,nNormal} = data;
      state.actionName = Tag_SINGAL_ABNORMAL;
      state.normalProductionData = nNormal;
      state.FilteredData = nFiltered;
      state.FilteredDataLen ++;
      return state;
    default:
      return state;
  }
}

export default reducer;