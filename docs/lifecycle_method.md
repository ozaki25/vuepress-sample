# コンポーネントのライフサイクルメソッド

## ゴール

- ライフサイクルメソッドとはどんなものなのか理解する
- 主なライフサイクルメソッドの利用シーンを理解する

## ライフサイクルメソッドとは

- クラスで定義したコンポーネントで使える
- renderメソッドが呼ばれる前後やstateが更新されたタイミング等に内部で勝手に呼ばれるメソッド

## ライフサイクルメソッドの種類

- コンポーネントの生成時に呼ばれるタイプ
    - constructor
    - componentWillmount
    - componentDidMount

    ```js
    // 初回描画時のみ一連のメソッドが順番に呼ばれる
    constructor()
    ↓
    componentWillmount()
    ↓
    render()
    ↓
    componentDidMount()
    ```

- コンポーネントの再描画時に呼ばれるタイプ
    - componentWillReceiveProps
    - shouldComponentUpdate
    - componentWillUpdate
    - componentDidUpdate

    ```js
    // 状態が更新される度に一連のメソッドが順番に呼ばれる
    componentWillReceiveProps()
    ↓
    shouldComponentUpdate()
    ↓
    componentWillUpdate()
    ↓
    render()
    ↓
    componentDidUpdate()
    ```

- コンポーネントの破棄時に呼ばれるタイプ
    - componentWillUnmount
- 注意：React v16.4から以下の3つはdeprecatedとなりv17.0で削除される
    - componentWillmount
    - componentWillUpdate
    - componentWillReceiveProps

## 主なライフサイクルメソッド

### constructor

- コンポーネント初期化時に1度呼ばれる
- stateの初期値の設定等を行う
- 最初にsuperに対して第一引数を渡しておく必要がある

    ```js
    class Sample extends Component {
      constructor(props) {
        super(props);
        this.state = {
          name: 'Ozaki',
          age: 27,
        };
      }
    }
    ```

### componentWillmount

- 初回のrenderメソッド呼び出し直前に呼ばれる
- render前にstateを更新する必要がある場合はここで行う
- deprecatedとなったので今後は`constructor`か`componentDidMount`で行うようにする

### componentDidMount

- 初回のrenderメソッド呼び出し直後に呼ばれる
- 通信処理によるデータ取得やイベントのリスナーの設置等を行う

    ```js
    class Sample extends Component {
      constructor(props) {
        super(props);
        this.state = { users: [] };
      }
      componentDidMount() {
        const users = someGetUsersMethod();
        this.setState({ users });
      }
    }
    ```

## まとめ

- ライフサイクルメソッドとはrender前後等の特定のタイミングで自動的に呼び出されるメソッドのこと
- `constructor`では主にstateの初期値を設定する
- `componentDidMount`では通信処理によるデータ取得等を行う

