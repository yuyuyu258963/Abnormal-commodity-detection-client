import {MenuItemType} from "./interface"
import { AimOutlined, BarChartOutlined , VerticalAlignBottomOutlined , DotChartOutlined, FilterOutlined, EyeOutlined, SlidersOutlined    } from '@ant-design/icons';

const MENU_MAP: MenuItemType[] = [
  {
    id: 6,
    name: "数据缺失视图",
    link: "/otherMapView",
    icon: BarChartOutlined ,
    children:[],
  }, 
  {
    id: 1,
    name: "数据导入",
    link: "/dataImport",
    icon: EyeOutlined,
    children:[],
  }, 
  {
    id: 100,
    name: "异常筛选",
    link: "/dataView",
    icon: FilterOutlined,
    children:[
      {
        id: 2,
        name: "普通筛选",
        link: "/dataView",
        icon: SlidersOutlined ,
        children:[],
      }, {
        id: 3,
        name: "聚类筛选",
        link: "/dataFilter",
        icon: DotChartOutlined ,
        children:[],
      }, {
        id: 4,
        name: "模型筛选",
        link: "/useModel",
        icon: AimOutlined,
        children:[],
      },
    ],
  } , {
    id: 5,
    name: "异常数据下载",
    link: "/abnormalDataDownload",
    icon: VerticalAlignBottomOutlined,
    children:[],
  } 
]

// const MENU_MAP: MenuItemType[] = [
//   {
//     id: 1,
//     name: "数据导入",
//     link: "/dataImport",
//     icon: EyeOutlined,
//     isSubmenu:false,
//     children:[],
//   }, {
//     id: 2,
//     name: "数据视图",
//     link: "/dataView",
//     icon: PieChartOutlined,
//     isSubmenu:false,
//     children:[],
//   }, {
//     id: 3,
//     name: "数据筛选",
//     link: "/dataFilter",
//     icon: FilterOutlined,
//     isSubmenu:false,
//     children:[],
//   }, {
//     id: 4,
//     name: "使用模型",
//     link: "/useModel",
//     icon: AimOutlined,
//     isSubmenu:false,
//     children:[],
//   }, {
//     id: 5,
//     name: "异常数据下载",
//     link: "/abnormalDataDownload",
//     icon: VerticalAlignBottomOutlined,
//     isSubmenu:false,
//     children:[],
//   }
// ]


export default MENU_MAP ;