import { componentSizeMap } from '@lt13.10/constants'

import type { ComponentSize } from '@lt13.10/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
