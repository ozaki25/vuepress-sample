# 変数の宣言(let/const)

## ゴール

- letとconstの違いを理解する

## 変数の宣言

- JavaScriptでは変数を宣言する際に以下のキーワードを使う
    - let
    - const
    - (var)
        - varは古い書き方
- Javaのように明示的に型を宣言するようなことはしない

## const

- 再代入不可な変数を宣言する時には`const`を使う
- **constを使って宣言するのを原則とするとよい**
    - constを用いてフリーズさせることで意図せぬ書き換えを防ぐ
- 例

    ```js
    const name = 'Ozaki';
    console.log(name); // Ozaki
    ```

    ```js
    const name = 'Ozaki';
    name = 'Yuichi Ozaki'; // エラー
    ```

## let

- 再代入可能な変数を宣言する時には`let`を使う
- どうしても再代入が必要な場合に使う
- 例

    ```js
    let name = 'Ozaki';
    console.log(name); // Ozaki
    ```

    ```js
    let name = 'Ozaki';
    name = 'Yuichi Ozaki'; // OK
    console.log(name); // Yuichi Ozaki
    ```

## まとめ

- JavaScriptでは変数の宣言に`let`/`const`を使う
- `const`は再代入不可な変数を宣言できる
- `let`は再代入可能な変数を宣言できる
- 基本は`const`を使い、どうしても再代入したい時に`let`を使う



