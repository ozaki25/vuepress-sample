# import/exportについて

## ゴール

- import/exportの書き方を覚える
- デフォルトエクスポートと名前付きエクスポートの違いを理解する

## 何を実現できるのか

- 別ファイルの内容をimportして取り込める
- 自ファイルの内容をexportして公開できる
- ※JavaScriptではこれをやらないと別ファイルの内容を取り込むことができない

## import/exportの書き方

### デフォルトエクスポート

```js
// User.js
const user = 'Ozaki';

export default user;
// export default 'Ozaki'; // 変数に入れなくてもOK
```
```js
// Hello.js
import User from './User';

console.log(User); // Ozaki
```

```js
// Hello2.js
import aaa from './User';

console.log(aaa); // Ozaki
```

- `export default`で公開した値は
    - 中括弧なしでimportする
    - どんな名前でimportしてもよい

### 名前付きエクスポート

```js
// User.js
export const name1 = 'Mike';
export const name2 = 'John';
```
```js
// Hello.js
import { name1, name2 } from './User';

console.log(name1); // Mike
console.log(name2); // John
```

```js
// Hello2.js
import { name1 as bbb, name2 as ccc } from './User';

console.log(bbb); // Mike
console.log(ccc); // John
```

- `export`で公開した値は
    - 中括弧をつけてimportする
    - export時の変数名でimportする
    - `{ xxx as yyy }`とすることで任意の変数名に変えることができる

## デフォルトエクスポートと名前付きエクスポートの使い分け

- デフォルトエクスポート
    - そのファイルの中でメインとなる実装がある場合
    - 例えばreactのコンポーネント

        ```js
        class SomeComponent extends Component {
            render() {
                return <div>Hello</div>
            }
        }
        export default SomeComponent;
        ```

- 名前付きエクスポート
    - 同じ粒度の内容を複数エクスポートしたいような場合
    - 例えばUtilファイルとか

        ```js
        export const getUsers = () => fetch('http://localhost/users');
        export const getUser = (id) => fetch(`http://localhost/users/${id}`);
        export const postUser = (body) => fetch('http://localhost/users', { method: 'post', body });
        ```

## その他

- `export default`で公開できるのは１ファイル１つ
- 変数でも関数でもclassでもexportできる

## まとめ

- export/importを使うことで、別のファイルの変数やclass等を使うことができる
- exportにはデフォルトエクスポートと名前付きエクスポートがある
    - デフォルトエクスポートはそのファイルのメイントピックをエクスポートするとよい
    - 名前付きエクスポートは同じ粒度の複数の要素をエクスポートするとよい