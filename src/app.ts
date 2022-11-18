import { createApp } from 'vue'

import './app.scss'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

/** NutUI 初始化 */
import { initNutUI } from '@/components/nut-ui/nut-ui'
initNutUI(App)

/** MoeUI 初始化 */
import { initMoeUI } from "@/components/moe-ui/moe-ui"
initMoeUI(App)

export default App
