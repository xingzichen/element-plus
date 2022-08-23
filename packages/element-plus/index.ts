import installer from './defaults'
export * from '@lt13.10/components'
export * from '@lt13.10/constants'
export * from '@lt13.10/directives'
export * from '@lt13.10/hooks'
export * from '@lt13.10/tokens'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
