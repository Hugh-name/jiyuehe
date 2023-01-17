<template>
  <view class="index scroll-view">
    <view class="index_card">
      <image mode="widthFix" :src="`${MOE_BASE_URL}ji.png`" />
    </view>

    <view class="index_content">
      <moe-scroll>
        <view class="index_content_utils">
          <view class="left">功能区域</view>
          <view class="right">
            <moe-button type="primary">暂停</moe-button>
          </view>
        </view>

        <view class="index_ul">
          <view v-for="(item, index) in list" class="index_ul_li">
            <moe-button type="success" :key="index" @click="eventHandle(item)">{{ item.title }}</moe-button>
          </view>
        </view>

        <view class="index_help">
          <view class="index_help_title">使用帮助</view>
          <view>点击按钮就会发出鸡声</view>
          <view>音频资源来源于网络收集，程序仅限用于交流学习，请勿用于任何非法用途！</view>
          <view>技术支持：<view class="">moemoe@.com</view>
          </view>
        </view>
      </moe-scroll>
    </view>
  </view>
</template>

<style lang="scss">
.index {
  background-color: #fff;
  &_card {
    padding: 0 40rpx 40rpx;
    image {
      width: 100%;
      border-radius: 15rpx;
      overflow: hidden;
    }
  }

  &_content {
    box-shadow: 0px 10px 70px 0px rgba(0, 0, 0, 0.08);
    // margin: 0 40rpx 40rpx;
    flex: 1;
    &_utils {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        margin: 20rpx 0 0 40rpx;
      }
      .right {
        margin: 20rpx 40rpx 0 0;
        width: 90rpx;
        height: 40rpx;
      }
    }
  }

  &_ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 40rpx;

    &_li {
      text-align: center;
      margin: 10rpx;
      padding: 0;
      height: 70rpx;
    }
  }

  &_help {
    border-radius: 15rpx;
    background-color: #eee;
    margin: 10rpx 40rpx 20rpx;
    padding: 10rpx 20rpx;
  }
}
</style>

<script lang="ts" setup>
import { ref } from 'vue'
import { createInnerAudioContext } from '@tarojs/taro'
const MOE_BASE_URL = process.env.MOE_BASE_URL
const list = ref([
  { title: '鸡', url: 'ji.mp3' },
  { title: '你', url: 'ni.mp3' },
  { title: '太', url: 'tai.mp3' },
  { title: '美', url: 'mei.mp3' },
  { title: '唱', url: 'chang.mp3' },
  { title: '跳', url: 'tiao.mp3' },
  { title: 'rap', url: 'rap.mp3' },
  { title: '篮球', url: 'lanqiu.mp3' },
  { title: 'music', url: 'music.mp3' },
  { title: '笑死', url: 'xiaosi.mp3' },
  { title: '哇呵呵', url: 'wahaha.mp3' },
  { title: '喜欢', url: 'xihuan.mp3' },
  { title: '全民制作人', url: 'quanminzhizuoren.mp3' },
  { title: '大家好', url: 'dajiahao.mp3' },
  { title: '我是', url: 'woshi.mp3' },
  { title: '坤坤', url: 'kunkun.mp3' },
  { title: '你干嘛～', url: 'niganma.mp3' },
  { title: '哈哈', url: 'haha.mp3' },
  { title: '哎哟', url: 'aiyo.mp3' },
  { title: '你好烦～', url: 'nihaofan.mp3' },
  { title: '开始吟唱', url: 'kaishiyinchang.mp3' },
  { title: '你干嘛哈哈哟', url: 'niganmahahayo.mp3' },
  { title: '哟哈哈嘛干你', url: 'yohahamaganni.mp3' },
  { title: '二手鸡', url: 'ershouji.mp3' },
  { title: 'rap鸡', url: 'rapji.mp3' },
  { title: 'DJ鸡', url: 'djji.mp3' },
  { title: '谢谢鸡', url: 'xiexieji.mp3' },
  { title: '惊魂鸡', url: 'jinghunji.mp3' },
  { title: '仙剑鸡', url: 'xianjianji.mp3' },
  { title: '新年鸡', url: 'xiannianji.mp3' },
  { title: '战斗鸡', url: 'zhandouji.mp3' },
  { title: '桃花鸡', url: 'taohuaji.mp3' },
  { title: '某人鸡', url: 'mourenji.mp3' },
  { title: '江南鸡', url: 'jiangnanji.mp3' },
  { title: '尖叫鸡', url: 'jianjiaoji.mp3' },
  { title: 'baby鸡', url: 'babyji.mp3' },
  { title: '欢喜鸡', url: 'huanxiji.mp3' },
  { title: '耶耶鸡', url: 'yeyeji.mp3' },
  { title: '鸡太美', url: 'jitaimei.mp3' },
])

/**
  *
  */
const eventHandle = (item) => {
  const innerAudioContext = createInnerAudioContext()
  innerAudioContext.autoplay = true
  innerAudioContext.src = `${MOE_BASE_URL}${item.url}`
  innerAudioContext.onPlay(() => {
    console.log('开始播放')
  })
  innerAudioContext.onError((res) => {
    console.log(res.errMsg)
    console.log(res.errCode)
  })
}
</script>
