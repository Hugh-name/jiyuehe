import MoeConfigProvider from '@/components/moe-ui/moe-config-provider/moe-config-provider.vue'
import MoeCell from '@/components/moe-ui/moe-cell/moe-cell.vue'
import MoeRow from '@/components/moe-ui/moe-Layout/moe-row/moe-row.vue'
import MoeCol from '@/components/moe-ui/moe-Layout/moe-col/moe-col.vue'
import MoeButton from '@/components/moe-ui/moe-button/moe-button.vue'
import MoeAudio from '@/components/moe-ui/moe-audio/moe-audio.vue'

import { App } from "vue"
export const initMoeUI = (app: App) => {
  app.component('MoeConfigProvider', MoeConfigProvider)
  app.component('MoeCell', MoeCell)
  app.component('MoeRow', MoeRow)
  app.component('MoeCol', MoeCol)
  app.component('MoeButton', MoeButton)
  app.component('MoeAudio', MoeAudio)
}