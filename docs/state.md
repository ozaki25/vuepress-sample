# コンポーネントのstate管理

## ゴール

- stateの更新のしかたを理解する
- stateを更新した時の挙動を理解する

## コンポーネントのstateとは

- クラスで定義したコンポーネントはクラス内に状態(state)を持つことができる
- stateを更新することで再描画を行い表示内容を更新することができる

## stateの使い方

### stateのデフォルト値

- デフォルト値は`constructor`で定義する

    ```js
    constructor(props) {
      super(props);
      this.state = { checked: false };
    }
    ```

### stateの更新

- `setState`メソッドを使ってstateを更新する
- stateが更新されるとrenderメソッドが呼ばれ再レンダリングされる
    - renderメソッドの中で`setState`を実行することは無限ループの危険性があるのでアンチパターンである

    ```js
    this.setState({ name: 'ozaki' });
    ```

- 複数のstateをまとめて更新することもできる

    ```js
    this.setState({ isLoading: false, dialogVisible: true });
    ```

## stateの活用例

### ユーザ操作等をきっかけにstateを更新するパターン

- 文字列をタップする度に画面に表示される`チェック！`/`未チェック`が切り替わるサンプル

    ```jsx
    import React, { Component } from 'react';
    import { Text, TouchableOpacity } from 'react-native';
    
    class StateSample1 extends Component {
      constructor(props) {
        super(props);
        // 初期値はfalse
        this.state = { checked: false };
      }
    
      // タップする度にtrue/falseを切り替える
      // setStateでstateが更新されるとrenderメソッドが呼ばれる
      onPressCheck = () => this.setState({ checked: !this.state.checked });
    
      render() {
        return (
          { // TouchableOpacityをタップするとonPressに渡したメソッドが実行される }
          <TouchableOpacity onPress={this.onPressCheck}>
            { // stateの値に応じて表示内容を切り替える }
            <Text>{this.state.checked ? 'チェック！' : '未チェック' }</Text>
          </TouchableOpacity>
        );
      }
    }
    
    export default StateSample1;
    ```

### 非同期処理の完了後にstateを更新するパターン

- APIからユーザ一覧を取得し画面に表示するサンプル

    ```jsx
    import React, { Component } from 'react';
    import { FlatList, Text, View } from 'react-native';
    
    class StateSample2 extends Component {
      constructor(props) {
        super(props);
        // 初期値は空の配列
        this.state = { users: [] };
      }
    
      // 初回のrenderメソッド実行後に呼ばれるライフサイクルメソッド
      async conponentDidMount() {
        const response = await fetch('http://localhost/users');
        const users = await response.json();
        // 取得したユーザ一覧をstateにセット
        // this.setState({ users: users });の省略表記
        this.setState({ users });
      }
    
      render() {
        return (
          { // 通信が完了してユーザがstateにセットされるまでは、空の配列なので何も表示されない }
          { // FlatListはdata属性に渡した配列に対して繰り返し処理を行うコンポーネント }
          <FlatList
            data={this.state.users}
            renderItem={({ item }) => (
              <View>
                <Text>Name: {item.name}</Text>
                <Text>Age: {item.age}</Text>
              </View>
            )}
           />
        );
      }
    }
    
    export default StateSample2;
    ```

## まとめ

- クラスで定義したコンポーネントは状態(state)を持つことができる
- stateは`constructor`で初期化する
- stateの更新は`setState`メソッドを使う
- stateが更新されるとrenderメソッドが呼ばれ再レンダリングされる
