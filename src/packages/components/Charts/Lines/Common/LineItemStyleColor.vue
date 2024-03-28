<!--
 * @Author: qinx
 * @Date: 2024-03-27 
 * @description: 柱形图颜色设置（渐变色、正常色）
-->
<template>
  <SettingItem />
<SettingItem />
  <SettingItem>
    <n-popover trigger="hover" v-if="handleJudgeColor(item)">
      <template #trigger>
        <n-button type="tertiary" @click="handleBarColor(item, true)"> 填充面积 </n-button>
      </template>
      <span>修改此图表所有内容</span>
    </n-popover>

    <n-popconfirm v-else :show-icon="false" @positive-click="handleBarColor(item, false)">
      <template #trigger>
        <n-button>清除面积</n-button>
      </template>
      是否清除当前图表所有的面积
    </n-popconfirm>
  </SettingItem>

  <template v-if="!handleJudgeColor(item) && item.areaStyle?.color?.type">
    <SettingItem name="颜色-1">
      <n-color-picker size="small" :modes="['hex']" v-model:value="item.areaStyle.color.colorStops[0].color" />
    </SettingItem>
    <SettingItem name="颜色-2">
      <n-color-picker size="small" :modes="['hex']" v-model:value="item.areaStyle.color.colorStops[1].color" />
    </SettingItem>
  </template>

  <template v-if="handleJudgeColor(item) && item.areaStyle">
    <SettingItem name="颜色">
      <n-color-picker size="small" :modes="['hex']" v-model:value="item.areaStyle.color" />
    </SettingItem>
  </template>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { isNull } from 'lodash'
import { ObjectType } from '@/interfaces/index'

import { SettingItem } from '@/components/Pages/ChartItemSetting'

const props = defineProps({
  item: {
    type: Object as PropType<ObjectType>,
    required: true
  }
})

const handleJudgeColor = (data: any) => {
  return isNull(data?.areaStyle)
}

const handleBarColor = (data: any, flag: Boolean) => {
  data.areaStyle = flag
    ? {
        color: {
          type: 'linear',
          x0: 0,
          y0: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#287FFFFF'
            },
            {
              offset: 1,
              color: '#000000'
            }
          ]
        }
      }
    : null
}
</script>
