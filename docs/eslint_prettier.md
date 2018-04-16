# 構文チェックとフォーマッター

## ゴール

- ESLintの使い方と役割を理解する
- Prettierの使い方と役割を理解する

## 構文チェック

- JavaScriptの構文チェックツールは**ESLint**がメジャーなライブラリである

### ESLintでできること

- セミコロンの有無のような簡易なチェックから、メソッドの定義のしかたまで幅広い構文チェックができる
- auto-fixの機能もあるが、基本的にはルール違反を検知するためのツールである

### ESLintの導入

#### 設定ファイル

- プロジェクト直下に`.eslintrc`という名前で作成する
    - js形式(`.eslintrc.js`)やjson形式(`.eslintrc.json`)、yaml形式(`.eslintrc.yaml`)で作ることもできる
- ルールの定義は既存のものをベースに拡張していくと効率的
    - Reactの場合はaibnbの設定がよく使われる
- Reactの場合の`.eslintrc`の例

    ```json
    {
      // airbnbの設定をベースにする
      "extends": "airbnb",
      "parser": "babel-eslint",
      // 上書きしたいルールを記載
      "rules": {
        "max-len": [1, { "code": 100 }]
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prop-types": [2, { "ignore": ["navigation"] }],
      },
      "env": {
        "node": true,
        "jest/globals": true
      },
      "plugins": ["jest"]
    }
    ```

#### ライブラリの追加

- 必要なライブラリをnpmでインストールする

    ```bash
    npm i --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-import eslint-plugin-jest
    ```


### ESLintとVSCodeの連携

- メジャーなエディタの多くはESLintの拡張が用意されており、リアルタイムで構文エラーを確認することができる
- VSCodeの場合
    - 「拡張機能」から`ESLint`を検索しインストール
    - VSCodeを再起動する
    - ESLintの設定がされたプロジェクトで自動的に適用されるようになる

## フォーマッター

- JavaScriptのフォーマッターは**Prettier**がメジャーなライブラリである

### Prettierでできること

- ルールに応じて半角スペースの有無や改行のタイミングを自動で調整してくれる
    - インデントの調整も自動で行ってくれてとても便利
- ESLintのルールに対応してフォーマッターをかけることもできる

### Prettierの導入

#### 設定ファイル

- プロジェクト直下に`.prettierrc`という名前で作成する
    - とくにこだわりがなければ設定ファイルなしで問題ない

#### ライブラリの追加

- 必要なライブラリをインストールする

    ```bash
    npm i --save-dev prettier-eslint prettier-eslint-cli
    ```

### PrettierとVSCodeの連携

- メジャーなエディタの多くはPrettierの拡張が用意されており、ファイル保存と同時にフォーマッターを適用することができる
- VSCodeの場合
    - 「拡張機能」から`Prettier - Code formatter`を検索しインストール
    - `user settings`で以下の設定を追加

        ```json
        // ファイル保存時にフォーマッターを実行
        "editor.formatOnSave": true,
        // デフォルトのフォーマッターを無効化
        "javascript.format.enable": false,
        // ESLintのルールと連携させる
        "prettier.eslintIntegration": true,
        ```
    - VSCodeを再起動すると適用される

## まとめ

- ESLintは
    - JavaScriptの構文チェックをできるツール
    - エディタの拡張と連携させることでリアルタイムにルール違反のコードを検知できる
- Prettierは
    - ファイルのフォーマットを整えるツール
    - ESLintのルールに合わせたてフォーマットをかけることができる
    - エディタの拡張と連携させることでファイル保存時に自動でフォーマットをかけることができる
