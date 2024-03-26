import { ConfigType, PackagesCategoryEnum, ChartFrameEnum } from '@/packages/index.d'
import { ChatCategoryEnum, ChatCategoryEnumName } from '../../index.d'

export const BarStackLineConfig: ConfigType = {
  key: 'BarStackLine',
  chartKey: 'VBarStackLine',
  conKey: 'VCBarStackLine',
  title: '堆叠 & 折线柱状图',
  category: ChatCategoryEnum.BAR,
  categoryName: ChatCategoryEnumName.BAR,
  package: PackagesCategoryEnum.CHARTS,
  chartFrame: ChartFrameEnum.ECHARTS,
  image: 'bar_stackLine.png'
}
