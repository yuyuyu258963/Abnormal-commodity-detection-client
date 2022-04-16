export const OtherViewOption = {
  title:{
    text: '店铺数据字段缺失图',
    // text: '商品数据字段缺失图',
    position: 'top',
    top: "2%",
    left: "center",
    textStyle: {
      fontSize: 25,
      fontWeight: 'bold',
    },
  },
  grid: {
    bottom: "18%",
  },
  xAxis: {
    type: 'category',
    data: ['主营类型', '经营范围', '店铺注册省份', '店铺注册城市', '开店时间', '商品描述得分', '服务得分', "物流得分", "店铺经营公司所在省份",
            "店铺经营公司所在城市","店铺经营公司所在区县","主营发货省份","主营发货城市","主营发货区县"],
    // data: ['品牌ID', '品牌名称', '一级类目', '二级类目', '三级类目', '四级类目', '五级类目', "收藏数", "评论数", "库存","发货地","产地","参数"],
    name: "字段名",
    axisLabel: {
      interval: 0,
      rotate: 30,
      textStyle: {
        interval: 0,
        fontSize: 20,
        fontWeight: 'bold',
      },
    },
    nameTextStyle:{
      fontSize: 16,
      fontWeight: 'bold',
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  yAxis: {
    type: 'value',
    name: "数量",
    axisLine:{
      show: true,
    },
    axisLabel: {
      textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    },
    nameTextStyle:{
      fontSize: 20,
      fontWeight: 'bold',
    }
  },
  series: [
    {
      data: [
        {
          value: 57871,
          itemStyle: {
            color: '#d7995f',
          }
        },{
          value: 5045,
          itemStyle: {
            color: '#bcd86c',
          }
        },{
          value: 389937,
          itemStyle: {
            color: '#c46868',
          }
        },{
          value: 394926,
          itemStyle: {
            color: '#c46868',
          }
        },{
          value: 13311,
          itemStyle: {
            color: '#bcd86c',
          }
        },{
          value:  2156,
          itemStyle: {
            color: '#bcd86c',
          }
        },{
          value: 2155,
          itemStyle: {
            color: '#bcd86c',
          }
        },{
          value: 2157,
          itemStyle: {
            color: '#bcd86c',
          }
        },{
          value: 460250,
          itemStyle: {
            color: '#a83232',
          }
        },{
          value: 460251,
          itemStyle: {
            color: '#a83232',
          }
        },{
          value: 465864,
          itemStyle: {
            color: '#a83232',
          }
        },{
          value: 36436,
          itemStyle: {
            color: '#d8a472',
          }
        },{
          value: 42897,
          itemStyle: {
            color: '#d7995f',
          }
        },{
          value: 653901,
          itemStyle: {
            color: '#a90000',
          }
        },
      ],
      type: 'bar',
      label: {
        show: true,
        position: 'top',
        formatter: (e:any) => {
          let v = 0;
          if (typeof e.data === 'object') {
            v = e.data.value;
          } else {
            v = e.data;
          }
          
          return (100 * v / (654400)).toFixed(2) + "%"
          // return (100 * v / (4412335 + 4286337 + 4133204 + 4503234)).toFixed(2) + "%"
        },
        textStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
      },
    }
    
    
    // {
    //   data: [
    //     {
    //       // value: 5665013,
    //       value: 2846397 + 2648683 + 2827043 + 3029536,
    //       itemStyle: {
    //         // color: '#e28833'
    //         color: '#a83232'
    //       }
    //     },
    //     {
    //       value: 1160223 + 1049173 + 1079511 + 1568052,
    //       itemStyle: {
    //         color: '#c7813f'
    //       }
    //     },
    //     {
    //       value: 7390 + 11569 + 8459 + 598193,
    //       itemStyle: {
    //         color: '#bcd86c'
    //       }
    //     },{
    //       value: 7390 + 11569 + 8459 + 598193,
    //       itemStyle: {
    //         color: '#bcd86c'
    //       }
    //     },{
    //       value: 10361 + 14319 + 11322 + 600506,
    //       itemStyle: {
    //         color: '#bcd86c'
    //       }
    //     },{
    //       value: 1668950 + 1466760 + 1545428 + 1916261,
    //       itemStyle: {
    //         color: '#e28833'
    //       },
          
    //     },{
    //       value: 3898659 + 3559734 + 3700737 + 3859683,
    //       itemStyle: {
    //         color: '#a90000'
    //       }
    //     },{
    //       value: 2718113 + 2531084 + 2740597 + 2895864,
    //       itemStyle: {
    //         color: '#a83232'
    //       }
    //     },{
    //       value: 2718110 + 2531079 + 2740595 + 2895862,
    //       itemStyle: {
    //         color: '#a83232'
    //       }
    //     },{
    //       value: 2285279 + 2154521 + 2372837 + 2530551,
    //       itemStyle: {
    //         color: '#aa5050'
    //       }
    //     },{
    //       value: 2571820 + 2413928 + 2554815 + 2730186,
    //       itemStyle: {
    //         color: '#a83232'
    //       }
    //     },{
    //       value: 3267001 + 2980785 + 3093554 + 3303453,
    //       itemStyle: {
    //         color: '#a83232'
    //       }
    //     },{
    //       value: 197293 + 183628 + 184744 + 791246,
    //       itemStyle: {
    //         color: '#d7995f'
    //       }
    //     },

    // //     // 7390 + 11569 + 8459 + 598193,
    // //     // 7390 + 11569 + 8459 + 598193,
    // //     // 10361 + 14319 + 11322 + 600506,
    // //     // 1668950 + 1466760 + 1545428 + 1916261,
    // //     // 3898659 + 3559734 + 3700737 + 3859683,
    // //     // 2718113 + 2531084 + 2740597 + 2895864,
    // //     // 2718110 + 2531079 + 2740595 + 2895862,
    // //     // 2285279 + 2154521 + 2372837 + 2530551,
    // //     // 2571820 + 2413928 + 2554815 + 2730186,
    // //     // 3267001 + 2980785 + 3093554 + 3303453,
    // //     // 197293 + 183628 + 184744 + 791246,
    //   ],
    //   type: 'bar',
    //   label: {
    //     show: true,
    //     position: 'top',
    //     formatter: (e:any) => {
    //       let v = 0;
    //       if (typeof e.data === 'object') {
    //         v = e.data.value;
    //       } else {
    //         v = e.data;
    //       }
          
    //       return (100 * v / (4412335 + 4286337 + 4133204 + 4503234)).toFixed(2) + "%"
    //     },
    //     textStyle: {
    //       fontSize: 20,
    //       fontWeight: 'bold',
    //     },
    //   },
    // }

    
  ]
};