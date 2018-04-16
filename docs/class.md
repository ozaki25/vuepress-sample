# クラス定義

## ゴール

- JavaScriptのクラスの定義のしかたを覚える

## クラスの定義

- JavaScriptではクラスの定義はclassキーワードを使う
    - JavaScriptは昔はclassがなかったが新しく導入された

    ```js
    class Person {
      // ...
    }

    const person = new Person();
    ```

## メソッドの定義

- クラスのメソッドは以下のように定義する
    - 他の言語のようなアクセス修飾子はない(策定中)

    ```js
    class Person {
      hello() {
        console.log('Hello');
      }
    }

    const person = new Person();
    person.hello(); // Hello
    ```

- constructorによって初期化することもできる
    - constructorはインスタンス生成時に一度だけ呼ばれる

    ```js
    class Person {
      constructor(name) {
        this.name = name;
      }
      hello() {
        console.log(`Hello ${this.name}`);
      }
    }

    const person = new Person('Ozaki');
    person.hello(); // Hello Ozaki
    ```

- staticをつけることで静的メソッドも定義できる

    ```js
    class Person {
      static hello() {
        console.log('Hello');
      }
    }

    Person.hello(); // Hello
    ```

## クラスの継承

- クラスの定義時にextendsをつけることで継承することができる

    ```js
    class Person {
      constructor(name) {
        this.name = name;
      }
      hello() {
        console.log(`Hello ${this.name}`);
      }
    }

    class Employee extends Person {
      constructor(name, department) {
        super(name);
        this.department = department;
      }
      helloEmployee() {
        console.log(`Hello ${this.name}(${this.department})`);
      }
    }

    const employee = new Employee('Ozaki', 'ITP');
    employee.hello(); // Hello Ozaki
    employee.helloEmployee(); // Hello Ozaki(ITP)
    ```


## まとめ

- JavaScriptのクラスはclassを使うことで定義できる
- クラスにはメソッドやstaticメソッドを定義できる
- extendsを使うことでクラスを継承することができる
