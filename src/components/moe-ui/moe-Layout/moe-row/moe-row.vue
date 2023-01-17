<template>
  <nut-row :type="type" :gutter="gutter" :justify="justify" :align="align" :flex-wrap="flexWrap" class="moe-row">
    <slot></slot>
  </nut-row>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'
withDefaults(defineProps<{
  type?: string
  gutter?: string | number
  justify?: string
  align?: string
  flexWrap?: string
}>(), {
  type: '-', //布局方式，可选值为flex
  gutter: '-', //列元素之间的间距（单位为px）
  justify: 'start', //Flex 主轴对齐方式，可选值为 start end center space-around space-between space-evenly
  align: 'flex-start', //Flex 交叉轴对齐方式，可选值为 flex-start center flex-end
  flexWrap: 'nowrap', //Flex是否换行，可选值为 nowrap wrap reverse
})
</script>

<style lang="scss">
.moe-row {}
</style>