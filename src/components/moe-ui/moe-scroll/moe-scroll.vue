<template>
  <view :class="[className, 'moe-scroll-view']">
    <scroll-view class="moe-scroll-inner" :style="{ 'height': `${scrollHeight}` }" :scroll-y="true"
      :showScrollbar="false" :enhanced="enhanced" :bounces="bounces" :scrollWithAnimation="scrollWithAnimation"
      :refresherEnabled="refresherEnabled" :refresherThreshold="refresherThreshold"
      :refresherDefaultStyle="refresherDefaultStyle" :refresherBackground="refresherBackground"
      :refresherTriggered="refresherTriggered" @scroll="onScroll" @scrolltolower="onScrollToLower"
      @refresherpulling="onRefresherPulling" @refresherrefresh="onRefresherRefresh"
      @refresherrestore="onRefresherRestore" @refresherabort="onRefresherAbort">
      <slot>
        <!-- 插槽 -->
      </slot>

      <!-- <view class="df dac dpc pt-30 pb-30 font-20 fontThird" v-if="loaddingImg">
        <moe-icon size="20rpx" name="moe-loading" className="loading-animation mr-5"></moe-icon>加载中，请稍侯…
      </view> -->
      <!-- 安全区内容自动偏移 -->
      <view v-if="safeareaOffset" class="moe-scroll-applet-safearea"></view>
      <!-- 安全区内容自动偏移 -->
    </scroll-view>
  </view>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, defineEmits, ref, onMounted, nextTick } from 'vue'
import { createSelectorQuery } from '@tarojs/taro'
const props = withDefaults(defineProps<{
  className?: string
  scrollWithAnimation?: boolean
  enhanced?: boolean
  bounces?: boolean
  scrollTop?: number
  refresherEnabled?: boolean
  refresherThreshold?: number
  refresherDefaultStyle?: string
  refresherBackground?: string
  loaddingImg?: boolean
  safeareaOffset?: boolean
  scroll?: () => void
  height?: string | number
}>(), {
  className: '',
  scrollWithAnimation: false, // 在设置滚动条位置时使用动画过渡
  enhanced: true, // 启用 scroll-view 增强特性
  bounces: false, // iOS 下 scroll-view 边界弹性控制 (同时开启 enhanced 属性后生效)
  scrollTop: 0, // 设置竖向滚动条位置
  refresherEnabled: false, // 开启自定义下拉刷新
  refresherThreshold: 45, // 设置自定义下拉刷新阈值
  refresherDefaultStyle: 'black', // 设置自定义下拉刷新默认样式，支持设置 black or white or none， none 表示不使用默认样式
  refresherBackground: '#FFF', // 设置自定义下拉刷新区域背景颜色
  loaddingImg: false, // 上拉刷新的loading
  safeareaOffset: false, // 安全区内容自动偏移
  scroll: () => void 0,
  height: 0
})
const emits = defineEmits<{ (e: 'onPullDown'), (e: 'onLoadMore'), (e: 'scroll', val) }>()

const refresherTriggered = ref<boolean>(true) // 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发
const scrollTimeout = ref<ReturnType<typeof setTimeout> | null>(null)
const scrollHeight = ref<string | number>(0)

/**
  * 滚动时触发
  */
const onScroll = ({ detail }) => {
  emits('scroll', detail)
  // console.log('滚动时触发')
  // if (scrollTimeout.value) {
  //   clearTimeout(scrollTimeout.value)
  // }

  // scrollTimeout.value = setTimeout(() => {
  //   scrolltolower(detail)
  // }, 100)
}

const scrolltolower = (detail) => {
  // const view = createSelectorQuery().select(".moe-scroll-inner")

  // view.fields({
  //   size: true,
  //   scrollOffset: true
  // }, (data) => {
  //   if (data.scrollTop >= (detail.scrollHeight - data.height)) {
  //     emit('onLoadMore', onLoadMore)
  //   }
  // }).exec()
}

/**
  * 滚动到底部/右边，会触发 scrolltolower 事件
  */
const onScrollToLower = (e) => {
  emits('onLoadMore')
}

const onLoadMore = () => { }

/**
  * 自定义下拉刷新控件被下拉
  */
const onRefresherPulling = (e) => { }

/**
  * 自定义下拉刷新被触发
  */
const onRefresherRefresh = (e) => {
  refresherTriggered.value = true
  emits('onPullDown')
}

/**
  * 自定义下拉刷新被复位
  */
const onRefresherRestore = () => {
  refresherTriggered.value = false
}

/**
  * 自定义下拉刷新被中止
  */
const onRefresherAbort = () => {
  refresherTriggered.value = false
}

defineExpose({
  onRefresherAbort
})

const _createSelectorQuery = () => {
  nextTick(() => {
    const view = createSelectorQuery().select(".moe-scroll-view")

    view.fields({
      size: true,
      scrollOffset: true
    }, (data) => {
      if (!data) {
        return _createSelectorQuery()
      }

      scrollHeight.value = props.height ? `${props.height}` : `${data.height}px`
    }).exec()
  })
}

onMounted(() => {
  _createSelectorQuery()
})
</script>

<style lang="scss">
.moe-scroll-view {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  scroll-view {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    .moe-scroll-applet-safearea {
      height: env(safe-area-inset-bottom);
    }
  }

}
</style>
