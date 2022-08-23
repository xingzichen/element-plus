import { ElAffix } from '@lt13.10/components/affix'
import { ElAlert } from '@lt13.10/components/alert'
import { ElAutocomplete } from '@lt13.10/components/autocomplete'
import { ElAvatar } from '@lt13.10/components/avatar'
import { ElBacktop } from '@lt13.10/components/backtop'
import { ElBadge } from '@lt13.10/components/badge'
import { ElBreadcrumb, ElBreadcrumbItem } from '@lt13.10/components/breadcrumb'
import { ElButton, ElButtonGroup } from '@lt13.10/components/button'
import { ElCalendar } from '@lt13.10/components/calendar'
import { ElCard } from '@lt13.10/components/card'
import { ElCarousel, ElCarouselItem } from '@lt13.10/components/carousel'
import { ElCascader } from '@lt13.10/components/cascader'
import { ElCascaderPanel } from '@lt13.10/components/cascader-panel'
import { ElCheckTag } from '@lt13.10/components/check-tag'
import {
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
} from '@lt13.10/components/checkbox'
import { ElCol } from '@lt13.10/components/col'
import { ElCollapse, ElCollapseItem } from '@lt13.10/components/collapse'
import { ElCollapseTransition } from '@lt13.10/components/collapse-transition'
import { ElColorPicker } from '@lt13.10/components/color-picker'
import { ElConfigProvider } from '@lt13.10/components/config-provider'
import {
  ElAside,
  ElContainer,
  ElFooter,
  ElHeader,
  ElMain,
} from '@lt13.10/components/container'
import { ElDatePicker } from '@lt13.10/components/date-picker'
import {
  ElDescriptions,
  ElDescriptionsItem,
} from '@lt13.10/components/descriptions'
import { ElDialog } from '@lt13.10/components/dialog'
import { ElDivider } from '@lt13.10/components/divider'
import { ElDrawer } from '@lt13.10/components/drawer'
import {
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
} from '@lt13.10/components/dropdown'
import { ElEmpty } from '@lt13.10/components/empty'
import { ElForm, ElFormItem } from '@lt13.10/components/form'
import { ElIcon } from '@lt13.10/components/icon'
import { ElImage } from '@lt13.10/components/image'
import { ElImageViewer } from '@lt13.10/components/image-viewer'
import { ElInput } from '@lt13.10/components/input'
import { ElInputNumber } from '@lt13.10/components/input-number'
import { ElLink } from '@lt13.10/components/link'
import { ElMenu, ElMenuItem, ElMenuItemGroup } from '@lt13.10/components/menu'
import { ElPageHeader } from '@lt13.10/components/page-header'
import { ElPagination } from '@lt13.10/components/pagination'
import { ElPopconfirm } from '@lt13.10/components/popconfirm'
import { ElPopover } from '@lt13.10/components/popover'
import { ElPopper } from '@lt13.10/components/popper'
import { ElProgress } from '@lt13.10/components/progress'
import { ElRadio, ElRadioButton, ElRadioGroup } from '@lt13.10/components/radio'
import { ElRate } from '@lt13.10/components/rate'
import { ElResult } from '@lt13.10/components/result'
import { ElRow } from '@lt13.10/components/row'
import { ElScrollbar } from '@lt13.10/components/scrollbar'
import { ElOption, ElOptionGroup, ElSelect } from '@lt13.10/components/select'
import { ElSelectV2 } from '@lt13.10/components/select-v2'
import { ElSkeleton, ElSkeletonItem } from '@lt13.10/components/skeleton'
import { ElSlider } from '@lt13.10/components/slider'
import { ElSpace } from '@lt13.10/components/space'
import { ElStep, ElSteps } from '@lt13.10/components/steps'
import { ElSwitch } from '@lt13.10/components/switch'
import { ElTable, ElTableColumn } from '@lt13.10/components/table'
import { ElAutoResizer, ElTableV2 } from '@lt13.10/components/table-v2'
import { ElTabPane, ElTabs } from '@lt13.10/components/tabs'
import { ElTag } from '@lt13.10/components/tag'
import { ElTimePicker } from '@lt13.10/components/time-picker'
import { ElTimeSelect } from '@lt13.10/components/time-select'
import { ElTimeline, ElTimelineItem } from '@lt13.10/components/timeline'
import { ElTooltip } from '@lt13.10/components/tooltip'
import { ElTooltipV2 } from '@lt13.10/components/tooltip-v2'
import { ElTransfer } from '@lt13.10/components/transfer'
import { ElTree } from '@lt13.10/components/tree'
import { ElTreeSelect } from '@lt13.10/components/tree-select'
import { ElTreeV2 } from '@lt13.10/components/tree-v2'
import { ElUpload } from '@lt13.10/components/upload'
import type { Plugin } from 'vue'

export default [
  ElAffix,
  ElAlert,
  ElAutocomplete,
  ElAutoResizer,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElButtonGroup,
  ElCalendar,
  ElCard,
  ElCarousel,
  ElCarouselItem,
  ElCascader,
  ElCascaderPanel,
  ElCheckTag,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPicker,
  ElConfigProvider,
  ElContainer,
  ElAside,
  ElFooter,
  ElHeader,
  ElMain,
  ElDatePicker,
  ElDescriptions,
  ElDescriptionsItem,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElEmpty,
  ElForm,
  ElFormItem,
  ElIcon,
  ElImage,
  ElImageViewer,
  ElInput,
  ElInputNumber,
  ElLink,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElPageHeader,
  ElPagination,
  ElPopconfirm,
  ElPopover,
  ElPopper,
  ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRate,
  ElResult,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElOption,
  ElOptionGroup,
  ElSelectV2,
  ElSkeleton,
  ElSkeletonItem,
  ElSlider,
  ElSpace,
  ElSteps,
  ElStep,
  ElSwitch,
  ElTable,
  ElTableColumn,
  ElTableV2,
  ElTabs,
  ElTabPane,
  ElTag,
  ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTooltipV2,
  ElTransfer,
  ElTree,
  ElTreeSelect,
  ElTreeV2,
  ElUpload,
] as Plugin[]
