# ReactNativeとReact

## ゴール

- ReactNativeの特徴を理解する
- Reactの特徴を理解する

## ReactNativeとは

- Reactの思想でモバイルブアプリを開発できるライブラリ
- ios/androidに対応している

### 標準技術によるios/android開発

- iosアプリとandroidアプリは使用する言語もルールも全く異なる
    - iosはSwift/Objective-C、androidはJava/kotlin
- なので標準技術による開発だとそれぞれのコードベースを持ってそれぞれのチームで開発を行う必要がある

### クロスプラットフォーム開発

- ReactNativeはJavaScriptでios/androidアプリを開発できる
- ReactNativeが、JavaScriptとObjective-C(ios)/JavaScriptとJava(android)をブリッジする機能を提供している
- なのでJavaScriptを書くだけでそれぞれのOSで動作可能なコードを生成できる

## Reactとは

- コンポーネント指向のJavaScriptのViewライブラリ
- 開発元はfacebook社

## Reactの特徴

- Declarative
- Component-Based
- One Learn Write Anywhere

### Declarative

- Reactは、jQueryのように命令的ではなく、宣言的にViewを記述する
- jQueryは命令的に更新したいDOMを特定し変更したい内容を適用していた
- Reactはあるべき姿を宣言的に記述し、状態が更新されるとそれに合わせて全体を再描画する
    - Reactは仮想DOMを採用しており、描画コストを最適化している
    - 仮想DOMとは描画されているDOMの構造を内部に保持しておき、DOM更新の際にその差分をチェックし差分のみ再描画するという仕組み

- jQueryの場合

    ```js
    // html
    <div>
      <p id="clickMe">Click me</p>
    </div>
    
    // js
    // 命令的に記述する。
    $('#clickMe').on('click', function() {
      $(this).text('Clicked!');
    });
    ```

- Reactの場合

    ```jsx
    class ClickMe extends Component {
      constructor(props) {
        super(props);
        this.state = { message: 'Click me' };
      }
      onClick = () => this.setState({ message: 'Clicked!' })
      render() {
        // 宣言的に記述する。stateが更新されると自動的に再描画する。
        return (
          <div>
            <p onClick={this.onClick}>{this.state.message}</p>
          </div>
        )
      }
    }
    ReactDOM.render(<ClickMe />, document.body);
    ```

### Component-Based

- Reactはコンポーネント指向のライブラリである
- カプセル化されたコンポーネントを作成し、それを組み合わせてることでアプリケーションを構築する

    ```jsx
    // HelloWorldコンポーネント
    const HelloWorld = () => (
      <h1>HelloWorld</h1>
    )

    // Greetコンポーネント
    const Greet = ({ name }) => (
      <p>Hello {name}</p>
    )

    // 上記2つのコンポーネントを使用している
    const App = () => (
      <div>
        <HelloWorld />
        <Greet name="ozaki" />
      </div>
    )

    ReactDOM.render(<App />, document.getElementById('root'));
    ```

### One Learn Write Anywhere

- どんなプラットフォームでも同じ思想で開発できるというのがReactの考え方
    - Webでhtmlタグを使っている部分をプラットフォームに応じたタグに変えるだけで開発できる
    - 一度書き方を覚えれば、iosでもandroidでもwebでもデスクトップアプリでも全て同じ考え方で開発できる

## まとめ

- ReactNativeとは
    - Reactの思想でモバイルアプリを開発できるライブラリ
    - ios/androidアプリをほぼワンソースで作ることができる
- Reactとは
    - コンポーネント指向のJavaScriptのViewライブラリ
    - 宣言的にViewを記述することで見通しのよいコードを書くことができる
    - Webのみでなくモバイルやデスクトップアプリも同じ思想で作ることができる
