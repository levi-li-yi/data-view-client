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

export const includes = ['legend', 'xAxis', 'yAxis', 'grid']
export const seriesItem = {
  type: 'bar',
  barWidth: 15,
  stack: 'pileBar',

  label: {
    show: true,
    position: 'top',
    color: '#fff',
    fontSize: 12
  },
  itemStyle: {
    color: null,
    borderRadius: 2
  }
}

export const lineSeriesItem = {
  type: 'line',
  symbol: 'circle',
  smooth: 0.5,
  label: {
    show: true,
    position: 'top',
    color: '#fff',
    fontSize: 12
  },
  symbolSize: 5, //设定实心点的大小
  itemStyle: {
    color: '#FFE47A',
    borderWidth: 1
  },
  lineStyle: {
    type: 'solid',
    width: 3,
    color: null
  }
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
