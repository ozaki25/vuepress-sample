(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{46:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"npmによるライブラリ管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npmによるライブラリ管理","aria-hidden":"true"}},[t._v("#")]),t._v(" npmによるライブラリ管理")]),s("h2",{attrs:{id:"ゴール"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ゴール","aria-hidden":"true"}},[t._v("#")]),t._v(" ゴール")]),s("ul",[s("li",[t._v("フロントエンドの開発をする上で最低限必要なnpmに関する知識を得る\n"),s("ul",[s("li",[t._v("npmとはなんなのか")]),s("li",[t._v("コマンドの使い方")])])])]),s("h2",{attrs:{id:"npm-とは"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-とは","aria-hidden":"true"}},[t._v("#")]),t._v(" npm とは")]),s("ul",[s("li",[t._v("node package managerの略")]),s("li",[t._v("JavaScriptのライブラリを管理するツール\n"),s("ul",[s("li",[t._v("javaでいうmaven的なもの")])])]),s("li",[t._v("JavaScriptのライブラリはnpmのリポジトリで管理されている")]),s("li",[t._v("それらのライブラリをコマンドラインからインストールしたりバージョン情報の管理をすることができる")])]),s("h2",{attrs:{id:"npmの設定ファイル"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npmの設定ファイル","aria-hidden":"true"}},[t._v("#")]),t._v(" npmの設定ファイル")]),s("h3",{attrs:{id:"package-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-json","aria-hidden":"true"}},[t._v("#")]),t._v(" package.json")]),s("ul",[s("li",[s("p",[t._v("npmでは"),s("code",[t._v("package.json")]),t._v("という名前の設定ファイルを使う")])]),s("li",[s("p",[t._v("このファイルに利用するライブラリとそのバージョンを記載する")])]),s("li",[s("p",[t._v("プロジェクトごとに"),s("code",[t._v("package.json")]),t._v("を作成することで、ライブラリとそのバージョンを管理できる")]),s("ul",[s("li",[t._v("mavenでいう"),s("code",[t._v("pom.xml")])])])]),s("li",[s("p",[t._v("依存するライブラリの情報以外にもプロジェクトそのものの情報もいろいろと記述できる")])]),s("li",[s("p",[t._v("サンプル")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"name"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"SampleApp"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"version"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"0.0.1"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"private"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"start"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"node node_modules/react-native/local-cli/cli.js start"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"test"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"jest"')]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"dependencies"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"react"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"16.2.0"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"react-native"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"0.52.0"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"react-navigation"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"^1.0.0-beta.27"')]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"devDependencies"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"babel-eslint"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"^8.2.1"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"babel-jest"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"22.1.0"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"babel-preset-react-native"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"4.0.0"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"eslint"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"^4.16.0"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"eslint-config-airbnb"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"^16.1.0"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"eslint-plugin-import"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"^2.8.0"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"eslint-plugin-jsx-a11y"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"^6.0.3"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"eslint-plugin-react"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"^7.5.1"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"jest"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"22.1.4"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"prettier-eslint"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"^8.8.1"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"prettier-eslint-cli"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"^4.7.0"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"react-test-renderer"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"16.2.0"')]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"jest"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"preset"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"react-native"')]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),s("h3",{attrs:{id:"package-jsonの作り方"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-jsonの作り方","aria-hidden":"true"}},[t._v("#")]),t._v(" package.jsonの作り方")]),s("ul",[s("li",[s("code",[t._v("npm init")]),t._v("というコマンドを実行すると"),s("code",[t._v("package.json")]),t._v("を作成できる")]),s("li",[t._v("FWを用いた開発をする場合FWのinitコマンドによって自動生成されるケースも多い\n"),s("ul",[s("li",[s("p",[t._v("reactの場合以下のコマンドで"),s("code",[t._v("package.json")]),t._v("を含むプロジェクトの雛形が生成される")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("create-react-app Sample\n")])])])])])]),s("h3",{attrs:{id:"dependenciesとdevdependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependenciesとdevdependencies","aria-hidden":"true"}},[t._v("#")]),t._v(" dependenciesとdevDependencies")]),s("ul",[s("li",[t._v("依存するライブラリの情報は"),s("code",[t._v("dependencies")]),t._v("もしくは"),s("code",[t._v("devDependencies")]),t._v("に記載する")]),s("li",[s("code",[t._v("devDependencies")]),t._v("は以下のような開発時のみ必要なライブラリを記載する\n"),s("ul",[s("li",[s("code",[t._v("ESLint")]),t._v("のような静的チェックツール")]),s("li",[s("code",[t._v("babel")]),t._v("のようなトランスパイルに使用するツール")]),s("li",[s("code",[t._v("jest")]),t._v("のようなテストツール")])])]),s("li",[s("code",[t._v("dependencies")]),t._v("は上記以外の本番アプリに必要なライブラリを記載")])]),s("h2",{attrs:{id:"よく使うコマンド"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#よく使うコマンド","aria-hidden":"true"}},[t._v("#")]),t._v(" よく使うコマンド")]),s("h3",{attrs:{id:"npm-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-install","aria-hidden":"true"}},[t._v("#")]),t._v(" npm install")]),s("ul",[s("li",[s("code",[t._v("package.json")]),t._v("に記載されたライブラリをインストールするコマンド")]),s("li",[t._v("インストールしたライブラリは"),s("code",[t._v("node_modules")]),t._v("ディレクトリ内に配置される")]),s("li",[t._v("リポジトリからプロジェクトをcloneしたらとりあえずこのコマンドを叩く")])]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v("\n// or\n"),s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" i\n")])]),s("h3",{attrs:{id:"npm-install-save-xxx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-install-save-xxx","aria-hidden":"true"}},[t._v("#")]),t._v(" npm install --save xxx")]),s("ul",[s("li",[s("code",[t._v("dependencies")]),t._v("なライブラリを新しくインストールする時に使うコマンド")]),s("li",[s("code",[t._v("--save")]),t._v("を付けることで"),s("code",[t._v("package.json")]),t._v("の"),s("code",[t._v("dependencies")]),t._v("に自動的に追記される")]),s("li",[t._v("インストールしたライブラリは"),s("code",[t._v("node_modules")]),t._v("ディレクトリ内に配置される")])]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" --save react-navigation\n// or\n"),s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -S react-navigation\n")])]),s("h3",{attrs:{id:"npm-install-save-dev-xxx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-install-save-dev-xxx","aria-hidden":"true"}},[t._v("#")]),t._v(" npm install --save-dev xxx")]),s("ul",[s("li",[s("code",[t._v("devDependencies")]),t._v("なライブラリを新しくインストールする時に使うコマンド")]),s("li",[s("code",[t._v("--save-dev")]),t._v("を付けることで"),s("code",[t._v("package.json")]),t._v("の"),s("code",[t._v("devDependencies")]),t._v("に自動的に追記される")]),s("li",[t._v("インストールしたライブラリは"),s("code",[t._v("node_modules")]),t._v("ディレクトリ内に配置される")])]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev eslint\n// or\n"),s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D eslint\n")])]),s("h2",{attrs:{id:"その他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#その他","aria-hidden":"true"}},[t._v("#")]),t._v(" その他")]),s("ul",[s("li",[t._v("npmと似たツールでyarnというものもある")]),s("li",[t._v("yarnもpackage.jsonを使うのでnpm利用者とyarn利用者の共存は可能")]),s("li",[t._v("npmと同じように"),s("code",[t._v("yarn install")]),t._v("などのコマンドがある")])]),s("h2",{attrs:{id:"まとめ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#まとめ","aria-hidden":"true"}},[t._v("#")]),t._v(" まとめ")]),s("ul",[s("li",[t._v("npmはJavaScriptのライブラリを管理するツール")]),s("li",[t._v("プロジェクトごとに"),s("code",[t._v("package.json")]),t._v("を作り依存するライブラリとそのバージョンを記載することで管理する")]),s("li",[t._v("npm install\n"),s("ul",[s("li",[s("code",[t._v("package.json")]),t._v("記載のライブラリをインストール")])])]),s("li",[t._v("npm install -save xxx\n"),s("ul",[s("li",[s("code",[t._v("dependencies")]),t._v("なライブラリの追加")])])]),s("li",[t._v("npm install -save-dev xxx\n"),s("ul",[s("li",[s("code",[t._v("devDependencies")]),t._v("なライブラリの追加")])])])])])}],!1,null,null,null);a.default=e.exports}}]);