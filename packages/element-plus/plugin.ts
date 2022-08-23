import { ElInfiniteScroll } from '@lt13.10/components/infinite-scroll'
import { ElLoading } from '@lt13.10/components/loading'
import { ElMessage } from '@lt13.10/components/message'
import { ElMessageBox } from '@lt13.10/components/message-box'
import { ElNotification } from '@lt13.10/components/notification'
import { ElPopoverDirective } from '@lt13.10/components/popover'

import type { Plugin } from 'vue'

export default [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopoverDirective,
] as Plugin[]
