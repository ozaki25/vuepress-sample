module.exports = {
  title: "React & React Native",
  serviceWorker: true,
  base: "/vuepress-sample/",
  head: [["link", { rel: "manifest", href: "/manifest.json" }]],
  themeConfig: {
    sidebar: [
      {
        title: "React/ReactNative概要",
        children: [
          "/react_native",
          "/jsx",
          "/create_component",
          "/lifecycle_method",
          "/state"
        ]
      },
      {
        title: "開発の周辺ツール",
        children: ["/npm", "/jest", "/type_check", "/eslint_prettier"]
      },
      {
        title: "ReactNative固有の機能",
        children: [
          "/react_native_component",
          "/stylesheet",
          "/asyncstorage",
          "/linking",
          "/platform",
          "/component_practice"
        ]
      },
      {
        title: "モダンなJavaScriptの記法",
        children: [
          "/variable",
          "/function",
          "/class",
          "/import_export",
          "/object",
          "/async_await",
          "/fetch_api"
        ]
      }
    ]
  }
};
