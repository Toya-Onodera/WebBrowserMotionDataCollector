# WebBrowserMotionDataCollector
ブラウザで取得できるセンサ値を Firebase に格納するアプリケーション

### 動作までの流れ
※ `yarn` インストール済みで進めます    
1. `echo "FAST_REFRESH=false" > .env` (ホームディレクトリ)
2. yarn
3. yarn prepare
4. yarn start

### 主要なコマンド
| できること              | コマンド             |
|:-------------------|:-----------------|
| アプリケーションの起動        | `yarn start`     |
| アプリケーションビルド        | `yarn build`     |
| Prettier の実行       | `yarn format`    |
| ESLint の実行         | `yarn lint`      |
| ESLint の実行(fix)    | `yarn lint:fix`  |
| StyleLint の実行      | `yarn style`     |
| StyleLint の実行(fix) | `yarn style:fix` |
| テストの実行(Cypress)    | `yarn cy:run`    |
