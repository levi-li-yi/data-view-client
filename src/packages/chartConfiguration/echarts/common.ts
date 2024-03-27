interface NSelectOption {
  value: any
  label: string
}

export const nSelectOption: NSelectOption[] = [
  { label: '是', value: true },
  { label: '否', value: false }
]

export const ySelectOption: NSelectOption[] = [
  { label: '左侧', value: 0 },
  { label: '右侧', value: 1 }
]
