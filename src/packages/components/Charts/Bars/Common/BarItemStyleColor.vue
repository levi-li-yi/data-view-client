<!--
 * @Author: qinx
 * @Date: 2024-03-27 
 * @description: 柱形图颜色设置（渐变色、正常色）
-->
<template>
  <SettingItem name="">
    <n-popover trigger="hover" v-if="handleJudgeColor(item)">
      <template #trigger>
        <n-button type="tertiary" @click="handleBarColor(item, true)"> 启用渐变色 </n-button>
      </template>
      <span>修改此图表所有柱状图</span>
    </n-popover>

    <n-popconfirm v-else :show-icon="false" @positive-click="handleBarColor(item, false)">
      <template #trigger>
        <n-button>清除渐变色</n-button>
      </template>
      是否清除当前图表所有的渐变色
    </n-popconfirm>
  </SettingItem>

  <template v-if="!handleJudgeColor(item) && item.itemStyle.color?.type">
    <SettingItem name="颜色-1">
      <n-color-picker size="small" :modes="['hex']" v-model:value="item.itemStyle.color.colorStops[0].color" />
    </SettingItem>
    <SettingItem name="颜色-2">
      <n-color-picker size="small" :modes="['hex']" v-model:value="item.itemStyle.color.colorStops[1].color" />
    </SettingItem>
  </template>

  <template v-if="handleJudgeColor(item) && item.itemStyle">
    <SettingItem name="颜色">
      <n-color-picker size="small" :modes="['hex']" v-model:value="item.itemStyle.color" />
    </SettingItem>
  </template>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { isString, isNull } from 'lodash'
import { ObjectType } from '@/interfaces/index'
import { OrientEnum } from '@/packages/chartConfiguration/echarts/label'

import { SettingItem } from '@/components/Pages/ChartItemSetting'

const props = defineProps({
  item: {
    type: Object as PropType<ObjectType>,
    required: true
  },
  // 方向 vertical 竖直 horizontal 水平
  orientation: {
    type: String as PropType<string>,
    default: OrientEnum.vertical
  }
})

const handleJudgeColor = (data: any) => {
  return isNull(data?.itemStyle?.color) || isString(data?.itemStyle?.color)
}

const handleBarColor = (data: any, flag: Boolean) => {
  data.itemStyle.color = flag
    ? {
        type: 'linear',
        x0: 0,
        y0: 0,
        x2: props?.orientation === OrientEnum.vertical ? 0 : 1,
        y2: props?.orientation === OrientEnum.vertical ? 1 : 0,
        colorStops: [
          {
            offset: 0,
            color: '#6AA6FFFF'
          },
          {
            offset: 1,
            color: '#287FFFFF'
          }
        ]
      }
    : null
}
</script>
