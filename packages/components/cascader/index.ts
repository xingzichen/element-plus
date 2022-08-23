import Cascader from './src/index.vue'
import type { App } from 'vue'
import type { SFCWithInstall } from '@lt13.10/utils'

Cascader.install = (app: App): void => {
  app.component(Cascader.name, Cascader)
}

const _Cascader = Cascader as SFCWithInstall<typeof Cascader>

export default _Cascader
export const ElCascader = _Cascader
