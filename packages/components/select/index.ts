import { withInstall, withNoopInstall } from '@lt13.10/utils'

import Select from './src/select.vue'
import Option from './src/option.vue'
import OptionGroup from './src/option-group.vue'

export const ElSelect = withInstall(Select, {
  Option,
  OptionGroup,
})
export default ElSelect
export const ElOption = withNoopInstall(Option)
export const ElOptionGroup = withNoopInstall(OptionGroup)

export * from './src/token'
