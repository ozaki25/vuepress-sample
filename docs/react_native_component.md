# ReactNativeのタグ

## ゴール

- ReactNativeの基本的なコンポーネントタグの概要を理解する

## よく使うタグ

### View

- 汎用的なコンポーネント
- htmlで言うところの`div`のようなもの

    ```jsx
    <View>
      {// ...}
    </View>
    ```

### Text

- 文字列を表示する際に使用するために使うコンポーネント
- htmlで言うところの`p`のようなもの

    ```jsx
    <Text>文字列</Text>
    ```

- 文字列を表示する場合は必ず`Text`を使わなければならない

    ```jsx
    // これはエラーになる
    <View>文字列</View>
    ```

- `Text`を複数並べると改行して表示される

    ```jsx
    <View>
      <Text>一行目の文字列</Text>
      <Text>二行目の文字列</Text>
    </View>
    ```

- `Text`をネストした場合は改行されない
    - 一行の文章で部分的にスタイルを当てたい場合に利用する書き方

    ```jsx
    <Text>
      このように書くと
      <Text style={{ fontWeight: 'bold' }}>ここは太字で</Text>
      <Text style={{ color: 'red' }}>ここは赤字で</Text>
      一行で表示されます
    </Text>
    ```

### Touchable

- 要素をタップした際のハンドラを設定できるコンポーネント
- `View`にタップ時のハンドリング機能を追加したようなもの
- Touchableなコンポーネントは以下の4種類用意されている
    - `TouchableOpacity`
        - タップ中に要素の透過度が変化し薄くなる
    - `TouchableHighlight`
        - タップ中に要素の背景色を変化させる
    - `TouchableNativeFeedback`
        - タップ時にAndroid端末デフォルトのようなエフェクトを起こす
    - `TouchableWithoutFeedback`
        - タップ時に見た目を変化させない
- `onPress`属性にメソッドを渡すことでタップ時の処理を設定できる

    ```jsx
    <TouchableOpacity onPress={smoeMethod}>
      <Text>Touch Here</Text>
    </TouchableOpacity>
    ```

### FlatList

- 繰り返し項目をリスト表示するためのコンポーネント
- 以下の例では`Text`が三行表示される

    ```jsx
    const data = [
      {id: 1, name: 'Ozaki'},
      {id: 2, name: 'Fukushima'},
      {id: 3, name: 'Imaki'},
    ]
    const ListItem = ({ item }) => (
      <Text key={item.id}>{item.name}</Text>
    )
    const ListGroup = () => (
      <FlatList data={data} renderItem={ListItem} />
    )
    ```

- `data`属性に渡した配列の要素数分だけ`renderItem`属性の内容がレンダリングされる
- `renderItem`属性に渡すコンポーネントには一意になる`key`属性が必要
    - 仮想DOMによるdiffチェックを最適化するため

### ScrollView

- 表示する内容が画面サイズを超えた場合にスクロール可能になる
    - `View`だとはみ出た部分は見えなくなってしまう

    ```jsx
    <ScrollView>
      {// ...}
    </ScrollView>
    ```

### TextInput

- 入力域をつくるコンポーネント
- `onChangeText`などでイベント検知することで入力内容を取得できる

    ```jsx
    <TextInput onChangeText={(text) => alert(text)} />
    ```

### Image

- 画像を表示するためのコンポーネント
- `source`属性に画像のURL/pathを指定する
- プロジェクト内のファイルを表示する場合

    ```jsx
    import sample from './sample.png';
    // ...
    <Image source={sample} />
    ```

- 外部のファイルを表示する場合
    - この形式の場合は`height`と`width`を指定しないと画像が表示されないので注意

    ```jsx
    <Image
      style={{ height: 50, width: 50 }}
      source={{ uri: 'https://facebook.github.io/react-native/img/header_logo.png' }}
     />
    ```

## まとめ

- ReactNativeで用意するコンポーネントは多くあるが、頻繁に使うタグは限られてくる
- よりこった使い方をしたくなった場合は公式サイトの説明を読みながら試行錯誤するとよい

