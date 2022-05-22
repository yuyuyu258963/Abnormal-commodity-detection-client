import * as d3 from "d3";
import { useEffect, useState } from "react";
import { Brash } from "../../icons";
import { CLASSED_DATA_FILTER, GET_CLUSTER_DATA } from "../../reducer/constant";
import { StoreDatatype } from "../../reducer/interface";
import store from "../../reducer/store";
import { classedDataType } from "../../types/interface";
import { throttle } from "../../utils";
import { padding } from "./config";

import "./index.css"
import { drawScatterMap, useBrush } from "./tool";

type Props = {}

export default function ClusterMap({}: Props) {
  const data :any = store.getState();
  const {clusteredData:storeData} = data;
  const [clusteredData, setClusteredData] = useState<classedDataType[]>(storeData)
  const [brushState, setBrushState] = useState<boolean>(false)
  
  useEffect(() => {
    drawScatterMap(clusteredData)
    store.subscribe(() => {
      const data :any = store.getState();
      const {clusteredData,actionName,clickedClassId} = data;
      if (actionName === GET_CLUSTER_DATA) {
        setClusteredData(clusteredData)
      }
      if (actionName === CLASSED_DATA_FILTER) {
        // FilteredData[FilteredData.length][0]
        console.dir(d3.selectAll(`.class-${clickedClassId}`))
        d3.selectAll(`.class-${clickedClassId}`).remove()
      }
    })
  },[])

  /**
   * 用于绘制聚类后的视图
   */
  useEffect(() => {
    drawScatterMap(clusteredData)
  },[clusteredData])
  

  useEffect(() => {
    useBrush(clusteredData)
  }, [brushState])
  
  
  return (
    <svg id="cluster-map">
      {Brash}
    </svg>
  )
}