(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{55:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"構文チェックとフォーマッター"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#構文チェックとフォーマッター","aria-hidden":"true"}},[t._v("#")]),t._v(" 構文チェックとフォーマッター")]),s("h2",{attrs:{id:"ゴール"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ゴール","aria-hidden":"true"}},[t._v("#")]),t._v(" ゴール")]),s("ul",[s("li",[t._v("ESLintの使い方と役割を理解する")]),s("li",[t._v("Prettierの使い方と役割を理解する")])]),s("h2",{attrs:{id:"構文チェック"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#構文チェック","aria-hidden":"true"}},[t._v("#")]),t._v(" 構文チェック")]),s("ul",[s("li",[t._v("JavaScriptの構文チェックツールは"),s("strong",[t._v("ESLint")]),t._v("がメジャーなライブラリである")])]),s("h3",{attrs:{id:"eslintでできること"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eslintでできること","aria-hidden":"true"}},[t._v("#")]),t._v(" ESLintでできること")]),s("ul",[s("li",[t._v("セミコロンの有無のような簡易なチェックから、メソッドの定義のしかたまで幅広い構文チェックができる")]),s("li",[t._v("auto-fixの機能もあるが、基本的にはルール違反を検知するためのツールである")])]),s("h3",{attrs:{id:"eslintの導入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eslintの導入","aria-hidden":"true"}},[t._v("#")]),t._v(" ESLintの導入")]),s("h4",{attrs:{id:"設定ファイル"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#設定ファイル","aria-hidden":"true"}},[t._v("#")]),t._v(" 設定ファイル")]),s("ul",[s("li",[s("p",[t._v("プロジェクト直下に"),s("code",[t._v(".eslintrc")]),t._v("という名前で作成する")]),s("ul",[s("li",[t._v("js形式("),s("code",[t._v(".eslintrc.js")]),t._v(")やjson形式("),s("code",[t._v(".eslintrc.json")]),t._v(")、yaml形式("),s("code",[t._v(".eslintrc.yaml")]),t._v(")で作ることもできる")])])]),s("li",[s("p",[t._v("ルールの定義は既存のものをベースに拡張していくと効率的")]),s("ul",[s("li",[t._v("Reactの場合はaibnbの設定がよく使われる")])])]),s("li",[s("p",[t._v("Reactの場合の"),s("code",[t._v(".eslintrc")]),t._v("の例")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  // airbnbの設定をベースにする\n  "),s("span",{attrs:{class:"token property"}},[t._v('"extends"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"airbnb"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"parser"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"babel-eslint"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  // 上書きしたいルールを記載\n  "),s("span",{attrs:{class:"token property"}},[t._v('"rules"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"max-len"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v('"code"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"react/jsx-filename-extension"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v('"extensions"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v('".js"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('".jsx"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"react/prop-types"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v('"ignore"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v('"navigation"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"env"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"node"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"jest/globals"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"plugins"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v('"jest"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),s("h4",{attrs:{id:"ライブラリの追加"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ライブラリの追加","aria-hidden":"true"}},[t._v("#")]),t._v(" ライブラリの追加")]),s("ul",[s("li",[s("p",[t._v("必要なライブラリをnpmでインストールする")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" i --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-import eslint-plugin-jest\n")])])])]),s("h3",{attrs:{id:"eslintとvscodeの連携"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eslintとvscodeの連携","aria-hidden":"true"}},[t._v("#")]),t._v(" ESLintとVSCodeの連携")]),s("ul",[s("li",[t._v("メジャーなエディタの多くはESLintの拡張が用意されており、リアルタイムで構文エラーを確認することができる")]),s("li",[t._v("VSCodeの場合\n"),s("ul",[s("li",[t._v("「拡張機能」から"),s("code",[t._v("ESLint")]),t._v("を検索しインストール")]),s("li",[t._v("VSCodeを再起動する")]),s("li",[t._v("ESLintの設定がされたプロジェクトで自動的に適用されるようになる")])])])]),s("h2",{attrs:{id:"フォーマッター"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#フォーマッター","aria-hidden":"true"}},[t._v("#")]),t._v(" フォーマッター")]),s("ul",[s("li",[t._v("JavaScriptのフォーマッターは"),s("strong",[t._v("Prettier")]),t._v("がメジャーなライブラリである")])]),s("h3",{attrs:{id:"prettierでできること"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prettierでできること","aria-hidden":"true"}},[t._v("#")]),t._v(" Prettierでできること")]),s("ul",[s("li",[t._v("ルールに応じて半角スペースの有無や改行のタイミングを自動で調整してくれる\n"),s("ul",[s("li",[t._v("インデントの調整も自動で行ってくれてとても便利")])])]),s("li",[t._v("ESLintのルールに対応してフォーマッターをかけることもできる")])]),s("h3",{attrs:{id:"prettierの導入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prettierの導入","aria-hidden":"true"}},[t._v("#")]),t._v(" Prettierの導入")]),s("h4",{attrs:{id:"設定ファイル-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#設定ファイル-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 設定ファイル")]),s("ul",[s("li",[t._v("プロジェクト直下に"),s("code",[t._v(".prettierrc")]),t._v("という名前で作成する\n"),s("ul",[s("li",[t._v("とくにこだわりがなければ設定ファイルなしで問題ない")])])])]),s("h4",{attrs:{id:"ライブラリの追加-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ライブラリの追加-2","aria-hidden":"true"}},[t._v("#")]),t._v(" ライブラリの追加")]),s("ul",[s("li",[s("p",[t._v("必要なライブラリをインストールする")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" i --save-dev prettier-eslint prettier-eslint-cli\n")])])])]),s("h3",{attrs:{id:"prettierとvscodeの連携"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prettierとvscodeの連携","aria-hidden":"true"}},[t._v("#")]),t._v(" PrettierとVSCodeの連携")]),s("ul",[s("li",[t._v("メジャーなエディタの多くはPrettierの拡張が用意されており、ファイル保存と同時にフォーマッターを適用することができる")]),s("li",[t._v("VSCodeの場合\n"),s("ul",[s("li",[s("p",[t._v("「拡張機能」から"),s("code",[t._v("Prettier - Code formatter")]),t._v("を検索しインストール")])]),s("li",[s("p",[s("code",[t._v("user settings")]),t._v("で以下の設定を追加")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("// ファイル保存時にフォーマッターを実行\n"),s("span",{attrs:{class:"token property"}},[t._v('"editor.formatOnSave"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n// デフォルトのフォーマッターを無効化\n"),s("span",{attrs:{class:"token property"}},[t._v('"javascript.format.enable"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n// ESLintのルールと連携させる\n"),s("span",{attrs:{class:"token property"}},[t._v('"prettier.eslintIntegration"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("li",[s("p",[t._v("VSCodeを再起動すると適用される")])])])])]),s("h2",{attrs:{id:"まとめ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#まとめ","aria-hidden":"true"}},[t._v("#")]),t._v(" まとめ")]),s("ul",[s("li",[t._v("ESLintは\n"),s("ul",[s("li",[t._v("JavaScriptの構文チェックをできるツール")]),s("li",[t._v("エディタの拡張と連携させることでリアルタイムにルール違反のコードを検知できる")])])]),s("li",[t._v("Prettierは\n"),s("ul",[s("li",[t._v("ファイルのフォーマットを整えるツール")]),s("li",[t._v("ESLintのルールに合わせたてフォーマットをかけることができる")]),s("li",[t._v("エディタの拡張と連携させることでファイル保存時に自動でフォーマットをかけることができる")])])])])])}],!1,null,null,null);a.default=r.exports}}]);