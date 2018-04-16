# 通信処理

## ゴール

- fetchAPIの使い方を覚える

## fetchAPIとは

- fetchAPIとは通信処理を行うための標準API
    - 標準APIなのでライブラリ等を入れなくても使える
    - ただしIEは対応していないので使えない
- $.ajaxと同じようなもの

## fetchAPIの使い方

### fetchの呼び出し方

- fetchは第一引数にURL、第二引数にオプションをとる
- GET

    ```js
    // デフォルトがGETなので第二引数は省略できる
    const response = await fetch('http://localhost/users');
    ```

- POST

    ```js
    const options = {
      method: 'POST',
      body: JSON.stringify({ name: 'Ozaki', age: 27 }),
    };
    const response = await fetch('http://localhost/users', options);
    ```

### fetchのレスポンスの受け取り方

- fetchは非同期で動くためawaitを活用する

    ```js
    // fetchは非同期で動くためawaitをつける
    const response = await fetch('http://localhost/users');
    ```

- レスポンスの形式に合わせて変換する
    - `.json()`や`.blob()`がある

    ```js
    const response = await fetch('http://localhost/users');
    // レスポンスがjsonの場合はjson()を使う
    const responseJson = await response.json();
    console.log(responseJson); // { name: "Ozaki" }
    ```

- レスポンスのステータスコードを取得する

    ```js
    const response = await fetch('http://localhost/users');
    const responseStatus = response.status;
    console.log(responseStatus); // 200/404/500...
    ```

- レスポンスのステータスコードが200系(200~299)かどうかチェックする

    ```js
    const response = await fetch('http://localhost/users');
    const isSuccess = response.ok;
    console.log(isSuccess); // true/false
    ```

## まとめ

- fetchAPIとは通信処理をするための標準API
- fetchの呼び出しは、第一引数にURL、第二引数にHTTPメソッド等のオプションを渡す
- fetchは非同期で動くためawaitを活用する

