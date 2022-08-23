import { buildProps } from '@lt13.10/utils'
import { useSizeProp } from '@lt13.10/hooks'

import type Description from './description.vue'

export const descriptionProps = buildProps({
  border: {
    type: Boolean,
    default: false,
  },
  column: {
    type: Number,
    default: 3,
  },
  direction: {
    type: String,
    values: ['horizontal', 'vertical'],
    default: 'horizontal',
  },
  size: useSizeProp,
  title: {
    type: String,
    default: '',
  },
  extra: {
    type: String,
    default: '',
  },
} as const)

export type DescriptionInstance = InstanceType<typeof Description>
