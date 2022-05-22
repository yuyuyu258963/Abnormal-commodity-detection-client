import React, { useEffect, useRef, useState } from 'react'
import ReactECharts from 'echarts-for-react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { CLASSED_DATA_FILTER, GET_CLUSTER_DATA } from '../../reducer/constant';
import store from '../../reducer/store';
import { getClusterMeanViewOptions, handelClassedDataFilter } from './tool';
import { Model } from 'echarts';
import { Modal, notification, Radio } from 'antd';

type Props = {}

function ClusterMeanView({}: Props) {
  const [update, setUpdate] = useState([false]);
  const [clickedClassId, setClickedClassId] = useState<number>(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [errorType, setErrorType] = useState("价格异常");
  
  useEffect(() => {
    store.subscribe(()=>{
      const data :any = store.getState();
      const {actionName} = data;
      // if (actionName === GET_CLUSTER_DATA || actionName === CLASSED_DATA_FILTER) {
        setUpdate([!update[0]])
      // }
    })
  }, [])
  return (
    <>
      <Modal title="异常类型选择" visible={isModalVisible}
        onOk={()=> {
          setIsModalVisible(false);
          handelClassedDataFilter(clickedClassId,errorType)
        }} onCancel={() => {
          setIsModalVisible(false);
          notification.success({
                  message: "取消筛选"
                })
        }}>
        <Radio.Group 
          style={{transform: 'translateX(80%)', marginTop:"4px"}}
          onChange={(e:any)=>{
            // console.dir(e.target.value)
            setErrorType(e.target.value);
          }} defaultValue={"价格异常"}>
          <Radio value={"价格异常"}>价格异常</Radio>
          <Radio value={"销量异常"}>销量异常</Radio>
        </Radio.Group>
      </Modal>
      
      <ReactECharts 
        option={getClusterMeanViewOptions([...update])} 
        lazyUpdate={true}
        style={{width:"95%",height:"100%",margin:"0 auto"}}
        onEvents={{'click':(e:any)=>{
          setIsModalVisible(true);
          setClickedClassId(e.data[1])
          // const clickedClassId = e.data[1];
          // Modal.confirm({
          //   title: '您确定要筛选掉这一类数据嘛',
          //   icon: <ExclamationCircleOutlined />,
          //   onOk() {

          //     // handelClassedDataFilter(clickedClassId)
          //   },
          //   onCancel() {
          //     notification.success({
          //       message: "取消筛选"
          //     })
          //   },
          // });
        }}}
      />
    </>
  )
}

export default React.memo(ClusterMeanView);

