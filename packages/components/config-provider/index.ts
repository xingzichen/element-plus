import { withInstall } from '@lt13.10/utils'

import ConfigProvider from './src/config-provider'

export const ElConfigProvider = withInstall(ConfigProvider)
export default ElConfigProvider

export * from './src/config-provider'
