# 00014 - first-of-array

## 🤔 詰まったこと

## 💡 学んだこと
```typescript
T extentds [infer F, ...infer R]
```
- Tが配列で、最初の要素がF、残りがRの形から

```typescript
? F
```
- 最初の要素Fを返す

```typescript
: never
```
- 空配列だった場合など、戦闘が取れないときはneverを返す