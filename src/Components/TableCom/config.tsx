import { Space } from "antd";
import Tag from "antd/lib/tag";
import { handelSingalErrChange, handelSingalNormalChange } from "./tool";

/**
 *  创建表格的配置
 * @param color 表格中tag 的颜色
 * @returns 
 */
export function getColumns(color:any,haveErr:boolean) {
  const clos = [
    {
      title: '商品名',
      dataIndex: 'item_name',
      key: 'item_name',
      render: (text:string):JSX.Element => {return <Tag >{text} </Tag>}
    },
    {
      title: '商品价格',
      dataIndex: 'item_price',
      key: 'item_price',
      sorter: (a:any, b:any) => {
        return a.item_price - b.item_price
      },
    },
    {
      title: '销售量',
      dataIndex: 'item_sales_volume',
      key: 'item_sales_volume',
      sorter: (a:any, b:any) => {
        return a.item_sales_volume - b.item_sales_volume
      },
    },
    {
      title: '收藏数',
      dataIndex: 'item_fav_num',
      key: 'item_fav_num',
    },
    {
      title: '评论数',
      dataIndex: 'total_eval_num',
      key: 'address',
    },
    {
      title: '库存',
      dataIndex: 'item_stock',
      key: 'address',
    },
    {
      title: '商品ID',
      dataIndex: 'item_id',
      key: 'item_id',
    },
  ] as any;
  if (haveErr) {
    clos.push({
      title: '异常类型',
      dataIndex: 'errType',
      key: 'errType',
      render: (text:string):JSX.Element => {return <Tag color={text === "价格异常" ? "red" : "warning"} >{text} </Tag>},
      filters: [
        {
          text: <span>价格异常</span>,
          value: '价格异常',
        },
        {
          text: <span>销量异常</span>,
          value: '销量异常',
        },
      ],
      onFilter: (value:any, record:any) => {

        return record.errType.startsWith(value)
      },
      filterSearch:(input:any, record:any) => {

        return record.errType.indexOf(input) > -1
      },
    })
    
    clos.push({
      title: 'Action',
      key: 'action',
      render: (line:any) => (
        <Space size="middle">
          <a onClick={()=>{
            handelSingalErrChange(line)
          }}>标为正常</a>
        </Space>
        ),
    })
    
  } else {
    clos.push({
      title: 'Action',
      key: 'action',
      render: (line:any) => (
        <Space size="middle">
          <a onClick={()=>{
            handelSingalNormalChange(line,"价格异常")
          }}>价格异常</a>
          <a onClick={()=>{
            handelSingalNormalChange(line,"销量异常")
          }}>销量异常</a>
        </Space>
        ),
    })
  }
  
  return clos
}

// export const Columns = [
// //   {
// //     title: '商品名',
// //     dataIndex: 'item_name',
// //     key: 'item_name',
// //     render: (text:string):JSX.Element => {return <Tag color="blue" >{text} </Tag>}
// //   },
// //   {
// //     title: '商品价格',
// //     dataIndex: 'item_price',
// //     key: 'item_price',
// //     sorter: (a:any, b:any) => {
// //       return a.item_price - b.item_price
// //     },
// //   },
// //   {
// //     title: '销售量',
// //     dataIndex: 'item_sales_volume',
// //     key: 'item_sales_volume',
// //   },
// //   {
// //     title: '收藏数',
// //     dataIndex: 'item_fav_num',
// //     key: 'item_fav_num',
// //   },
// //   {
// //     title: '评论数',
// //     dataIndex: 'total_eval_num',
// //     key: 'address',
// //   },
// //   {
// //     title: '库存',
// //     dataIndex: 'item_stock',
// //     key: 'address',
// //   },
// //   {
// //     title: '商品ID',
// //     dataIndex: 'item_id',
// //     key: 'item_id',
// //   },
// ];