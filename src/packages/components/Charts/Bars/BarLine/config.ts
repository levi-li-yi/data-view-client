/*
 * @Author: qinx
 * @Date: 2024-03-02 09:13:09
 * @description:
 */
import { echartOptionProfixHandle, PublicConfigClass } from '@/packages/public'
import { BarLineConfig } from './index'
import { CreateComponentType } from '@/packages/index.d'
import cloneDeep from 'lodash/cloneDeep'
import dataJson from './data.json'

export const includes = ['legend', 'xAxis', 'yAxis', 'grid']

const commonSeriesItem = {
  barWidth: 15,
  yAxisIndex: 0,
  label: {
    show: true,
    position: 'top',
    color: '#fff',
    fontSize: 12
  },
  itemStyle: {
    color: null,
    borderRadius: 2,
    borderWidth: 1
  },

  symbol: 'circle',
  symbolSize: 5, //设定实心点的大小
  smooth: 0.5,
  lineStyle: {
    type: 'solid',
    width: 3,
    color: null
  }
}

// 柱状折线组合图 分别定义series
// 写死name可以定义legend显示的名称
export const barSeriesItem = {
  type: 'bar',
  ...commonSeriesItem
}

export const lineSeriesItem = {
  type: 'line',
  ...commonSeriesItem
}

export const option = {
  tooltip: {
    show: true,
    trigger: 'axis',
    axisPointer: {
      show: true,
      type: 'shadow'
    }
  },
  legend: {
    data: null
  },
  xAxis: {
    show: true,
    type: 'category'
  },
  yAxis: {
    show: true,
    type: 'value'
  },
  dataset: { ...dataJson },
  series: [barSeriesItem, lineSeriesItem]
}

export default class Config extends PublicConfigClass implements CreateComponentType {
  public key = BarLineConfig.key
  public chartConfig = cloneDeep(BarLineConfig)
  // 图表配置项
  public option = echartOptionProfixHandle(option, includes)
}
