import { defineComponent, toRef, inject } from 'vue'
import { jsonDataProps } from './type/type'
import { registerCpnTypes, cpnOptions } from '@/utils/type'
export default defineComponent({
  props: jsonDataProps,
  setup(props) {
    const registerConfig = inject<registerCpnTypes>('registerConfig')
    const { blocks } = toRef(props, 'modelValue').value
    return () => {
      return registerConfig?.materialComponentsList.map((item: cpnOptions) => {
        return <div key={item.key}>{item.preview()}</div>
      })
    }
  }
})
