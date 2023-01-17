<template>
  <nut-col :span="span" :offset="offset" class="moe-col">
    <slot></slot>
  </nut-col>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'
withDefaults(defineProps<{
  span?: string | number
  offset?: string | number
}>(), {
  span: 24, //列元素宽度（共分为24份，例如设置一行3个，那么span值为8）
  offset: 0, //列元素偏移距离）
})
</script>

<style lang="scss">
.moe-col {}
</style>