# Reactのコンポーネント

## ゴール

- 関数を使ったコンポーネントの作り方を覚える
- クラスを使ったコンポーネントの作り方を覚える

## Reactのコンポーネントとは

- ReactはJSXタグを使ってUIを構築する
- ReactのコンポーネントとはJSXタグを返すクラスや関数のこと
- コンポーネントは別のコンポーネントをJSXタグとして呼び出すことができる
- 複数のコンポーネントを組み合わせることでアプリを構築していく

## コンポーネントの種類

- コンポーネントはクラスか関数で定義する
- どちらの場合でもコンポーネント名の最初の文字は大文字でなければいけない

### 関数の場合

- 関数で作る場合は(一般的に)アロー関数で定義する
- 関数の戻り値がこのコンポーネントの描画内容となる

    ```jsx
    import React from 'react';
    import { Text } from 'react-native';
    
    const Hello = ({ name }) => <Text>Hello {name}</Text>;
    
    export default Hello;
    ```

- ↑のコンポーネントを使う例

    ```jsx
    import React from 'react';
    import { View } from 'react-native';
    import Hello from './Hello';
    
    const Greet = () => (
      <View>
        { // このようにJSXタグとして使うことができる }
        <Hello name="Ozaki" />
        <Hello name="Fukushima" />
        <Hello name="Imaki" />
      </View>
    );
    
    export default Greet;
    ```

### クラスの場合

- クラスで作る場合はreactのComponentをextendsする
- renderメソッドでreturnするJSXタグがこのコンポーネントの描画内容となる

    ```jsx
    import React, { Component } from 'react';
    import { Text } from 'react-native';

    class Hello extends Component {
      render() {
        return <Text>Hello {this.props.name}</Text>
      }
    }

    export default Hello;
    ```

- ↑のコンポーネントを使う例

    ```jsx
    import React, { Component } from 'react';
    import { View } from 'react-native';
    import Hello from './Hello';

    class Greet extends Component {
      render() {
        return(
          <View>
            <Hello name="Ozaki" />
            <Hello name="Fukushima" />
            <Hello name="Imaki" />
          </View>
        )
      }
    }

    export default Greet;
    ```

### それぞれの違い

- クラスと関数での違いは以下の2点
    - クラスだとライフサイクルメソッドを使える
    - クラスだとstateを持つことができる
- ライフサイクルメソッド、stateに関しては別記事で

### 使い分けの指針

- 基本はよりシンプルである関数を使うようにするとよい
- ライフサイクルメソッドやstate管理が必要になった場合クラス化する

## 引数の受け渡し

- コンポーネントは呼び出す時に引数を渡すことができる
    - 渡したい引数はJSXタグの属性にセットする

    ```jsx
    <Hello name="Ozaki" />
    ```

### 関数の場合

- 属性として渡された値は、関数の第一引数にオブジェクトとして渡される

    ```jsx
    // このようにして呼ばれたとする
    <Hello name="Ozaki" age="27" />
    
    
    // 第一引数で受取ることができる
    const Hello = (props) => {
      console.log(props); // { name: 'Ozaki', age: 27 }
      return <Text>Hello {props.name}</Text>;
    }
    
    // オブジェクトの分割代入の記法によって以下のように書くこともできる
    const Hello = ({ name, age }) => {
      console.log(name); // 'Ozaki'
      console.log(age); // 27
      return <Text>Hello {name}</Text>;
    }
    ```

### クラスの場合

- 属性として渡された値は`this.props`にオブジェクトでセットされる

    ```jsx
    // このようにして呼ばれたとする
    <Hello name="Ozaki" age="27" />
    
    
    // this.propsで呼び出すことができる
    class Hello extends Component {
      render() {
        console.log(this.props); // { name: 'Ozaki', age: 27 }
        return <Text>Hello {this.props.name}</Text>;
      }
    }
    ```

## まとめ

- Reactコンポーネントはクラスか関数で定義することができる
- 関数の場合は
    - 戻り値としてJSXタグをreturnする
    - コンポーネント生成時に渡された引数は関数の第一引数で受取ることができる
- クラスの場合は
    - Componentを継承しrenderメソッドでJSXタグをreturnする
    - コンポーネント生成時に渡された引数は`this.props`で受取ることができる
