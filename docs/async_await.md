# 非同期処理の扱い方

## ゴール

- async, awaitを使った非同期処理の書き方を覚える

## 非同期処理とPromise

- JavaScriptではPromiseを返す処理は非同期で動く
    - 典型的なPromiseを返す処理は通信処理
- **非同期で動く**というのは処理の結果を待たずに先に進んでしまうということ
- 非同期処理の例

    ```js
    // fetch関数はPromiseを返すので非同期で動く
    const response = fetch('http://localhost:8080');
    // fetchの結果が返ってくる前にこの処理が実行されるのでundefinedになってしまう
    alert(response.status); // undefined
    ```

- 同期処理の例

    ```js
    // (当たり前だけど)1 + 1の結果が返ってから後続の処理が実行される
    const result = 1 + 1;
    alert(result); // 2
    ```

## 非同期処理のハンドリング

- 非同期処理の結果を待ってから後続の処理を動かしたいケースが多い
- `await`を使うとそれを実現できる

### await

- awaitを使わない場合

    ```js
    const response = fetch('http://localhost:8080');
    alert(response.status); // undefined
    ```

- awaitを使った場合

    ```js
    // awaitがついているので処理が終わるまでここで止まる
    const response = await fetch('http://localhost:8080');
    alert(response.status); // 200
    ```

- ただし`await`を使うのは`async`がついた関数の中でなければいけないという制約がある

### async

- 関数に`async`をつけると以下の2つことが起きる
    - 関数内で`await`を使えるようになる
    - 戻り値がPromiseになる
- `async`キーワードは関数名の直前につける
    - 無名関数の場合は`()`の直前

- 名前付き関数の例

    ```js
    class SomeClass {
        async getUsers() {
            const response = await fetch('http://localhost/users');
            alert(response.status); // 200
        }
    }
    ```

- 無名関数の例

    ```js
    const getUsers = async () => {
        const response = await fetch('http://localhost/users');
        alert(response.status); // 200
    }
    ```

### async/awaitの注意点

- `async`をつけた関数はPromiseを返すので、`async`つき関数を呼ぶ時も適宜`await`を使う

    ```js
    const getUsers = async () => {
        const response = await fetch('http://localhost/users');
        alert(response.status); // 200
        return response.status;
    }

    const someMethod = () => {
        // getUsersはPromiseを返すので非同期で動く
        const users = getUsers();
        alert(users); // undefined
    }
    
    const otherMethod = async () => {
        // awaitをつけているのでgetUsersの処理が終わってから後続が実行される
        const users = await getUsers();
        alert(users); // 200
    }
    ```

## まとめ

- Promiseを返す関数は非同期で動く
- `await`をつけると非同期処理の結果が返ってくるまで待つことができる
- `await`は`async`のついた関数でしか使えない
- `async`のついた関数は戻り値がPromiseになる
