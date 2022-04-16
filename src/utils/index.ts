import * as d3 from "d3";

// 节流（n 秒只执行一次）
export const debounce = (fn:Function, delay: number) =>{
  let timer : NodeJS.Timeout |null;
  return function(...args: any) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      // @ts-ignore
      fn.apply(this, args)
    },delay);
  }
}

// 节流（n 秒内只执行一次）
export const throttle = (fn: Function, delay = 500) => {
  let flag = false;
  return (...args: any) => {
    if(!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        // @ts-ignore
        fn.apply(this, args);
      },delay);
    }
  }
}

// 设置颜色比例尺
export const colorScale = d3.scaleLinear([0, 10], ["wheat", "rgb(107, 0, 110)"]);

// 数组扁平化处理
// @ts-ignore
export const flatten = (arr, depth = 1) => arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);