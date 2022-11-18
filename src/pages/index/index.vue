<template>
  <view class="index scroll-view">
    <!-- <nut-audio
    class="moe-audio"
    :url="mp3"
    :muted="false"
    :autoplay="autoplay"
    :loop="false"
    type="none">
    </nut-audio> -->
    <audio src="@/assets/j.mp3" :controls="false" :muted="false" :loop="false"></audio>

    <moe-row flexWrap="wrap" type="flex" justify="center">
      <moe-col span="6" v-for="(item, index) in list" :key="index">
        <moe-button type="primary" @click="eventHandle(item)">{{ item.title }}</moe-button>
      </moe-col>
    </moe-row>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { createInnerAudioContext } from '@tarojs/taro'
const list = ref([
  { title: '鸡', url: 'http://jilehe.125ks.cn/Voice/jlh/res/j.mp3' },
  { title: '你', url: '' },
  { title: '太', url: '' },
  { title: '美', url: '' },
  { title: '唱', url: '' },
  { title: '跳', url: '' },
  { title: 'rap', url: '' },
  { title: '篮球', url: '' },
  { title: 'music', url: '' },
  { title: '笑死', url: '' },
  { title: '哇呵呵', url: '' },
  { title: '喜欢', url: '' },
  { title: '制作人', url: '' },
  { title: '大家好', url: '' },
  { title: '我是', url: '' },
  { title: '鲲鲲', url: '' },
  { title: '你干嘛～', url: '' },
  { title: '哈哈', url: '' },
  { title: '哎哟', url: '' },
  { title: '你好烦～', url: '' },
  { title: '开始吟唱', url: '' },
  { title: '你干嘛哈哈哟', url: '' },
  { title: '哟哈哈嘛干你', url: '' },
  { title: '二手鸡', url: '' },
  { title: 'rap鸡', url: '' },
  { title: 'DJ鸡', url: '' },
  { title: '谢谢鸡', url: '' },
  { title: '惊魂鸡', url: '' },
  { title: '仙剑鸡', url: '' },
  { title: '新年鸡', url: '' },
  { title: '战斗鸡', url: '' },
  { title: '桃花鸡', url: '' },
  { title: '某人鸡', url: '' },
  { title: '江南鸡', url: '' },
  { title: '尖叫鸡', url: '' },
  { title: 'baby鸡', url: '' },
  { title: '欢喜鸡', url: '' },
  { title: '耶耶鸡', url: '' },
  { title: '鸡太美', url: '' },
])
const audioUrl = ref<string>('')
const autoplay = ref<boolean>(false)

const eventHandle = (item) => {
  // audioUrl.value = item.url
  // autoplay.value = true

  const innerAudioContext = createInnerAudioContext()
  innerAudioContext.autoplay = true
  innerAudioContext.src = 'http://jilehe.125ks.cn/Voice/jlh/res/j.mp3'
  innerAudioContext.onPlay(() => {
    console.log('开始播放')
  })
  innerAudioContext.onError((res) => {
    console.log(res.errMsg)
    console.log(res.errCode)
  })
}
</script>

<style lang="scss">
.index {}
</style>