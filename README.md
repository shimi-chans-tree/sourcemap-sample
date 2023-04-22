node main.js

# android

react-native bundle --entry-file index.js --platform android --dev false --reset-cache --bundle-output index.android.bundle --sourcemap-output index.android.bundle.map

# ios

react-native bundle --entry-file index.js --platform ios --dev false --reset-cache --bundle-output index.ios.bundle --sourcemap-output index.ios.bundle.map
