// @ts-nocheck
import { computed, nextTick, toRefs } from 'vue'
import { pick } from 'lodash-unified'
import ElSelect from '@lt13.10/components/select'
import { useNamespace } from '@lt13.10/hooks'
import type { Ref } from 'vue'
import type ElTree from '@lt13.10/components/tree'

export const useSelect = (
  props,
  { attrs },
  {
    tree,
    key,
  }: {
    select: Ref<InstanceType<typeof ElSelect> | undefined>
    tree: Ref<InstanceType<typeof ElTree> | undefined>
    key: Ref<string>
  }
) => {
  const ns = useNamespace('tree-select')

  const result = {
    ...pick(toRefs(props), Object.keys(ElSelect.props)),
    ...attrs,
    valueKey: key,
    popperClass: computed(() => {
      const classes = [ns.e('popper')]
      if (props.popperClass) classes.push(props.popperClass)
      return classes.join(' ')
    }),
    filterMethod: (keyword = '') => {
      if (props.filterMethod) props.filterMethod(keyword)

      nextTick(() => {
        // let tree node expand only, same with tree filter
        tree.value?.filter(keyword)
      })
    },
    // clear filter text when visible change
    onVisibleChange: (visible: boolean) => {
      attrs.onVisibleChange?.(visible)

      if (props.filterable && visible) {
        result.filterMethod()
      }
    },
  }

  return result
}
