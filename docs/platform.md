# ReactNativeでOSの判別をする方法

## ゴール

- ReactNativeでOSの判別(ios/android)をする書き方を覚える

## 書き方

- `Platform`というモジュールを使うのでimportする

```js
import { Platform } from 'react-native'
```

## OSの取得

- `Platform.OS`でOSを取得できる

```js
console.log(Platform.OS); // ios or android
```

- 活用例
    - OSによってmarginを変える

```js
const styles = StyleSheet.create({
    container: {
       margin: Platform.OS === 'ios' ? 10 : 0,
    },
});
```

### OSによる処理の振り分け

- `Platform.select`を使うことでOSによる処理の振り分けができる

```js
const os = Platform.select({
   ios: 'iosです',
   android: 'androidです',
});
console.log(os); // iosです or androidです
```

- 活用例
    - OSによってmarginを変える

```js
const styles = StyleSheet.create({
    container: {
       margin: Platform.select({
           ios: 10,
           android: 0,
       }),
    },
});
```

### Platform.OSとPlatform.selectの使い分け

- 以下の2パターンの使い分け

```js
const margin = Platform.OS === 'ios' : 10 : 20;
```

```js
const margin = Platform.select({
    ios: 10,
    android: 20
});
```

- `Platform.OS`
    - iosかそれ以外かで分岐させているので、対象がios/androidのみと確定していないといけない
    - こちらの方が簡潔に書ける
- `Platform.select`
    - 明示的にios/androidを指定しているので見やすい
    - 特殊ではあるがios/android以外に対応する場合もそのOSに関する記述を付け足すだけでいい
- 好みの問題と言っていいと思う

## どんな時にOSの判別を使うか

1. レイアウトの調整
2. OS固有機能を使う場合

### レイアウトの調整

- 基本的にはios/androidワンソースでいけるが、時々OSによって微妙にレイアウトがずれることがある
- そういった場合にmargin等の値をOSごとに変えることで対応したりする

### OS固有機能を使う場合

- OSごとに挙動が異なったり呼び出す処理が違うような場合に処理を振り分ける
    - カメラとかカレンダーとか
- ただしこのケースは、OSの差異をラップしてくれるライブラリがたいてい存在するので、利用者側でOS判別しなくていいことが多い

## まとめ

- `Platform.OS`or`Platform.select`を使うことでOSごとに処理を分けることができる
- OSごとに処理を分けなければいけない主なケースはレイアウトの微調整
