import { notification } from 'antd';
import 'echarts-liquidfill';
import { handelAccpetModelFilter } from '../../../../reducer/action';
import store from '../../../../reducer/store';
import { ProductsDataType } from '../../../../types/interface';

/**
 * 用于获取绘制水球图的数据
 */
export const GetFilterNumOptions = (nowState:number) => {
  
  const option = {
    title: {
      text: `筛选后余量`,
    },

    series: [{
      type: 'liquidFill',
        data: [nowState,0.6, 0.5, 0.4, 0.3],
        size: 5,
        outline: {
            show: false
        },
        label: {
          normal: {
            // show: false, //不显示label  用副标题代替了
            formatter:  "{c}%",
            textStyle: {
              fontSize: 38,
              color: "black"
            }
          }
        },
    }]
  }
  return option;
}

/**
 * 用于接受筛选
 */
export const acceptFilter = (FilteredId:number[],errType:string) => {
  const data:any = store.getState()
  const {normalProductionData} = data;
  const newNormalProductionData = normalProductionData.filter((item:ProductsDataType) => !FilteredId.includes(Number(item.item_id)))
  const FilterEdData = normalProductionData.filter((item:ProductsDataType) => FilteredId.includes(Number(item.item_id)))
  FilterEdData.forEach((element:ProductsDataType) => {
    element.errType = errType;
    return element;
  });

  store.dispatch(handelAccpetModelFilter({NewModelFilterEdData:FilterEdData, NewNormalData:newNormalProductionData}))
  notification.success({
    message: "筛选成功"
  })
}
