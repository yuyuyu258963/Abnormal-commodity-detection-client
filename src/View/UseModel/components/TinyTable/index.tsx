import { Table } from 'antd'

type Props = {
  Aper:       string,
  data:       any,
  marginTop:  string,
  func:       Function,
}

export default function TinyTable({Aper,data,func,marginTop}: Props) {
  return (
    <Table
      size='small'
      bordered
      style={{width:"100%", minHeight:"90px",marginTop}}
      pagination={false}
      className="show-data-table"
      columns={func(Aper)} 
      dataSource={[data]}
    />
  )
}