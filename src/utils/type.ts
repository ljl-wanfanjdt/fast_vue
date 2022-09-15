export interface cpnOptions {
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
