# ReactNativeのテスト

## ゴール

- Jestを使ったテストのやり方を理解する

## Jestとは

- ReactNativeにデフォルトで同梱されているテストフレームワーク
- https://facebook.github.io/jest/
- Reactに限らず一般的なJavaScriptのテストフレームワークとして使える

## Jestの特徴

- JUnitのような単体テストに加えて、コンポーネントの描画内容をテストするスナップショットテストもできる
- 関数をモック化する機能が優秀なので単体テストがやりやすい

## 単体テスト

- ロジックの単体テストができる
- https://facebook.github.io/jest/docs/en/using-matchers.html

    ```js
    test('two plus two is four', () => {
      expect(2 + 2).toBe(4);
    });
    ```

- いろいろなmatcherが用意されているのでここから適当なものを見つけてテストを書いていく
- https://facebook.github.io/jest/docs/en/expect.html

## スナップショットテスト

- コンポーネントの状態(画面に表示される文字とか色とか)のスナップショットを保存し前回の結果と比較することでテストする
- https://facebook.github.io/jest/docs/en/snapshot-testing.html

    ```jsx
    import 'react-native';
    import React from 'react';
    import SampleScreen from '../../../src/containers/SampleScreen';
    import renderer from 'react-test-renderer';

    it('renders correctly', () => {
      // 描画内容をjson化
      const tree = renderer.create(<SampleScreen />).toJSON();
      // 保存してあるスナップショットと比較
      expect(tree).toMatchSnapshot();
    });
    ```

### 初回実行の場合

- テストを実行すると`__snapshots__`ディレクトリが作られその中にスナップショットが保存される

### 二回目以降の場合

- 保存してあるスナップショットと差分がないか比較される
- 差分がある場合はそれが意図したものか内容を確認する
- 意図した変更であるなら`npm test -- -u`を実行することでスナップショットを更新できる

## テストの進め方

### テストファイルの作成

- Jestでは`__tests__`ディレクトリ内にあるファイル、`xxx.test.js`の形式のファイルが実行対象となる
- `__tests__`内にsrcディレクトリと同じ構造でファイルを配置すると見やすい
- テスト対象のファイルとテストファイルを一対一にしておくと分かりやすい

    ```bash
    myapp
    |--__tests__
    |  |--src
    |  |  |--utils
    |  |  |  |--DeepSleepTimer.test.js
    |  |  |  |--Timer.test.js
    |--src
    |  |--utils
    |  |  |--DeepSleepTimer.js
    |  |  |--Timer.js
    ```

### テストの実行

- `npm test`でテストが実行される
- `npm test -- --verbose`とすると結果がより詳細に表示される
- 特定のファイルだけテストしたいときは`npm test __tests__/src/utils/Timer.test.js`のようにファイルを指定する

### テストのカバレッジを取得する

- `npm test -- --coverage`で取得できる
- 100%じゃない場合カバーされていないのがどこか教えてくれる

    ```bash
    --------------------|----------|----------|----------|----------|----------------|
    File                |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
    --------------------|----------|----------|----------|----------|----------------|
    All files           |    90.63 |    81.82 |    93.75 |       90 |                |
    jest                |      100 |      100 |      100 |      100 |                |
      setup.js          |      100 |      100 |      100 |      100 |                |
    src/utils           |       90 |    81.82 |    93.33 |    89.66 |                |
      DeepSleepTimer.js |       85 |    66.67 |       90 |    84.21 |       34,35,37 |
      Timer.js          |      100 |      100 |      100 |      100 |                |
    --------------------|----------|----------|----------|----------|----------------|
    ```

## テストファイルの書き方

- `describe`を使ってコンテキストを分けると結果が見やすくなるので活用するとよい
- サンプル

    ```js
    describe('Timer', () => {
      describe('#start', () => {
        describe('引数がない場合', () => {
          test('onTimeoutが一回呼ばれること', () => {
            // ...
          });
        });
        describe('引数がある場合', () => {
          test('onTimeoutが一回呼ばれること', () => {
            // ...
          });
          test('onStartが一回呼ばれること', () => {
            // ...
          });
        });
      });
      describe('#clear', () => {
        describe('引数がない場合', () => {
          test('onTimeoutが呼ばれないこと', () => {
            // ...
          });
        });
        describe('引数がある場合', () => {
          test('onTimeoutが呼ばれないこと', () => {
            // ...
          });
          test('onClearが一回呼ばれること', () => {
          // ...
          });
        });
      });
      describe('#reset', () => {
        describe('引数がない場合', () => {
          test('onTimeoutが一回呼ばれること', () => {
            // ...
          });
        });
        describe('引数がある場合', () => {
          test('onTimeoutが一回呼ばれること', () => {
            // ...
          });
          test('onRestartが一回呼ばれること', () => {
            // ...
          });
        });
      });
    });
    ```

- 実行結果

    ```bash
    PASS  __tests__/src/utils/Timer.test.js
      Timer
        #start
          引数がない場合
            ✓ onTimeoutが一回呼ばれること (1ms)
          引数がある場合
            ✓ onTimeoutが一回呼ばれること (1ms)
            ✓ onStartが一回呼ばれること (1ms)
        #clear
          引数がない場合
            ✓ onTimeoutが呼ばれないこと (1ms)
          引数がある場合
            ✓ onTimeoutが呼ばれないこと
            ✓ onClearが一回呼ばれること (1ms)
        #reset
          引数がない場合
            ✓ onTimeoutが一回呼ばれること (1ms)
          引数がある場合
            ✓ onTimeoutが一回呼ばれること (1ms)
            ✓ onRestartが一回呼ばれること (1ms)
    ```

- `skip`や`only`が用意されてるので覚えておくと便利

    ```js
    // skipがついているのでこのテストは実行されない
    test.skip('two plus two is four', () => {
      expect(2 + 2).toBe(4);
    });
    ```

    ```js
    // onlyがついているのでこのテストだけが実行される(このファイル内の他のテストが全てスキップされる)
    test.only('two plus two is four', () => {
      expect(2 + 2).toBe(4);
    });
    ```

## まとめ

- Jestを使うことでJavaScriptのテストができる
- Jestは単体テストに加えてスナップショットテストもできる
