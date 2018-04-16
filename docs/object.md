# オブジェクトの扱い方

## ゴール

- オブジェクトを扱う際の省略記法を覚える

## オブジェクトとは

- ざっくり言ってしまうとkey/value形式の配列
- valueにはどんな型でも入れられる

    ```js
    // 空っぽのオブジェクト
    const empty = {};
    
    // stringとint混在でも問題ない
    const user = {
      name: 'ozaki',
      age: 27,
    };
    
    // 関数も入れられる
    const greet = {
      sayHello: () => alert('Hello!'),
    }
    ```

## オブジェクトから値を取り出す

- オブジェクトから特定のkeyに対応するvalueを取り出す方法
- 取り出した値を、key名と同じ名前の変数に代入する場合は省略した書き方を使える

### サンプル

- 以下の3つは同じことをしている

    ```js
    // スタンダードな書き方
    const user = { name: 'ozaki', age: 27 };
    const name = user.name;
    const age = user.age;
    console.log(name); // ozaki
    console.log(age); // 27
    ```

    ```js
    // スタンダードな書き方2
    const user = { name: 'ozaki', age: 27 };
    const name = user['name'];
    const age = user['age'];
    console.log(name); // ozaki
    console.log(age); // 27
    ```

    ```js
    // 省略系を使った書き方
    const user = { name: 'ozaki', age: 27 };
    const { name, age } = user;
    console.log(name); // ozaki
    console.log(age); // 27
    ```

### サンプルの解説

- 1つ目と2つ目は基本の書き方
- 注目するのは3つ目の例のここ↓

    ```js
    const { name, age } = user;
    ```

- `{}`で囲った変数名には、変数名と一致するkeyに対応するvalueが代入される
    - なので`name`には`user.name`が`age`には`user.age`の値が入る
- 順序は関係なく名前で紐付いている
    - これ↓でも一緒の動き

    ```js
    const { age, name } = user;
    ```

## オブジェクトに値を入れる

- オブジェクトにkey/valueのペアを追加する書き方
- 変数名と同じkey名に値を代入する場合は省略した書き方を使える

### サンプル

- 以下の4つは同じことをしている

    ```js
    // スタンダードな書き方
    const user = {};
    user.name = 'ozaki';
    user.age = 27;
    console.log(user); // {name: "ozaki", age: 27}
    ```

    ```js
    // スタンダードな書き方2
    const user = {};
    user['name'] = 'ozaki';
    user['age'] = 27;
    console.log(user); // {name: "ozaki", age: 27}
    ```

    ```js
    // スタンダードな書き方3
    const user = { name: "ozaki", age: 27 };
    console.log(user); // {name: "ozaki", age: 27}
    ```

    ```js
    // 省略系を使った書き方
    const name = 'ozaki';
    const age = 27;
    const user = { name, age };
    console.log(user); // {name: "ozaki", age: 27}
    ```

### サンプルの解説

- 1〜3つ目は基本の書き方
- 注目するのは4つ目の例のここ↓

    ```js
    const user = { name, age };
    ```

- これは↓と同じことを省略して書いている

    ```js
    const user = { name: name, age: age };
    ```

- key名と同じ名前の変数を代入する場合はは省略して書くことができる

## 関数の引数での応用

- 上記の省略記法の活用例
- 関数の引数に対してこの考え方を活用できる
    - Reactでは頻発する書き方なので少なくとも読めるようにしておくと良い

### サンプル

- 以下の2つは同じことをしている

    ```js
    // 省略記法を使わない例
    const user = { name: 'ozaki', age: 27 };
    
    const showUser = (user) => {
      console.log(user.name);
      console.log(user.age)
    }
    
    showUser(user);
    // ozaki
    // 27
    ```

    ```js
    // 省略記法を使った例
    const user = { name: 'ozaki', age: 27 };
    
    const showUser = ({ name, age }) => {
      console.log(name);
      console.log(age)
    }
    
    showUser(user);
    // ozaki
    // 27
    ```

### サンプルの解説

- 関数の引数の受け取り方を`{ name, age }`のようにすることでオブジェクトのvalueを直接受け取ることができる
- `name`には`user.name`が`age`には`user.age`の値が入る

## まとめ

- オブジェクトのkey名と変数名が一致する場合は省略記法を使える
- モダンな開発ではこれらの省略記法は頻発しているので慣れておく必要がある
