import { BoxDataType, ShopColDataType, TreeSelectType } from "../types/interface";


export const DataMonth:string[] = ["6","7","8","9","所有"] 

/**
 * 树形下拉框的选项
 */
export const V1Kind:string[] = [
  "运动户外", "家用电器", "数字阅读", "手机数码", "其他",
  "家居建材", "其他商品", "文化玩乐", "服装鞋包", "母婴用品", 
  "汽配摩托", "游戏话费", "生活服务", "百货食品", "盒马", "美妆饰品","缺失"]

// 绘制平行坐标系图的信息
export const attributeData:Array<number | string> = [
  '价格','销量',
  // '销售额',
  '收藏数','评论数','库存',
  "ID",
  "商品名"
];


export const ValKind: string[] = [
  "价格","销量",
  // "销售额",
  "收藏数","评论数","库存",
]

/**
 * 可以使用的模型方法
 */
export const ModelGroups: string[] = [
  "IOF" ,
  "孤立森林"
]

/**
 * 树形选择框的类型设置
 */
export const TreeSelectData:TreeSelectType= [
  {
    title:"运动户外",
    value:"运动户外",
    children:[
      {
        title:"户外/登山/野营/旅行用品",
        value:"户外/登山/野营/旅行用品",
        children:[
          {
            title:"户外鞋靴",
            value:"户外鞋靴",
          },
        ]
      }, {
        title:"电动车/配件/交通工具",
        value:"电动车/配件/交通工具",
      }, {
        title:"自行车/骑行装备/零配件",
        value:"自行车/骑行装备/零配件",
      }, {
        title:"运动/瑜伽/健身/球迷用品",
        value:"运动/瑜伽/健身/球迷用品",
      }, {
        title:"运动包/户外包/配件",
        value:"运动包/户外包/配件",
      }, {
        title:"运动服/休闲服装",
        value:"运动服/休闲服装",
      }, {
        title:"运动鞋new",
        value:"运动鞋new",
      }
    ]
  }, {
    title:"家用电器",
    value:"家用电器",
    children:[
      {
        title:"个人护理/保健/按摩器材",
        value:"个人护理/保健/按摩器材",
      }, {
        title:"厨房电器",
        value:"厨房电器",
      }, {
        title:"大家电",
        value:"大家电",
      }, {
        title:"家庭保健",
        value:"家庭保健",
      }, {
        title:"影音电器",
        value:"影音电器",
      }, {
        title:"生活电器",
        value:"生活电器",
      },
    ]
  }, {
    title:"数字阅读",
    value:"数字阅读",
    children:[
      {
        title:"出版物电子书",
        value:"出版物电子书",
      }, {
        title:"电子书/出版物",
        value:"电子书/出版物",
      }, {
        title:"自出版电子书",
        value:"自出版电子书",
      }, 
    ]
  }, {
    title:"手机数码",
    value:"手机数码",
    children:[
      {
        title:"3C数码配件",
        value:"3C数码配件",
      }, {
        title:"DIY电脑",
        value:"DIY电脑",
      }, {
        title:"MP3/MP4/iPod/录音笔",
        value:"MP3/MP4/iPod/录音笔",
      }, {
        title:"二手数码",
        value:"二手数码",
      }, {
        title:"办公设备/耗材/相关服务",
        value:"办公设备/耗材/相关服务",
      }, {
        title:"品牌台机/品牌一体机/服务器",
        value:"品牌台机/品牌一体机/服务器",
      }, {
        title:"平板电脑/MID",
        value:"平板电脑/MID",
      }, {
        title:"手机",
        value:"手机",
      }, {
        title:"数码相机/单反相机/摄像机",
        value:"数码相机/单反相机/摄像机",
      }, {
        title:"文具电教/文化用品/商务用品",
        value:"文具电教/文化用品/商务用品",
      }, {
        title:"电子元器件市场",
        value:"电子元器件市场",
      }, {
        title:"电子词典/电纸书/文化用品",
        value:"电子词典/电纸书/文化用品",
      }, {
        title:"电玩/配件/游戏/攻略",
        value:"电玩/配件/游戏/攻略",
      }, {
        title:"电脑硬件/显示器/电脑周边",
        value:"电脑硬件/显示器/电脑周边",
      }, {
        title:"笔记本电脑",
        value:"笔记本电脑",
      }, {
        title:"网络设备/网络相关",
        value:"网络设备/网络相关",
      }, {
        title:"闪存卡/U盘/存储/移动硬盘",
        value:"闪存卡/U盘/存储/移动硬盘",
      },
    ]
  }, {
    title:"其他",
    value:"其他",
    children:[
      {
        title:"众筹",
        value:"众筹",
      }, {
        title:"公益",
        value:"公益",
      }, {
        title:"其他2",
        value:"其他2",
      }, {
        title:"农业生产资料（农村淘宝专用）",
        value:"农业生产资料（农村淘宝专用）",
      }, {
        title:"农机/农具/农膜2",
        value:"农机/农具/农膜2",
      }, {
        title:"农用物资2",
        value:"农用物资2",
      }, {
        title:"包装2",
        value:"包装2",
      }, {
        title:"商务/设计服务",
        value:"商务/设计服务",
      }, {
        title:"家装灯饰光源",
        value:"家装灯饰光源",
      }, {
        title:"拍卖会专用",
        value:"拍卖会专用",
      }, {
        title:"搬运/仓储/物流设备",
        value:"搬运/仓储/物流设备",
      }, {
        title:"智能设备",
        value:"智能设备",
      }, {
        title:"机械设备",
        value:"机械设备",
      }, {
        title:"标准件/零部件/工业耗材",
        value:"标准件/零部件/工业耗材",
      }, {
        title:"橡塑材料及制品",
        value:"橡塑材料及制品",
      }, {
        title:"润滑/胶粘/试剂/实验室耗材",
        value:"润滑/胶粘/试剂/实验室耗材",
      }, {
        title:"清洗/食品/商业设备",
        value:"清洗/食品/商业设备",
      }, {
        title:"畜牧/养殖物资",
        value:"畜牧/养殖物资",
      }, {
        title:"纺织面料/辅料/配套",
        value:"纺织面料/辅料/配套",
      }, {
        title:"美容美体仪器",
        value:"美容美体仪器",
      }, {
        title:"金属材料及制品",
        value:"金属材料及制品",
      }, {
        title:"闲鱼优品",
        value:"闲鱼优品",
      }, 
    ]
  }, {
    title:"家居建材",
    value:"家居建材",
    children:[
      {
        title:"五金/工具",
        value:"五金/工具",
      }, {
        title:"住宅家具",
        value:"住宅家具",
      }, {
        title:"全屋定制",
        value:"全屋定制",
      }, {
        title:"商业/办公家具",
        value:"商业/办公家具",
      }, {
        title:"基础建材",
        value:"基础建材",
      }, {
        title:"家居饰品",
        value:"家居饰品",
      }, {
        title:"家装主材",
        value:"家装主材",
      }, {
        title:"居家布艺",
        value:"居家布艺",
      }, {
        title:"床上用品",
        value:"床上用品",
      }, {
        title:"时尚家饰/工艺品/十字绣",
        value:"时尚家饰/工艺品/十字绣",
      }, {
        title:"特色手工艺",
        value:"特色手工艺",
      }, {
        title:"电子/电工",
        value:"电子/电工",
      }, {
        title:"装修设计/施工/监理",
        value:"装修设计/施工/监理",
      }, 
    ]
  }, {
    title:"其他商品",
    value:"其他商品",
    children:[
      {
        title:"兑换卡",
        value:"兑换卡",
      }, {
        title:"农机/农具/农膜",
        value:"农机/农具/农膜",
      }, {
        title:"农用物资",
        value:"农用物资",
      }, {
        title:"包装",
        value:"包装",
      }, {
        title:"婴童尿裤",
        value:"婴童尿裤",
      }, {
        title:"家装灯饰光源",
        value:"家装灯饰光源",
      }, {
        title:"拍卖会专用",
        value:"拍卖会专用",
      }, {
        title:"智能设备",
        value:"智能设备",
      }, {
        title:"汽车零部件/养护/美容/维保",
        value:"汽车零部件/养护/美容/维保",
      }, {
        title:"清洗/食品/商业设备",
        value:"清洗/食品/商业设备",
      }, {
        title:"畜牧/养殖物资",
        value:"畜牧/养殖物资",
      }, {
        title:"纺织面料/辅料/配套",
        value:"纺织面料/辅料/配套",
      }, {
        title:"美容美体仪器",
        value:"美容美体仪器",
      }, {
        title:"购物金",
        value:"购物金",
      }, 
    ]
  }, {
    title:"文化玩乐",
    value:"文化玩乐",
    children:[
      {
        title:"乐器/吉他/钢琴/配件",
        value:"乐器/吉他/钢琴/配件",
      }, {
        title:"书籍/杂志/报纸",
        value:"书籍/杂志/报纸",
      }, {
        title:"古董/邮币/字画/收藏",
        value:"古董/邮币/字画/收藏",
      }, {
        title:"宠物/宠物食品及用品",
        value:"宠物/宠物食品及用品",
      }, {
        title:"度假线路/签证送关/旅游服务",
        value:"度假线路/签证送关/旅游服务",
      }, {
        title:"景点门票/演艺演出/周边游",
        value:"景点门票/演艺演出/周边游",
      }, {
        title:"模玩/动漫/周边/cos/桌游",
        value:"模玩/动漫/周边/cos/桌游",
      }, {
        title:"音乐/影视/明星/音像",
        value:"音乐/影视/明星/音像",
      },
    ]
  }, {
    title:"服装鞋包",
    value:"服装鞋包",
    children:[
      {
        title:"女士内衣/男士内衣/家居服",
        value:"女士内衣/男士内衣/家居服",
      }, {
        title:"女装/女士精品",
        value:"女装/女士精品",
      }, {
        title:"女鞋",
        value:"女鞋",
      }, {
        title:"服饰配件/皮带/帽子/围巾",
        value:"服饰配件/皮带/帽子/围巾",
      }, {
        title:"流行男鞋",
        value:"流行男鞋",
      }, {
        title:"男装",
        value:"男装",
      }, {
        title:"箱包皮具/热销女包/男包",
        value:"箱包皮具/热销女包/男包",
      },
    ]
  }, {
    title:"母婴用品",
    value:"母婴用品",
    children:[
      {
        title:"奶粉/辅食/营养品/零食",
        value:"奶粉/辅食/营养品/零食",
      }, {
        title:"婴童用品",
        value:"婴童用品",
      }, {
        title:"孕妇装/孕产妇用品/营养",
        value:"孕妇装/孕产妇用品/营养",
      }, {
        title:"尿片/洗护/喂哺/推车床",
        value:"尿片/洗护/喂哺/推车床",
      }, {
        title:"玩具/童车/益智/积木/模型",
        value:"玩具/童车/益智/积木/模型",
      }, {
        title:"童装/婴儿装/亲子装",
        value:"童装/婴儿装/亲子装",
      }, {
        title:"童鞋/婴儿鞋/亲子鞋",
        value:"童鞋/婴儿鞋/亲子鞋",
      },
    ]
  }, {
    title:"汽配摩托",
    value:"汽配摩托",
    children:[
      {
        title:"摩托车/装备/配件",
        value:"摩托车/装备/配件",
      }, {
        title:"新车/二手车",
        value:"新车/二手车",
      }, {
        title:"汽车/用品/配件/改装",
        value:"汽车/用品/配件/改装",
      }, {
        title:"汽车用品/电子/清洗/改装",
        value:"汽车用品/电子/清洗/改装",
      }, 
    ]
  }, {
    title:"游戏话费",
    value:"游戏话费",
    children:[
      {
        title:"IP卡/网络电话/手机号码",
        value:"IP卡/网络电话/手机号码",
      }, {
        title:"手机号码/套餐/增值业务",
        value:"手机号码/套餐/增值业务",
      }, {
        title:"移动/联通/小灵通充值中心",
        value:"移动/联通/小灵通充值中心",
      }, {
        title:"网游装备/游戏币/帐号/代练",
        value:"网游装备/游戏币/帐号/代练",
      }, {
        title:"网络游戏点卡",
        value:"网络游戏点卡",
      }, {
        title:"腾讯QQ专区",
        value:"腾讯QQ专区",
      },
    ]
  }, {
    title:"生活服务",
    value:"生活服务",
    children:[
      {
        title:"个性定制/设计服务/DIY",
        value:"个性定制/设计服务/DIY",
      }, {
        title:"休闲娱乐",
        value:"休闲娱乐",
      }, {
        title:"医疗及健康服务",
        value:"医疗及健康服务",
      }, {
        title:"婚庆/摄影/摄像服务",
        value:"婚庆/摄影/摄像服务",
      }, {
        title:"教育培训",
        value:"教育培训",
      }, {
        title:"本地化生活服务",
        value:"本地化生活服务",
      }, {
        title:"消费卡",
        value:"消费卡",
      }, {
        title:"电影/演出/体育赛事",
        value:"电影/演出/体育赛事",
      }, {
        title:"网店/网络服务/软件",
        value:"网店/网络服务/软件",
      }, {
        title:"网络店铺代金/优惠券",
        value:"网络店铺代金/优惠券",
      }, {
        title:"购物提货券",
        value:"购物提货券",
      }, {
        title:"餐饮美食卡券",
        value:"餐饮美食卡券",
      }, {
        title:"鲜花速递/花卉仿真/绿植园艺",
        value:"鲜花速递/花卉仿真/绿植园艺",
      },
    ]
  }, {
    title:"百货食品",
    value:"百货食品",
    children:[
      {
        title:"OTC药品/医疗器械/计生用品",
        value:"OTC药品/医疗器械/计生用品",
      }, {
        title:"互联网医疗/保健用品",
        value:"互联网医疗/保健用品",
      }, {
        title:"传统滋补营养品",
        value:"传统滋补营养品",
      }, {
        title:"保健食品/膳食营养补充食品",
        value:"保健食品/膳食营养补充食品",
      }, {
        title:"厨房/烹饪用具",
        value:"厨房/烹饪用具",
      }, {
        title:"咖啡/麦片/冲饮",
        value:"咖啡/麦片/冲饮",
      }, {
        title:"处方药",
        value:"处方药",
      }, {
        title:"家庭/个人清洁工具",
        value:"家庭/个人清洁工具",
      }, {
        title:"居家日用",
        value:"居家日用",
      }, {
        title:"成人用品/情趣用品",
        value:"成人用品/情趣用品",
      }, {
        title:"收纳整理",
        value:"收纳整理",
      }, {
        title:"水产肉类/新鲜蔬果/熟食",
        value:"水产肉类/新鲜蔬果/熟食",
      }, {
        title:"洗护清洁剂/卫生巾/纸/香薰",
        value:"洗护清洁剂/卫生巾/纸/香薰",
      }, {
        title:"粮油米面/南北干货/调味品",
        value:"粮油米面/南北干货/调味品",
      }, {
        title:"粮油调味/速食/干货/烘焙",
        value:"粮油调味/速食/干货/烘焙",
      }, {
        title:"节庆用品/礼品",
        value:"节庆用品/礼品",
      }, {
        title:"茶",
        value:"茶",
      }, {
        title:"酒类",
        value:"酒类",
      }, {
        title:"零食/坚果/特产",
        value:"零食/坚果/特产",
      }, {
        title:"餐饮具",
        value:"餐饮具",
      },
    ]
  }, {
    title:"盒马",
    value:"盒马",
    children:[
      {
        title:"一次性用品",
        value:"一次性用品",
      }, {
        title:"中餐",
        value:"中餐",
      }, {
        title:"五金/汽车用品",
        value:"五金/汽车用品",
      }, {
        title:"冲调饮品",
        value:"冲调饮品",
      }, {
        title:"冷冻",
        value:"冷冻",
      }, {
        title:"冷藏",
        value:"冷藏",
      }, {
        title:"南北干货",
        value:"南北干货",
      }, {
        title:"口腔护理",
        value:"口腔护理",
      }, {
        title:"坚果炒货",
        value:"坚果炒货",
      }, {
        title:"头发护理",
        value:"头发护理",
      }, {
        title:"女性护理",
        value:"女性护理",
      }, {
        title:"婴儿洗护清洁",
        value:"婴儿洗护清洁",
      }, {
        title:"家居清洁",
        value:"家居清洁",
      }, {
        title:"尿裤/湿巾",
        value:"尿裤/湿巾",
      }, {
        title:"巧克力",
        value:"巧克力",
      }, {
        title:"常温乳制品",
        value:"常温乳制品",
      }, {
        title:"护肤品",
        value:"护肤品",
      }, {
        title:"方便速食",
        value:"方便速食",
      }, {
        title:"日本料理",
        value:"日本料理",
      }, {
        title:"日用百货",
        value:"日用百货",
      }, {
        title:"果冻",
        value:"果冻",
      }, {
        title:"果脯蜜饯",
        value:"果脯蜜饯",
      }, {
        title:"母婴奶粉",
        value:"母婴奶粉",
      }, {
        title:"水果",
        value:"水果",
      }, {
        title:"水饮料",
        value:"水饮料",
      }, {
        title:"派糕点",
        value:"派糕点",
      }, {
        title:"海鲜水产",
        value:"海鲜水产",
      }, {
        title:"清洁用品",
        value:"清洁用品",
      }, {
        title:"烘焙",
        value:"烘焙",
      }, {
        title:"熟食加工",
        value:"熟食加工",
      }, {
        title:"皮肤清洁用品",
        value:"皮肤清洁用品",
      }, {
        title:"粮油米面",
        value:"粮油米面",
      }, {
        title:"糖果",
        value:"糖果",
      }, {
        title:"纸制品",
        value:"纸制品",
      }, {
        title:"肉类禽蛋",
        value:"肉类禽蛋",
      }, {
        title:"膨化食品",
        value:"膨化食品",
      }, {
        title:"蔬菜",
        value:"蔬菜",
      }, {
        title:"衣物清洁",
        value:"衣物清洁",
      }, {
        title:"调味品",
        value:"调味品",
      }, {
        title:"辅食营养",
        value:"辅食营养",
      }, {
        title:"酒",
        value:"酒",
      }, {
        title:"风味小食",
        value:"风味小食",
      }, {
        title:"饼干",
        value:"饼干",
      },
    ]
  }, {
    title:"美妆饰品",
    value:"美妆饰品",
    children:[
      {
        title:"ZIPPO/瑞士军刀/眼镜",
        value:"ZIPPO/瑞士军刀/眼镜",
      }, {
        title:"彩妆/香水/美妆工具",
        value:"彩妆/香水/美妆工具",
      }, {
        title:"手表",
        value:"手表",
      }, {
        title:"珠宝/钻石/翡翠/黄金",
        value:"珠宝/钻石/翡翠/黄金",
      }, {
        title:"美发护发/假发",
        value:"美发护发/假发",
      }, {
        title:"美容护肤/美体/精油",
        value:"美容护肤/美体/精油",
      }, {
        title:"隐形眼镜/护理液",
        value:"隐形眼镜/护理液",
      }, {
        title:"饰品/流行首饰/时尚饰品新",
        value:"饰品/流行首饰/时尚饰品新",
      },
    ]
  }, {
    title:"缺失",
    value:"缺失",
    // children:[]
  }, 
]

// 店铺的信息
export const ShopColName  = [
  {
    show: false,
    name: '月份',
    jsonKey: 'data_month'
  },{
    show: true,
    name: '店名',
    jsonKey: 'shop_name'
  },{
    show: true,
    name: '销量',
    jsonKey: 'shop_sales_volume'
  },{
    show: true,
    name: '销售额',
    jsonKey: 'shop_sales_amount'
  },{
    show: true,
    name: '主营类型',
    jsonKey: 'main_business'
  },,{
    show: true,
    name: '描述得分',
    jsonKey: 'itemdesc_score'
  },{
    show: true,
    name: '服务得分',
    jsonKey: 'service_score'
  },{
    show: true,
    name: '物流得分',
    jsonKey: 'delivery_score'
  }
  ] as Array<ShopColDataType>


export const boxData:BoxDataType[] = [
  {
    "name": "组1",
    "values": [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960]
  },
  {
    "name": "组2",
    "values": [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800]
  },
  {
    "name": "组3",
    "values": [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840]
  }
]

