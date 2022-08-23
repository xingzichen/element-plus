import { inject } from 'vue'
import { elPaginationKey } from '@lt13.10/tokens'

export const usePagination = () => inject(elPaginationKey, {})
