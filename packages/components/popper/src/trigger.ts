import { buildProps, definePropType } from '@lt13.10/utils'
import type { Measurable } from '@lt13.10/tokens'

export const usePopperTriggerProps = buildProps({
  virtualRef: {
    type: definePropType<Measurable>(Object),
  },
  virtualTriggering: Boolean,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function,
  onKeydown: Function,
  onFocus: Function,
  onBlur: Function,
  onContextmenu: Function,
  id: String,
  open: Boolean,
} as const)

export type PopperTriggerProps = typeof usePopperTriggerProps
