import { buildProps, isBoolean, isNumber, isString } from '@lt13.10/utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@lt13.10/constants'
import { useSizeProp } from '@lt13.10/hooks'
import type { ExtractPropTypes } from 'vue'
import type Radio from './radio.vue'

export const radioPropsBase = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: '',
  },
})

export const radioProps = buildProps({
  ...radioPropsBase,
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  border: Boolean,
} as const)

export const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioEmits = typeof radioEmits
export type RadioInstance = InstanceType<typeof Radio>
