局部：`declare const window: Window & { WeixinJSBridge: any, WVJBCallbacks: any };`

全局：
```ts
declare global {
  interface Navigator {
    mediaSession: any
  }

  interface String {
    myExtendAction: () => void
  }

  const myVariable = 1
}
```

