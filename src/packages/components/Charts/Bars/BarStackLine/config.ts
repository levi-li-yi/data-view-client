/*
 * @Author: qinx
 * @Date: 2024-03-27 08:17:15
 * @description:
 */
import { echartOptionProfixHandle, PublicConfigClass } from '@/packages/public'
import { BarStackLineConfig } from './index'
import { CreateComponentType } from '@/packages/index.d'
import cloneDeep from 'lodash/cloneDeep'
import dataJson from './data.json'

export const includes = ['legend', 'xAxis', 'yAxis', 'grid', 'dataZoom']

const commonSeriesItem = {
  barWidth: 15,
  yAxisIndex: 0,
  stack: true,
  label: {
    show: true,
    position: 'top',
    color: '#fff',
    fontSize: 12
  },
  itemStyle: {
    borderRadius: 2,
    borderWidth: 1,
    color: null
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

export const seriesItem = {
  type: 'bar',
  ...commonSeriesItem
}

export const lineSeriesItem = {
  type: 'line',
  ...commonSeriesItem,
  stack: false
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
  xAxis: {
    show: true,
    type: 'category'
  },
  dataset: { ...dataJson },
  series: [lineSeriesItem, seriesItem, seriesItem]
}

export default class Config extends PublicConfigClass implements CreateComponentType {
  public key = BarStackLineConfig.key
  public chartConfig = cloneDeep(BarStackLineConfig)
  // 图表配置项
  public option = echartOptionProfixHandle(option, includes)
}
