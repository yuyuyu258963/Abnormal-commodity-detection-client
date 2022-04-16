import { notification } from "antd"
import { handelBackFilterState } from "../../reducer/action"
import store from "../../reducer/store"


export const handelRunBackFilter = () => {
  const data:any = store.getState()
  const {FilteredDataLen} = data
  if (FilteredDataLen === 1) {
    notification.error({
      message: "您还没有筛选过数据"
    })
    return
  }
  store.dispatch(handelBackFilterState({}))
  notification.success({
    message: "成功撤回上一次筛选"
  })
}