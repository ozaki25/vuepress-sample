# ReactNativeのスタイル

## ゴール

- ReactNativeでのスタイルの書き方を覚える

## スタイルの適用のしかた

### インライン

- JSXタグの`style`属性に記述する

    ```jsx
    <Text style={{ color: 'red', fontSize: 18 }}>テキスト</Text>
    ```
### StyleSheet.create

- StyleSheet.createを使って定義する

    ```jsx
    import React from 'react';
    import { Stylesheet, Text } from 'react-native';

    const styles = Stylesheet.create({
      myText: {
        color: 'red',
        fontSize: 18,
      }
    })

    const SomeComponent = () => (
      <Text style={styles.myText}>テキスト</Text>
    )
    ```

### 複数指定

- 複数のstyleを当てる場合は`[]`で囲う

    ```jsx
    const styles = Stylesheet.create({
      myText: {
        color: 'red',
        fontSize: 18,
      },
      boldText: {
        fontWeight: 'bold',
      },
    })

    const SomeComponent = () => (
      <Text style={[styles.myText, styles.boldText]}>テキスト</Text>
    )
    ```

- 同じプロパティが定義された場合より後方に定義した方が勝つ

    ```jsx
    const styles = Stylesheet.create({
      red: {
        color: 'red',
      },
      blue: {
        color: 'blud',
      },
    })

    const SomeComponent = () => (
      // これは青字で表示される
      <Text style={[styles.red, styles.blue]}>テキスト</Text>
    )
    ```

###  複数指定の活用

- コンポーネントでデフォルト値をセットしておき、引数で上書くことができるようにしておく

    ```jsx
    const styles = Stylesheet.create({
      red: {
        color: 'red',
      },
    })

    const SomeComponent = ({ style }) => (
      <Text style={[styles.red, style]}>テキスト</Text>
    )
    // ...
    <SomeComponent /> // 赤字
    <SomeComponent style={{ color: 'green' }} /> // 緑字
    ```

## スタイルの定義のしかた

- ReactNativeでは基本的にWebのスタイルと同様のプロパティが容易されている
- ただし、以下の2点に注意する
    - キャメルケースで書く
    - 値は数値か文字列のみ

### キャメルケースで書く

- Webで`-`つながりで記述していたプロパティはキャメルケースになる
    - `mergin-top` -> `marginTop`

    ```js
    marginTop: 15
    backgroundColor: '#e70000'
    fontWeight: 'bold'
    ```

### 値は数値か文字列のみ

- 数値には`px`のような単位はつけない

    ```js
    fontSize: 18
    borderWidth: 3
    ```

- カラーコードやキーワードは全てクオートで囲う

    ```js
    color: '#f5f5f5'
    position: 'absolute'
    ```

## まとめ

- ReactNativeのコンポーネントへのスタイル適用ははインラインと`Stylesheet.create`の2種類がある
- スタイルの定義は以下の点以外はWebと同じである
    - プロパティ名は`-`つながりではなくキャメルケースで記述する
    - 値は数値か文字列で記述する
