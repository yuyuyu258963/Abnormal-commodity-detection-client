import { Table } from 'antd'
import React from 'react'
import { StoreDatatype } from '../../reducer/interface'
import store from '../../reducer/store'

import { getColumns } from "./config"

type Props = {
  data:       any,
  tagColor:   string,
  haveErr:    boolean,
}

export default function TableCom({data,tagColor,haveErr}: Props) {
  // const TableData:any = store.getState()
  // const ColumnData = TableData?.normalProductionData
  // console.dir(ColumnData)

  return (
    <Table
      size='middle'
      className="show-data-table"
      columns={getColumns(tagColor,haveErr)} 
      dataSource={data}
    />
  )
}