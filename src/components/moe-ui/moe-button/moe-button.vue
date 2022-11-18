<template>
  <nut-button :type="type" class="moe-button">
    <slot></slot>
  </nut-button>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'
withDefaults(defineProps<{
  type: string
}>(), {
  type: 'default', //类型，可选值为 primary info warning danger success
})
</script>

<style lang="scss">
.moe-button {}
</style>