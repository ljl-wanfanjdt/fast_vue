<template>
  <div>
    <material v-model="jsonData"></material>
  </div>
</template>

<script>
import { defineComponent, ref, provide } from 'vue'
import data from '@/model/data.json'
import material from '@/components/material/index.tsx'
import registerConfig from '@/utils/registerComponent.tsx'
export default defineComponent({
  components: {
    material
  },
  setup() {
    const jsonData = ref(data)
    console.log(registerConfig)
    provide('registerConfig', registerConfig)
    return {
      jsonData
    }
  }
})
</script>
<style lang="less" scoped></style>
