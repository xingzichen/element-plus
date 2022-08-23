import { buildProps } from '@lt13.10/utils'

export const descriptionsRowProps = buildProps({
  row: {
    type: Array,
    default: () => [],
  },
} as const)
