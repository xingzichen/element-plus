import { buildProps, definePropType } from '@lt13.10/utils'
import { timePanelSharedProps } from './shared'

import type { ExtractPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'

export const panelTimePickerProps = buildProps({
  ...timePanelSharedProps,
  datetimeRole: String,
  parsedValue: {
    type: definePropType<Dayjs>(Object),
  },
} as const)

export type PanelTimePickerProps = ExtractPropTypes<typeof panelTimePickerProps>
