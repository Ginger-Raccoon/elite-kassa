
declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
  export = classNames
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
  import type React from 'react'

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean
