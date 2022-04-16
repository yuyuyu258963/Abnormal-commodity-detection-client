import { Modal, notification, Radio } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useState } from "react";

// 用于设置异常的种类
const ErrorTypeChoice = (func:Function):any => {
  const [errorType, setErrorType] = useState<string>("价格异常")
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  // return Modal.confirm({
  //   title: '您确定要筛选掉这一类数据嘛',
  //   icon: <ExclamationCircleOutlined />,
  //   content: () => 
  //   <>
  //     '筛选后将不会显示在结果中'
  //     <Radio.Group 
  //       style={{transform: 'translateX(80%)', marginTop:"4px"}}
  //       onChange={(e:any)=>{
  //         console.dir(e)
  //         setErrorType(errorType)
  //         // changeSelectedVal(e.target.value)
  //       }} defaultValue={"价格异常"}>
  //       <Radio value={"价格异常"}>价格异常</Radio>
  //       <Radio value={"销量异常"}>销量异常</Radio>
  //     </Radio.Group>
  //   </>
  //   ,
  //   onOk() {
  //     console.dir(errorType)
  //     // func()
  //     // handelClassedDataFilter(clickedClassId)
  //   },
  //   onCancel() {
  //     notification.success({
  //       message: "取消筛选"
  //     })
  //   },
  // });
  return (
    <Modal title="Basic Modal" visible={isModalVisible} onOk={()=> {
      setIsModalVisible(false)
      }} onCancel={() => {}}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
  )
}

export default ErrorTypeChoice;