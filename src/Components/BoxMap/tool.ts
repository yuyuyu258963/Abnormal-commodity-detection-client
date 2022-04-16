import * as d3 from "d3"
import store from "../../reducer/store"
import { BoxDataType } from "../../types/interface"

/**
 * 用于绘制箱线图
 * @param selectedVal 选中展现的属性
 * @param BoxDataDraw 要绘制的数据
 */
export const drawBoxMap = (selectedVal:number, BoxDataDraw:BoxDataType[]) => {
  const StoreData:any = store.getState()
  // console.dir(StoreData)
  const errorLine = StoreData.ProductionData.errDataLine

  d3.selectAll("#box-map > *").remove()
  const [innerWidth, innerHeight] = [(d3.select("#box-map") as any)["_groups"][0][0].scrollWidth , (d3.select("#box-map") as any)["_groups"][0][0].scrollHeight]
  
  const chart = (d3.select("#box-map") as any).append("g")

  chart.attr('transform', 'translate(' + 20 + ',' + -20  + ')')
  let data = [BoxDataDraw[selectedVal]]

  const colors:string[] = ["#CC9966", "#99CC66", "#6666CC"]
  const config = {
    barPadding: 0.4,
    barStroke: colors[selectedVal],
    textColor: 'black',
  }

  // 计算每组数据的统计数值
  data.forEach((item) => {
        item.values.sort((a, b) => a-b);
        item.Q1 = d3.quantile(item.values, 0.25);
        item.Q2 = d3.quantile(item.values, 0.5);
        item.Q3 = d3.quantile(item.values, 0.75);
        item.min = item.values[0];
        item.max = item.values[item.values.length-1];
    });
  // console.dir(data)

  // 用于设置非数值型的坐标轴
  const chartScaleX = d3.scaleBand()
                        .domain(data.map((d) => d.name))
                        .range([10, innerWidth - 30])
                        .padding(config.barPadding);

  const chartScaleY = d3.scaleLinear()
    .domain([(Math.floor(d3.min(data.map((d) => d.min))/100)-1)*100, (Math.floor(d3.max(data.map((d) => d.max))/100)+1)*100])
    .range([innerHeight - 10 , 35])

    let groups = chart.selectAll('.g').data(data);
    let groupsEnter = groups.enter()
                            .append('g')
                            .attr('class', 'g');

    groupsEnter.append('rect')
                  .attr('fill-opacity', '0')
                  .attr('stroke', config.barStroke);

    groupsEnter.each(function(){
        for (let i=0; i<5; i++){
          // @ts-ignore
            d3.select(this as any).append('line')
                                  .attr('stroke', config.barStroke);
        }
    });

    let groupsUpdate = groupsEnter.merge(groups);

    // 绘制外面的盒子
    groupsUpdate.selectAll('rect')      //绘制盒子矩形
                  .attr('x', (d : any) => chartScaleX(d.name))
                  .attr('y', (d : any) => chartScaleY(d.Q3))
                  .attr('width', chartScaleX.bandwidth())
                  .attr('height', (d:any) => chartScaleY(d.Q1) - chartScaleY(d.Q3));
    // console.log(groupsUpdate)

    // 绘制连接线
    groupsUpdate.each(function(d : any){       //绘制五条连接线
      let x1 = chartScaleX(d.name) as number;
      let x2 = x1 + chartScaleX.bandwidth();
      let middle = (x1 + x2)/2;

      let minLine = {
          x1: x1,
          y1: chartScaleY(d.min),
          x2: x2,
          y2: chartScaleY(d.min)
      };

      let Q2Line = {
          x1: x1,
          y1: chartScaleY(d.Q2),
          x2: x2,
          y2: chartScaleY(d.Q2)
      };

      let maxLine = {
          x1: x1,
          y1: chartScaleY(d.max),
          x2: x2,
          y2: chartScaleY(d.max)
      };

      let linkLine1 = {
          x1: middle,
          y1: chartScaleY(d.Q1),
          x2: middle,
          y2: chartScaleY(d.min)
      };

      let linkLine2 = {
          x1: middle,
          y1: chartScaleY(d.Q3),
          x2: middle,
          y2: chartScaleY(d.max)
      };

      let lines = [minLine, Q2Line, maxLine, linkLine1, linkLine2];

      // console.dir(this)
      // @ts-ignore
      d3.select(this as any)
          .selectAll('line')
          .each(function(d,i){
              d3.select(this)
                  .attr('x1', lines[i].x1)
                  .attr('x2', lines[i].x2)
                  .attr('y1', lines[i].y1)
                  .attr('y2', lines[i].y2);
          });
      
      // console.dir(errorLine)
      // 绘制异常值直线
      if (selectedVal <2 && errorLine[selectedVal] !== -1) {
        // @ts-ignore
        d3.select(this)
          .append("line")
          .attr('stroke', "red")
          .attr("x1", x1)
          .attr('x2', x2)
          .attr("y1", chartScaleY(errorLine[selectedVal]))
          .attr("y2", chartScaleY(errorLine[selectedVal]))
      }
  });

  groups.exit()
          .remove();

  chart.insert('g','.body')
        .attr('transform', 'translate(' + 0 + ',' + innerHeight + ')')
        .attr('class', 'xAxis')
        .call(d3.axisBottom(chartScaleX));

  chart.insert('g','.body')
        .attr('transform', 'translate(' + 0 + ',' + 0 + ')')
        .attr('class', 'yAxis')
        .call(d3.axisRight(chartScaleY).ticks(5));
}