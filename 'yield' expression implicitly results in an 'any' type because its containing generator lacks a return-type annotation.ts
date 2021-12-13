'yield' expression implicitly results in an 'any' type because its containing generator lacks a return-type annotation.ts

解决：
```ts
  const brand = yield select((state: TRootState) => state.common.siteBrand)
```
改为：
```ts
  const brand:string = yield select((state: TRootState) => state.common.siteBrand)
```
