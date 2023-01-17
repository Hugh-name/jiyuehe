<template>
  <nut-audio
    class="moe-audio"
    url="http://jilehe.125ks.cn/Voice/jlh/res/j.mp3"
    :muted="muted"
    :autoplay="autoplay"
    :loop="loop"
    :type="type">
  </nut-audio>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'
withDefaults(defineProps<{
  type?: string
  url?: string
  muted?: boolean
  autoplay?: boolean
  loop?: boolean
}>(), {
  type: 'none',
  url: '', //语音播放的连接
  autoplay: false,
  false: false,
  loop: false
})
</script>

<style lang="scss">
.moe-audio {}
</style>