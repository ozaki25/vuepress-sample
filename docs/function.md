# 関数

## ゴール

- アロー関数の書き方を覚える
- アロー関数の省略記法を覚える

## 関数の種類

- アロー関数とfunctionを使った関数がある
- 基本的にはアロー関数を使うようにするとよい
    - アロー関数では呼び出し元の`this`が維持されるため

## アロー関数の書き方

- 基本形

    ```js
    const sayHello = () => {
      console.log('hello');
    }
    
    sayHello(); // hello
    ```

- 引数/戻り値があるパターン

    ```js
    const add = (a, b) => {
      return a + b;
    }
    
    console.log(add(1, 2)); // 3
    ```

- 処理が1行の場合は`{}`と`return`を省略できる

    ```js
    const add = (a, b) => a + b;
    
    console.log(add(1, 2)); // 3
    ```

## functionを使った関数の書き方

- 名前付き関数

    ```js
    function sayHello() {
      console.log('hello');
    }
    
    sayHello(); // hello
    ```

- 関数式

    ```js
    const sayHello = function() {
      console.log('hello');
    }
    
    sayHello(); // hello
    ```

## まとめ

- アロー関数は処理が一行の場合に省略記法を使うことができる
