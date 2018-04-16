# 別アプリへの遷移

## ゴール

- Linkingの使い方を覚える

## Linkingで何ができるか

- ReactNativeのアプリから別アプリを呼び出すことができる
    - ブラウザ
    - 電話
    - 等々

## Linlingの使い方

### ブラウザでWebページを表示する場合

```js
const url = 'http://google.com';
Linking.openURL(url); // ブラウザが開いて遷移する
```

### 電話アプリを開く場合

```js
const url = 'tel:08012345678';
Linking.openURL(url); // 電話アプリが開く
```

### LINEを開く場合

```js
const url = 'line://';
Linking.openURL(url); // LINEが開く
```

### 対象のアプリがインストールされていない場合のハンドリング

- `openURL`の失敗を検知する

    ```js
    const url = 'line://';
    Linking.openURL(url).catch(() => alert('LINEを開けませんでした'));
    ```

- `openURL`する前に開けるかどうか確認する

    ```js
    const url = 'line://';
    const canOpenUrl = await Linking.canOpenURL(url);
    if(canOpenUrl) {
      Linking.openURL(url);
    } else {
      alert('LINEを開けませんでした');
    }
    ```

## まとめ

- Linkingを使うことでReactNativeのアプリから別アプリに遷移することができる
