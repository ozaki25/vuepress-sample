# JSX

## ゴール

- JSXとはどんなものか理解する

## JSXとは

- JSXとはReactのUIをhtmlライクに記述するためのライブラリ

## JSXの仕組み

- Reactではコンポーネントを以下のように作成する

    ```jsx
    const Hello = () => (
      <div>
        <h1 className="hello-world">Hello World</h1>;
        <p id="hello">Hello!</p>
      </div>
    )
    ```

- この一見htmlのように見えるタグがJSXである
- このコードは内部で以下のように変換され処理される

    ```js
    const Hello = () => (
      React.createElement('div', null, [
        React.createElement('h1', { className: 'hello-world' }, 'Hello World'),
        React.createElement('p', { id: 'hello' }, 'Hello!'),
      ]);
    );
    ```

- JSXを使わずに変換後の形式で開発を進めることも当然可能である
- JSXを使いhtmlライクな形式を用いることでより直感的で見慣れた形式で記述することができる

## JSXへの変数の埋め込み

- JSXタグの中にJavaScriptのコードを埋め込むことができる
- `{}`で囲われた中身はJavaScriptのコードとして処理される

    ```jsx
    const Hello = () => {
      const name = 'Ozaki';
      return <p>Hello {name}</p>;
    }
    ```

## イベントハンドラの設定

-  クリックやフォーカス等のイベントを検知し処理を行う際の書き方
-  JSXタグの属性に`onClick`や`onFocus`を設定し値に関数を渡すことで実行することができる

    ```jsx
    class SomeClass extends Component {
      onClickButton = () => {
        alert('click!');
      }
      render() {
        // クリックするとonClickButtonメソッドが実行される
        return <button onClick={this.onClickButton}>ボタン</button>
      }
    }
    ```

- onClick属性の値に直接処理を書くこともできる

    ```jsx
    class SomeClass extends Component {
      render() {
        return <button onClick={() => alert('click!')}>ボタン</button>
      }
    }
    ```

## まとめ

- JSXとはReactのコンポーネントで使用するhtmlタグのようなもののこと
- JSXタグは内部的にJavaScriptのコードに変換される
- JSXを用いることで見慣れた形式で開発することが可能となり生産性を向上させることができる

