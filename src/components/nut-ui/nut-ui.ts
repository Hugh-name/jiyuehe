import { ConfigProvider, Button, Toast, Layout, Row, Col, Cell, Audio } from '@nutui/nutui-taro';

import { App } from "vue"

export const initNutUI = (app: App) => {
  app.use(ConfigProvider)
  app.use(Button)
  app.use(Toast)
  app.use(Layout)
  app.use(Row)
  app.use(Col)
  app.use(Cell)
  app.use(Audio)
}