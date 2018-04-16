# スタイルの共通化とコンポーネントの粒度

## ゴール

- コンポーネント作成のコツを覚える

## Reactコンポーネントの粒度

- Reactではコンポーネントをより小さく定義することは特に問題にはならない
    - *Don’t be afraid to split components into smaller components*
    - https://reactjs.org/docs/components-and-props.html#extracting-components
- ただ、実際に開発をしているとコンポーネントの粒度は迷いがでる部分である
- 重要なのは、**コンポーネントをいつでも小さく切り出せる状態にしておくこと**
    - いつでも別ファイルに移動したり、削除したりできるようにすることが見通しの良いコンポーネントを作るコツである
- 以下は、開発を通じて得た自分なりのプラクティス

## CSSはスタイルの内容ではなくコンポーネントの意味に着目して定義する

- ReactではCSSの共通化について従来のWebとは異なる感覚で考えた方がよい
    - Webの世界は仕様上CSSのスコープがグローバルである
    - Reactを使うとhtml等のマークアップをコンポーネント化できて、CSSのスコープもその単位に閉じる
- 以下のようなコンポーネントがあったとする

    ```jsx
    import React from 'react';
    import { Text, View } from 'react-native';

    const SomeComponent = () => (
      <View>
        <Text style={{ color: 'red', fontSize: 36 }}>赤くて大きい文字</Text>
        <Text style={{ color: 'red' }}>赤い文字</Text>
        <Text style={{ color: 'yellow', fontSize: 36 }}>黄色くて大きい文字</Text>
        <Text style={{ color: 'yellow' }}>黄色い文字</Text>
      </View>
    )
    ```

- これをWebの感覚でスタイルの切り出しをすると以下のようになるだろう

    ```jsx
    import React from 'react';
    import { Stylesheet, Text, View } from 'react-native';

    const styles = Stylesheet.create({
      big: {
        fontSize: 36,
      },
      red: {
        color: 'red',
      },
      yellow: {
        color: 'yellow',
      },
    })

    const SomeComponent = () => (
      <View>
        <Text style={[styles.red, styles.big]}>赤くて大きい文字</Text>
        <Text style={styles.red}>赤い文字</Text>
        <Text style={[styles.yellow, styles.big]}>黄色くて大きい文字</Text>
        <Text style={styles.yellow}>黄色い文字</Text>
      </View>
    )
    ```

- これで冗長さがなくなった
- しかし、以下のように定義した方がコンポーネント指向であるReactらしさが出る

    ```jsx
    import React from 'react';
    import { Stylesheet, Text, View } from 'react-native';

    const styles = Stylesheet.create({
      bigRed: {
        color: 'red',
        fontSize: 36,
      },
      bigYellow: {
        color: 'yellow',
        fontSize: 36,
      },
      red: {
        color: 'red',
      },
      yellow: {
        color: 'yellow',
      },
    })

    const SomeComponent = () => (
      <View>
        <Text style={styles.bigRed}>赤くて大きい文字</Text>
        <Text style={styles.red}>赤い文字</Text>
        <Text style={styles.bigyellow}>黄色くて大きい文字</Text>
        <Text style={styles.yellow}>黄色い文字</Text>
      </View>
    )
    ```

- とはいえこのままでは冗長である
- そのような場合はスタイルのvalueに当たる部分を定数として共通化する

    ```jsx
    import React from 'react';
    import { Stylesheet, Text, View } from 'react-native';

    // スタイルの値を共通化
    // 必要に応じて別ファイルに定義するとよい
    const red = '#f44336';
    const yellow = '#ffeb3b';
    const big = 36;

    const styles = Stylesheet.create({
      bigRed: {
        color: red,
        fontSize: big,
      },
      bigyellow: {
        color: yellow,
        fontSize: big,
      },
      red: {
        color: red,
      },
      yellow: {
        color: yellow,
      },
    })

    const SomeComponent = () => (
      <View>
        <Text style={styles.bigRed}>赤くて大きい文字</Text>
        <Text style={styles.red}>赤い文字</Text>
        <Text style={styles.bigyellow}>黄色くて大きい文字</Text>
        <Text style={styles.yellow}>黄色い文字</Text>
      </View>
    )
    ```

- このままでも良いが、スタイルの名前を**スタイルの内容**ではなく**どんなコンポーネントなのか**に焦点を当てた方がより分かりやすくなる

    ```jsx
    import React from 'react';
    import { Stylesheet, Text, View } from 'react-native';

    // スタイルの値を共通化
    // 必要に応じて別ファイルに定義するとよい
    const red = '#f44336';
    const yellow = '#ffeb3b';
    const big = 36;

    const styles = Stylesheet.create({
      errorHeading: {
        color: red,
        fontSize: big,
      },
      warnHeading: {
        color: yellow,
        fontSize: big,
      },
      error: {
        color: red,
      },
      warn: {
        color: yellow,
      },
    })

    const SomeComponent = () => (
      <View>
        <Text style={styles.errorHeading}>赤くて大きい文字</Text>
        <Text style={styles.error}>赤い文字</Text>
        <Text style={styles.warnHeading}>黄色くて大きい文字</Text>
        <Text style={styles.warn}>黄色い文字</Text>
      </View>
    )
    ```

- このようにしておくことでそれぞれのタグが疎結合になる
- 例えば`errorHeading`のタグを別コンポーネント化する時は以下の二つを別ファイルにそのまま移すだけで良い
    - 共有していないので移動や削除の影響範囲を気にしなくて良い

    ```jsx
      errorHeading: {
        color: red,
        fontSize: big,
      },

      <Text style={styles.errorHeading}>赤くて大きい文字</Text>
    ```

- 今回の例のような量ではメリットはそこまで感じられないかもしれないが、コンポーネントが大きくなってくるとこのような設計にしないと手がつけられない状態になってしまう

## 配置のスタイルはViewにつけるようにする

- 以下のように、`Text`に対して`marginTop`といった配置に関するCSSも定義できる

    ```jsx
    import React from 'react';
    import { Text, View } from 'react-native';

    const SomeComponent = () => (
      <View>
        <Text style={{ color: 'red', fornWeight: 'blod', marginTop: 10 }}>テキスト</Text>
      </View>
    )
    ```

- しかしこのままだと別コンポーネントへ切り出す際にレイアウトの調整を考えなくてはならなくなる
    - ケースにもよるが、`marginTop`のような位置の調整はコンポーネント*利用者側*の都合であるので切り出すコンポーネントに含みたくない
- なので以下のようにした方がいつでも切り出せる形となり、よりメンテナブルであると言える

    ```jsx
    import React from 'react';
    import { Text, View } from 'react-native';

    const SomeComponent = () => (
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: 'red', fornWeight: 'blod' }}>テキスト</Text>
      </View>
    )
    ```

## まとめ

- Reactコンポーネントを開発していく上で重要なのは**コンポーネントをいつでも小さく切り出せる状態にしておくこと**
- そのためには以下のような工夫が考えられる
    - CSSはスタイルの内容ではなくコンポーネントの意味に着目して定義する
    - 配置のスタイルはViewにつけるようにする
