import type { InjectionKey, SetupContext } from 'vue'
import type { UseNamespaceReturn } from '@lt13.10/hooks'

interface DatePickerContext {
  slots: SetupContext['slots']
  pickerNs: UseNamespaceReturn
}

export const ROOT_PICKER_INJECTION_KEY: InjectionKey<DatePickerContext> =
  Symbol()
