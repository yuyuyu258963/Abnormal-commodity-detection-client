import { colorScale } from "../../utils";

/**
 * 热力矩阵的样式设置
 */
export const heatMapElem = {
  height:     45,
  lineSpan:   0.5,
  offset:     "1px",
  offsetLeft: 10,
  offsetRight: 10,
  offsetTop:  10,
}


/**
 * @param params 数值大小
 * @returns 对应的颜色
 */
export function getColor(params:number):string {
  if(params === -1)
    return "white";
  // console.dir(colorScale(params))
  return colorScale(params)
}

/**
 * 年份的顺序
 */
export const MonthIndex = ["6","7","8","9"]