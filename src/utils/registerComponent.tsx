interface cpnOptions {
  label: string
  key: string
  render: () => any
  preview: () => any
}
interface canvasCpnType {
  [key: string]: any
}

export interface registerCpnTypes {
  materialComponentsList: any[]
  canvasComponentsMap: canvasCpnType
  register: (cpnOptions: cpnOptions) => void
}

function registerComponent(): registerCpnTypes {
  const materialComponentsList: any[] = []
  const canvasComponentsMap: canvasCpnType = {}

  return {
    materialComponentsList,
    canvasComponentsMap,
    register: (cpnOptions: cpnOptions) => {
      materialComponentsList.push(cpnOptions)
      canvasComponentsMap[cpnOptions.key] = cpnOptions.render
    }
  }
}
const registerConfig = registerComponent()
registerConfig.register({
  label: '文本',
  preview: () => '预览文本',
  render: () => '渲染文本',
  key: 'text'
})
registerConfig.register({
  label: '按钮',
  preview: () => <button>按钮</button>,
  render: () => <button>按钮</button>,
  key: 'button'
})
registerConfig.register({
  label: '输入框',
  preview: () => <input>按钮</input>,
  render: () => <input>按钮</input>,
  key: 'input'
})

export default registerConfig
