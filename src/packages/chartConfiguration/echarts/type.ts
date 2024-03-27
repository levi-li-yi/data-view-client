/*
 * @Author: qinx
 * @Date: 2024-03-27
 * @description:
 */

// 图表所有系列 type
export const chartTypeConf = (types: Array<string>) => {
  const chartTypes = [
    { label: '折线图', value: 'line' },
    { label: '柱状图', value: 'bar' },
    { label: '饼图', value: 'pie' },
    { label: '散点图', value: 'scatter' },
    { label: '气泡图', value: 'effectScatter' },
    { label: '雷达图', value: 'radar' },
    { label: '树图', value: 'tree' },
    { label: '矩形树图', value: 'treemap' },
    { label: '旭日图', value: 'sunburst' },
    { label: '盒须图', value: 'boxplot' },
    { label: 'k 线图', value: 'candlestick' },
    { label: '直角坐标系热力图', value: 'heatmap' },
    { label: '地图', value: 'map' },
    { label: '平行坐标', value: 'parallel' },
    { label: '路径图', value: 'lines' },
    { label: '关系图', value: 'graph' },
    { label: '桑基图', value: 'sankey' },
    { label: '漏斗图', value: 'funnel' },
    { label: '仪表盘', value: 'gauge' },
    { label: '象形柱图', value: 'pictorialBar' },
    { label: '主题河流', value: 'themeRiver' },
    { label: '自定义系列', value: 'custom' }
  ]

  return chartTypes.filter(item => types.includes(item.value))
}
