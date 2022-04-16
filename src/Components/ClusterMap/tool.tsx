import * as d3 from "d3";
import { classedDataType } from "../../types/interface";
import { throttle } from "../../utils";
import { padding } from "./config";

/**
 * 用于绘制聚类后的散点图
 * @param clusteredData 绘制散点图的数据
 */
export const drawScatterMap = (clusteredData :classedDataType[]) =>{
  const svg = document.querySelector('#cluster-map') as Element 
  d3.selectAll('.cluster-nodes').remove();
  const [width, height] = [svg.clientWidth, svg.clientHeight]
  // console.dir([width, height])
  const xMax = d3.max(clusteredData, d => d.x) as number
  const yMax = d3.max(clusteredData, d => d.y) as number
  const xMin = d3.min(clusteredData, d => d.x) as number
  const yMin = d3.min(clusteredData, d => d.y) as number
  var colorScale_1 = d3.schemePaired;
  const xScale = d3.scaleLinear()
                    .domain([xMin, xMax])
                    .range([padding, width - padding])
  const yScale = d3.scaleLinear()
                    .domain([yMin,yMax])
                    .range([padding, height - padding])

  const mySvg = d3.select('#cluster-map')
                  .append('g')
                  .attr('class','nodes')

  mySvg.selectAll("cluster-nodes")
      .data(clusteredData)
      .enter()
      .append("circle")
      .attr('class','cluster-nodes')
      .attr('r', 5)
      .attr('fill', d => d.classId === -1 ? "black" : colorScale_1[d.classId % 12])
      .attr("cx", d => xScale(d.x))
      .attr("cy", d => yScale(d.y))
      .append("title")
      .text(d => d.id)
}

/**
 * 用于使用 brush
 * @param clusteredData 绘制的散点图的数据
 */
export const useBrush = (clusteredData :classedDataType[]) => {
  const svg = document.querySelector('#cluster-map') as Element 
    const [width, height] = [svg.clientWidth, svg.clientHeight]
    const mySvg = d3.select('#cluster-map')
    const xMax = d3.max(clusteredData, d => d.x) as number
    const yMax = d3.max(clusteredData, d => d.y) as number
    const xMin = d3.min(clusteredData, d => d.x) as number
    const yMin = d3.min(clusteredData, d => d.y) as number
    var colorScale_1 = d3.schemePaired;
    const xScale = d3.scaleLinear()
                      .domain([xMin, xMax])
                      .range([padding, width - padding])
    const yScale = d3.scaleLinear()
                      .domain([yMin,yMax])
                      .range([padding, height - padding])

    const  brushed = (event :any) => {
      throttle(() => {
        const dragType = event.type 
        let value:any = []
        if (event.selection) {
        const [[x0, y0], [x1, y1]] = event.selection;
        value = (d3.selectAll(".cluster-nodes") as any)
          .style("stroke", "gray")
          .filter((d :classedDataType) => x0 <= xScale(d.x) && xScale(d.x) < x1 && y0 <= yScale(d.y) && yScale(d.y) < y1)
          .style("stroke", "steelblue")
          .data();
        } else {
          (d3.selectAll(".cluster-nodes") as any).style("stroke", "steelblue");
        }
        // 被框选的点的信息
        mySvg.property("value", value).dispatch("input");
        console.dir(value)
      },500)()
    } 
    const viewBox = mySvg.attr("viewBox",[0 ,0 ,width, height])
                        .property("value",[]);
    const brush = d3.brush()
                    .on("end", brushed)

    mySvg.call(brush as any);
}
