import Loadable from 'react-loadable'
import MyLoadingComponent from '../common/u-loading'

const load = (loader: any) => 
  Loadable({
    loader: loader,
    loading: MyLoadingComponent,
  })

export const urlObj = {
  dataImport: {
    name: '数据导入',
    link: '/dataImport',
    component: load(() => import('../View/DataImport') )
  } ,
  dataView: {
    name: '数据查看',
    link: '/dataView',
    component: load(() => import('../View/DataView'))
  } ,
  dataFilter: {
    name: '数据筛选',
    link: '/dataFilter',
    component: load(() => import('../View/DataFilter'))
  } ,
  useModel: {
    name: '使用模型',
    link: '/useModel',
    component: load(() => import('../View/UseModel'))
  } ,
  abnormalDataDownload: {
    name: '异常数据下载',
    link: '/abnormalDataDownload',
    component: load(() => import('../View/AbnormalDataDownload'))
  } ,
  otherMap: {
    name: '其他图形视图',
    link: '/otherMapView',
    component: load(() => import('../View/OhterMap'))
  } ,
  
}

const { dataImport, dataView, dataFilter, useModel, abnormalDataDownload, otherMap  } = urlObj

export const routes = [ dataImport, dataView, dataFilter, useModel, abnormalDataDownload, otherMap ]