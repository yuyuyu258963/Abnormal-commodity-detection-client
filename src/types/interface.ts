
/**
 * 树形下拉框的类型设置
 */
export type TreeSelectType = {
  title:        string,
  value:        number | string,
  children?:    TreeSelectType | [],
  [a:string]:   number | any,
}[]

/**
 * 店铺数据的类型
 */
export interface ShopColDataType  {
  show:     boolean,
  name:     string,
  jsonKey:  string,
}

/**
 * 获取到商品数据的格式
 */
export interface ProductsDataType {
  item_price:         number,
  item_sales_volume:  number,
  item_fav_num:       number,
  total_eval_num:     number,
  item_stock:         number,
  item_name:          string,
  item_id:            string,
  user_id:            string,
  errType?:           string,
  // cate_name_lv1:      string,
  // cate_name_lv2:      string,
  // cate_name_lv3:      string,
}

/**
 * 获取到的店铺信息的类型
 */
export type shopDataType = Array<{
  data_month:         number,
  shop_name:          string,
  shop_sales_volume:  number,
  shop_sales_amount:  number,
  main_business:      string,
  itemdesc_score:     number,
  service_score:      number,
  delivery_score:     number,
} | undefined>

/**
 * 获取到分类数据的类型  也就是那个散点图的聚类之后的返回的信息
 */
export interface classedDataType {
  x:                  number,
  y:                  number,
  classId:            number,
  id:                 string,
  item_price:         number,
  item_sales_volume:  number,
}


/**
 * 散点分类之后的信息
 */
export interface classNumCounterType {
  [a :string]: string[]
}

/**
 * 箱线图的数据类型
 */
export interface BoxDataType {
  name: string,
  values: Array<number>,
  [a : string]: any,
}