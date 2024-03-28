const symbolOptions = ['circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'].map(t=>({ label: t,value:t }))

export const lineConf = {
  lineStyle: {
    type: [
      {
        label: 'solid',
        value: 'solid'
      },
      {
        label: 'dashed',
        value: 'dashed'
      },
      {
        label: 'dotted',
        value: 'dotted'
      }
    ]
  },
  symbol: symbolOptions
}
