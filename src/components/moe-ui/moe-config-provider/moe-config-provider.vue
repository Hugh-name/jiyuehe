<template>
  <nut-config-provider class="moe-config-provider" :theme="theme">
    <slot></slot>
  </nut-config-provider>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const theme = ref<string>('dark')
</script>

<style lang="scss">
.moe-config-provider {
  width: 100%;
  height: 100%;
}
</style>