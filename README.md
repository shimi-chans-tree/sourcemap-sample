# source map 解析のサンプル

```
node main.js
```

# source mapの生成

## android

```
npx react-native bundle --entry-file index.js --platform android --dev false --reset-cache --bundle-output index.android.bundle --sourcemap-output index.android.bundle.map
```

## ios

```
npx react-native bundle --entry-file index.js --platform ios --dev false --reset-cache --bundle-output index.ios.bundle --sourcemap-output index.ios.bundle.map
```
