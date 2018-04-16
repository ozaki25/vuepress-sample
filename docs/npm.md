# npmによるライブラリ管理

## ゴール

- フロントエンドの開発をする上で最低限必要なnpmに関する知識を得る
    - npmとはなんなのか
    - コマンドの使い方

## npm とは

- node package managerの略
- JavaScriptのライブラリを管理するツール
    - javaでいうmaven的なもの
- JavaScriptのライブラリはnpmのリポジトリで管理されている
- それらのライブラリをコマンドラインからインストールしたりバージョン情報の管理をすることができる

## npmの設定ファイル

### package.json

- npmでは`package.json`という名前の設定ファイルを使う
- このファイルに利用するライブラリとそのバージョンを記載する
- プロジェクトごとに`package.json`を作成することで、ライブラリとそのバージョンを管理できる
    - mavenでいう`pom.xml`
- 依存するライブラリの情報以外にもプロジェクトそのものの情報もいろいろと記述できる
- サンプル

    ```json
    {
      "name": "SampleApp",
      "version": "0.0.1",
      "private": true,
      "scripts": {
        "start": "node node_modules/react-native/local-cli/cli.js start",
        "test": "jest"
      },
      "dependencies": {
        "react": "16.2.0",
        "react-native": "0.52.0",
        "react-navigation": "^1.0.0-beta.27"
      },
      "devDependencies": {
        "babel-eslint": "^8.2.1",
        "babel-jest": "22.1.0",
        "babel-preset-react-native": "4.0.0",
        "eslint": "^4.16.0",
        "eslint-config-airbnb": "^16.1.0",
        "eslint-plugin-import": "^2.8.0",
        "eslint-plugin-jsx-a11y": "^6.0.3",
        "eslint-plugin-react": "^7.5.1",
        "jest": "22.1.4",
        "prettier-eslint": "^8.8.1",
        "prettier-eslint-cli": "^4.7.0",
        "react-test-renderer": "16.2.0"
      },
      "jest": {
        "preset": "react-native"
      }
    }
    ```

### package.jsonの作り方

- `npm init`というコマンドを実行すると`package.json`を作成できる
- FWを用いた開発をする場合FWのinitコマンドによって自動生成されるケースも多い
    - reactの場合以下のコマンドで`package.json`を含むプロジェクトの雛形が生成される

        ```bash
        create-react-app Sample
        ```

### dependenciesとdevDependencies

- 依存するライブラリの情報は`dependencies`もしくは`devDependencies`に記載する
- `devDependencies`は以下のような開発時のみ必要なライブラリを記載する
    - `ESLint`のような静的チェックツール
    - `babel`のようなトランスパイルに使用するツール
    - `jest`のようなテストツール
- `dependencies`は上記以外の本番アプリに必要なライブラリを記載

## よく使うコマンド

### npm install

- `package.json`に記載されたライブラリをインストールするコマンド
- インストールしたライブラリは`node_modules`ディレクトリ内に配置される
- リポジトリからプロジェクトをcloneしたらとりあえずこのコマンドを叩く

```bash
npm install
// or
npm i
```

### npm install --save xxx

- `dependencies`なライブラリを新しくインストールする時に使うコマンド
- `--save`を付けることで`package.json`の`dependencies`に自動的に追記される
- インストールしたライブラリは`node_modules`ディレクトリ内に配置される

```bash
npm install --save react-navigation
// or
npm i -S react-navigation
```

### npm install --save-dev xxx

- `devDependencies`なライブラリを新しくインストールする時に使うコマンド
- `--save-dev`を付けることで`package.json`の`devDependencies`に自動的に追記される
- インストールしたライブラリは`node_modules`ディレクトリ内に配置される

```bash
npm install --save-dev eslint
// or
npm i -D eslint
```

## その他

- npmと似たツールでyarnというものもある
- yarnもpackage.jsonを使うのでnpm利用者とyarn利用者の共存は可能
- npmと同じように`yarn install`などのコマンドがある

## まとめ

- npmはJavaScriptのライブラリを管理するツール
- プロジェクトごとに`package.json`を作り依存するライブラリとそのバージョンを記載することで管理する
- npm install
    - `package.json`記載のライブラリをインストール
- npm install -save xxx
    - `dependencies`なライブラリの追加
- npm install -save-dev xxx
    - `devDependencies`なライブラリの追加
