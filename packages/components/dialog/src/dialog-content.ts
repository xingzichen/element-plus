import { buildProps, iconPropType } from '@lt13.10/utils'

export const dialogContentProps = buildProps({
  center: {
    type: Boolean,
    default: false,
  },
  closeIcon: {
    type: iconPropType,
    default: '',
  },
  customClass: {
    type: String,
    default: '',
  },
  draggable: {
    type: Boolean,
    default: false,
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: '',
  },
} as const)

export const dialogContentEmits = {
  close: () => true,
}
