<template>
  <!-- Echarts 全局设置 -->
  <global-setting :optionData="optionData"></global-setting>
  <CollapseItem v-for="(item, index) in seriesList" :key="index" :name="`柱状图-${index + 1}`" :expanded="true">
    <SettingItemBox name="图形">
      <SettingItem name="宽度">
        <n-input-number
          v-model:value="item.barWidth"
          :min="1"
          :max="100"
          size="small"
          placeholder="自动计算"
        ></n-input-number>
      </SettingItem>

      <SettingItem name="圆角">
        <n-input-number v-model:value="item.itemStyle.borderRadius" :min="0" size="small"></n-input-number>
      </SettingItem>

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
          <n-color-picker
            size="small"
            :modes="['hex']"
            v-model:value="item.itemStyle.color.colorStops[0].color"
          ></n-color-picker>
        </SettingItem>
        <SettingItem name="颜色-2">
          <n-color-picker
            size="small"
            :modes="['hex']"
            v-model:value="item.itemStyle.color.colorStops[1].color"
          ></n-color-picker>
        </SettingItem>
      </template>
    </SettingItemBox>

    <setting-item-box name="标签">
      <setting-item>
        <n-space>
          <n-switch v-model:value="item.label.show" size="small" />
          <n-text>展示标签</n-text>
        </n-space>
      </setting-item>
      <setting-item name="大小">
        <n-input-number v-model:value="item.label.fontSize" size="small" :min="1"></n-input-number>
      </setting-item>
      <setting-item name="颜色">
        <n-color-picker size="small" :modes="['hex']" v-model:value="item.label.color"></n-color-picker>
      </setting-item>
      <setting-item name="位置">
        <n-select v-model:value="item.label.position" :options="labelPositionOptions" />
      </setting-item>
    </setting-item-box>
  </CollapseItem>
</template>

<script setup lang="ts">
import { isString, isNull } from 'lodash'
import { PropType, computed } from 'vue'
import { GlobalSetting, CollapseItem, SettingItemBox, SettingItem } from '@/components/Pages/ChartItemSetting'
import { GlobalThemeJsonType } from '@/settings/chartThemes/index'
import { labelPositionOptions } from '@/settings/chart/options'

const props = defineProps({
  optionData: {
    type: Object as PropType<GlobalThemeJsonType>,
    required: true
  }
})

const seriesList = computed(() => {
  return props.optionData.series
})

const handleJudgeColor = data => {
  console.log(data, isNull(data?.itemStyle?.color), isString(data?.itemStyle?.color), 'handleJudgeColor')

  return isNull(data?.itemStyle?.color) || isString(data?.itemStyle?.color)
}

const handleBarColor = (data: any, flag: Boolean) => {
  data.itemStyle.color = flag
    ? {
        type: 'linear',
        x0: 0,
        y0: 0,
        x2: 0,
        y2: 1,
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
