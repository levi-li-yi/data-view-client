export const axisConfig = {
  // X轴位置
  xposition: [
    {
      label: '顶部',
      value: 'top'
    },
    {
      label: '底部',
      value: 'bottom'
    }
  ],
  // Y轴位置
  yposition: [
    {
      label: '左侧',
      value: 'left'
    },
    {
      label: '右侧',
      value: 'right'
    }
  ],
  // 线条
  splitLint: {
    lineStyle: {
      type: [
        {
          label: '实线',
          value: 'solid'
        },
        {
          label: '虚线',
          value: 'dashed'
        },
        {
          label: '点线',
          value: 'dotted'
        }
      ]
    }
  },
  // 视觉映射
  visualMap: {
    orient: [
      {
        label: '竖直',
        value: 'vertical'
      },
      {
        label: '水平',
        value: 'horizontal'
      }
    ]
  },
  // y轴 坐标轴类型
  ytype: [
    {
      label: '数值轴',
      value: 'value'
    },
    {
      label: '类目轴',
      value: 'category'
    },
    {
      label: '时间轴',
      value: 'time'
    },
    {
      label: '对数轴',
      value: 'log'
    }
  ]
}
