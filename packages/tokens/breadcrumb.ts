import type { InjectionKey } from 'vue'
import type { BreadcrumbProps } from '@lt13.10/components/breadcrumb'

export const breadcrumbKey: InjectionKey<BreadcrumbProps> =
  Symbol('breadcrumbKey')
