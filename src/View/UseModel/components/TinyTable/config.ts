

/**
 *  TinyTable Config
 * @param Apre 方法的前缀
 * @returns 
 */
export const PriceErrColumns = (Apre:string) => [
  {
    title: '模型',
    dataIndex: Apre + '_name',
    key: Apre + '_name',
  },
  {
    title: '筛选得平均价格',
    dataIndex: Apre + '_res_mean',
    key: Apre + '_res_mean',
  },
  {
    title: '筛选数',
    dataIndex: Apre + '_resultLen',
    key: Apre + '_resultLen',
  },
  {
    title: '筛选百分比',
    dataIndex: Apre + '_percent',
    key: Apre + '_percent',
  },
]

/**
 * 
 * @param Apre 方法的前缀
 * @returns 
 */
export const SaleErrColumns = (Apre:string) => [
  {
    title: '模型',
    dataIndex: Apre + '_name',
    key: Apre + '_name',
  },
  {
    title: '筛选得平均销量',
    dataIndex: Apre + '_res_mean',
    key: Apre + '_res_mean',
  },
  {
    title: '筛选数',
    dataIndex: Apre + '_resultLen',
    key: Apre + '_resultLen',
  },
  {
    title: '筛选百分比',
    dataIndex: Apre + '_percent',
    key: Apre + '_percent',
  },
]

/**
 * 价格错误率
 * @param Apre 方法的前缀
 * @returns 
 */
export const UnionPriceErrColumns = (Apre:string) => [
  {
    title: '筛选得平均价格',
    dataIndex: Apre + '_res_mean',
    key: Apre + '_res_mean',
  },
  {
    title: '筛选数',
    dataIndex: Apre + '_resultLen',
    key: Apre + '_resultLen',
  },
  {
    title: '筛选百分比',
    dataIndex: Apre + '_percent',
    key: Apre + '_percent',
  },
]


/**
 * 模型结合的列
 */
export const UnionSaleErrColumns = (Apre:string) => [
  {
    title: '筛选得平均销量',
    dataIndex: Apre + '_res_mean',
    key: Apre + '_res_mean',
  },
  {
    title: '筛选数',
    dataIndex: Apre + '_resultLen',
    key: Apre + '_resultLen',
  },
  {
    title: '筛选百分比',
    dataIndex: Apre + '_percent',
    key: Apre + '_percent',
  },
]


