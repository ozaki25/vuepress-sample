# AsyncStorageの使い方

## ゴール

- AsyncStorageで何が出来るか理解する
- AsyncStorageの使い方を理解する

## AsyncStorageとは

- AsyncStorageとはReactNativeで端末内にデータを永続化するための機能である
- 文字列のみを保存することができる
- 処理は全て非同期で動く

## AsyncStorageの使い方

### データの格納の仕方

- `setItem`を使う

  ```js
  const message = 'hello';
  AsyncStorage.setItem('message', message);
  ```

### データの取得の仕方

- `getItem`を使う

  ```js
  const message = await AsyncStorage.setItem('message');
  console.log(message); // Hello
  ```

### データの削除の仕方

- `removeItem`を使う

  ```js
  AsyncStorage.removeItem('message');
  ```

- 全てのデータを削除する場合は`clear`を使う
    - データはアプリ単位で保存されるので他アプリでの保存内容に影響はない

  ```js
  AsyncStorage.clear();
  ```

## AsyncStorageの注意点

- 保存するデータは端末内に保存されるので重要情報の保存には注意する必要がある
    - 重要情報は極力サーバサイドで永続化する設計とした方がよい
    - どうしても保存する必要がある場合は暗号化も検討した方がよい

## まとめ

- AsyncStorageとはReactNativeで端末内にデータを永続化するための機能である
