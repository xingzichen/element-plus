import { nextTick } from 'vue'
import { describe, expect, test } from 'vitest'

import { IMAGE_SUCCESS } from '@lt13.10/test-utils/mock'
import makeMount from '@lt13.10/test-utils/make-mount'
import ImageViewer from '../src/image-viewer.vue'

const mount = makeMount(ImageViewer, {
  props: {
    urlList: [IMAGE_SUCCESS],
  },
})

async function doubleWait() {
  await nextTick()
  await nextTick()
}

describe('<image-viewer />', () => {
  test('big image preview', async () => {
    const wrapper = mount()
    await doubleWait()
    const viewer = wrapper.find('.el-image-viewer__wrapper')
    expect(viewer.exists()).toBe(true)
    await wrapper.find('.el-image-viewer__close').trigger('click')
    expect(wrapper.emitted('close')).toEqual([[]])
    wrapper.unmount()
  })

  test('image preview hide-click-on-modal', async () => {
    const wrapper = mount()

    await doubleWait()
    const viewer = wrapper.find('.el-image-viewer__wrapper')
    expect(viewer.exists()).toBe(true)
    await wrapper.find('.el-image-viewer__mask').trigger('click')
    expect(wrapper.emitted('close')).toBeUndefined()

    await wrapper.setProps({
      hideOnClickModal: true,
    })

    await wrapper.find('.el-image-viewer__mask').trigger('click')
    expect(wrapper.emitted('close')).toBeDefined()
    wrapper.unmount()
  })

  test('manually switch image', async () => {
    const wrapper = mount({
      props: {
        urlList: [IMAGE_SUCCESS, IMAGE_SUCCESS],
      },
    })

    await doubleWait()
    const viewer = wrapper.find('.el-image-viewer__wrapper')
    expect(viewer.exists()).toBe(true)

    const imgList = wrapper.findAll('.el-image-viewer__img')
    expect(imgList[0].attributes('style')).not.contains('display: none;')
    expect(imgList[1].attributes('style')).contains('display: none;')

    wrapper.vm.setActiveItem(1)
    await doubleWait()
    expect(imgList[0].attributes('style')).contains('display: none;')
    expect(imgList[1].attributes('style')).not.contains('display: none;')
    wrapper.unmount()
  })
})
