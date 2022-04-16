

// @ts-ignore
import { CHANGE_DATA_MONTH, CHANGE_DATA_NAME, CHANGE_MATRIX_DATA, CLASSED_DATA_FILTER, CLICK_SINGLE_LINE, FILTER_DATA, FILTER_STATE_BACK, GET_CLUSTER_DATA, MODEL2_DATA_FILTER, MODEL_ACCPET_FILTER, SELECT_DATA, Tag_SINGAL_ABNORMAL, TAG_SINGAL_NORMAL } from "./constant";

/**
 *  用于改变选中的数据月份 
 */
export const handelChangeDataMonth = (data:any) => ({type: CHANGE_DATA_MONTH, data: data});

/**
 *  用于改变选中的数据名字 
 */
export const handelChangeDataName = (data:any) => ({type: CHANGE_DATA_NAME, data: data});

/**
 * 用于加载数据 
 */
export const selectDataAction = (data: any) => ({type: SELECT_DATA, data: data});

/**
 * 用于处理数据筛选
 */
export const filterDataAction = (data: any) => ({type: FILTER_DATA, data: data});

/**
 * 用于处理点击平行坐标系中的线
 */
export const clickSingleLine = (data: any) => ({type: CLICK_SINGLE_LINE, data: data});

/**
 *  用于处理更新矩阵数据
 */
export const changeMatrixData = (data: any) => ({type: CHANGE_MATRIX_DATA, data: data});

/**
 *  用于处理得到聚类后的数据 
 * @param data 聚类的数据
 */
export const changeClusterData = (data: any) => ({type: GET_CLUSTER_DATA, data: data});


/**
 *  用于筛选一个类的数据 
 */
export const handelStoreClassedDataFilter = (data: any) => ({type: CLASSED_DATA_FILTER, data: data});

/**
 * 用于异常筛选的回退
 */
export const handelBackFilterState = (data: any) => ({type: FILTER_STATE_BACK, data: data});

/**
 * 用模型筛选数据后更新store中的数据
 */
export const handelModel2DATAFilter = (data: any) => ({type: MODEL2_DATA_FILTER, data:data})


/**
 *  接受模型的筛选
 */
export const handelAccpetModelFilter = (data: any) => ({type: MODEL_ACCPET_FILTER, data:data})


/**
 * 将单个异常标回正常
 * @param data 包含要改变的数据
 * @returns 
 */
export const handelTagSingalToNormal = (data: any) => ({type: TAG_SINGAL_NORMAL, data:data})


/**
 * 将单个异常标成正常
 * @param data 包含要更改的数据
 * @returns 
 */
export const handelTagSingalToAbnormal = (data: any) => ({type: Tag_SINGAL_ABNORMAL, data:data})
