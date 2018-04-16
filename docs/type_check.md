# Reactコンポーネントの型チェック

## ゴール

- PropTypesで何ができるか理解する
- PropTypesの使い方を覚える

## JavaScriptの型

- JavaScriptは言語仕様上、明示的に型を宣言することはない
- なので意図した型と違ったデータが渡ってきても実行するまで検知することができない
    - もしくは実行時も検知が容易でない場合もある
- こうした課題に対応するために型チェックのライブラリを導入するケースが増えている

## Reactの型チェックライブラリ

- React/ReactNativeで型チェックを行う場合以下の3つが候補となる
    - PropTypes
    - Flow
    - TypeScript

### PropTypes

- 3つの中で一番軽量で簡易的
- 実行時に型違反があればコンソールにメッセージを出力する
- もともとはReactに組み込まれていたもので今は単独のライブラリになっている

### Flow

- React本体のコードで採用されているライブラリ
- コマンド実行やエディタの拡張機能によって、静的な型チェックができる

### TypeScript

- JavaScriptの拡張言語
- 型以外にも豊富な機能を持っている
- Flowと同様に静的な型チェックができる

### どのライブラリを選ぶとよいか

- どれも一長一短あるものなのでプロジェクトに応じて判断すると良い
- 今回は一番軽量で学習コストも低いPropTypesの使い方を紹介する

## PropTypesの使い方

### PropTypesで何ができるのか

- コンポーネントの引数に型を指定できる
- コンポーネントの引数にデフォルト値を設定できる
- 不適合な型の値が渡された場合、実行時にコンソールにメッセージを出力する

### PropTypesの導入

- npmコマンドでインストールする

    ```bash
    npm i -S prop-types
    ```

### PropTypesの使い方

- 引数の型と、必須項目でない場合はデフォルト値を設定する
- 関数/クラスどちらのコンポーネントでも書き方は同じ
- サンプル

    ```jsx
    import React from 'react';
    import { Text, TouchableOpacity } from 'react-native';
    import PropTypes from 'prop-types';

    const Button = (props) => (
      <TouchableOpacity onPress={props.onPress}>
        <Text>{props.title}</Text>
      </TouchableOpacity>
    )

    // 引数の型を指定
    Button.propTypes = {
      title: PropTypes.string,
      onPress: PropTypes.func.isRequired,
    }

    // 引数のデフォルト値を指定
    Button.defaultProps = {
      title: 'ボタン',
    }

    export default Button;
    ```

#### 引数の型の指定

- 以下のような形式で型を指定する
- 必須項目については`isRequired`をつける

    ```js
    // 引数の型を指定
    Button.propTypes = {
      title: PropTypes.string,
      onPress: PropTypes.func.isRequired,
    }

- 指定できる主な型

    ```js
    PropTypes.string // 文字列
    PropTypes.number // 数値
    PropTypes.bool // 真偽値
    PropTypes.func // 関数
    PropTypes.array // 配列
    PropTypes.object // オブジェクト
    PropTypes.element // Reactコンポーネント
    PropTypes.arrayOf(PropTypes.xxx) // xxx型の要素が入った配列
    PropTypes.shape({ yyy: PropTypes.zzz }) // key名がyyyでそのvalueの型がzzzであるプロパティを含むオブジェクト
    ```

#### 引数のデフォルト値の設定

- 以下のような形式でデフォルト値を指定する

    ```js
    // 引数のデフォルト値を指定
    Button.defaultProps = {
      title: 'ボタン',
    }
    ```

## まとめ

- 最近のJavaScript界隈では言語仕様の欠点を補うために型チェックライブラリを導入するケースが増えている
- React/ReactNativeで型チェックをする場合は、`PropTypes`/`Flow`/`TypeScript`が候補となる
- PropTypesはコンポーネントに渡される引数に対して、型とデフォルト値を設定することができる
