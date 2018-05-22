(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{67:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"別アプリへの遷移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#別アプリへの遷移","aria-hidden":"true"}},[t._v("#")]),t._v(" 別アプリへの遷移")]),s("h2",{attrs:{id:"ゴール"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ゴール","aria-hidden":"true"}},[t._v("#")]),t._v(" ゴール")]),s("ul",[s("li",[t._v("Linkingの使い方を覚える")])]),s("h2",{attrs:{id:"linkingで何ができるか"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linkingで何ができるか","aria-hidden":"true"}},[t._v("#")]),t._v(" Linkingで何ができるか")]),s("ul",[s("li",[t._v("ReactNativeのアプリから別アプリを呼び出すことができる\n"),s("ul",[s("li",[t._v("ブラウザ")]),s("li",[t._v("電話")]),s("li",[t._v("等々")])])])]),s("h2",{attrs:{id:"linlingの使い方"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linlingの使い方","aria-hidden":"true"}},[t._v("#")]),t._v(" Linlingの使い方")]),s("h3",{attrs:{id:"ブラウザでwebページを表示する場合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ブラウザでwebページを表示する場合","aria-hidden":"true"}},[t._v("#")]),t._v(" ブラウザでWebページを表示する場合")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'http://google.com'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nLinking"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("openURL")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// ブラウザが開いて遷移する")]),t._v("\n")])]),s("h3",{attrs:{id:"電話アプリを開く場合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#電話アプリを開く場合","aria-hidden":"true"}},[t._v("#")]),t._v(" 電話アプリを開く場合")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'tel:08012345678'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nLinking"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("openURL")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 電話アプリが開く")]),t._v("\n")])]),s("h3",{attrs:{id:"lineを開く場合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lineを開く場合","aria-hidden":"true"}},[t._v("#")]),t._v(" LINEを開く場合")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'line://'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nLinking"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("openURL")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// LINEが開く")]),t._v("\n")])]),s("h3",{attrs:{id:"対象のアプリがインストールされていない場合のハンドリング"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#対象のアプリがインストールされていない場合のハンドリング","aria-hidden":"true"}},[t._v("#")]),t._v(" 対象のアプリがインストールされていない場合のハンドリング")]),s("ul",[s("li",[s("p",[s("code",[t._v("openURL")]),t._v("の失敗を検知する")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'line://'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nLinking"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("openURL")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("catch")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("alert")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'LINEを開けませんでした'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("li",[s("p",[s("code",[t._v("openURL")]),t._v("する前に開けるかどうか確認する")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'line://'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" canOpenUrl "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Linking"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("canOpenURL")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("canOpenUrl"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Linking"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("openURL")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("alert")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'LINEを開けませんでした'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),s("h2",{attrs:{id:"まとめ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#まとめ","aria-hidden":"true"}},[t._v("#")]),t._v(" まとめ")]),s("ul",[s("li",[t._v("Linkingを使うことでReactNativeのアプリから別アプリに遷移することができる")])])])}],!1,null,null,null);a.default=r.exports}}]);