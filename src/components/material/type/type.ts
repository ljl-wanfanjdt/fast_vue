import { PropType } from 'vue'

interface containerStyle {
  width: number
  height: number
}

interface blocksItem {
  top: number
  left: number
  zIndex: number
  key: string
}

interface jsonData {
  style: containerStyle
  blocks: blocksItem[]
}
export const jsonDataProps = {
  modelValue: {
    type: Object as PropType<jsonData>,
    default: () => ({})
  }
}
