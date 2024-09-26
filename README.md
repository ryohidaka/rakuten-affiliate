# rakuten-affiliate

[![NPM Version](https://img.shields.io/npm/v/rakuten-affiliate?logo=npm)](https://www.npmjs.com/package/rakuten-affiliate)
![build](https://github.com/ryohidaka/rakuten-affiliate/workflows/Build/badge.svg)
[![codecov](https://codecov.io/gh/ryohidaka/rakuten-affiliate/graph/badge.svg?token=RHP9TB2F51)](https://codecov.io/gh/ryohidaka/rakuten-affiliate)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 概要

楽天アフィリエイトのリンクを生成する Node.js ライブラリ

## インストール

```shell
npm install rakuten-affiliate
```

## パラメータ

| Parameter                | Type   | Description                            | Example                               |
| ------------------------ | ------ | -------------------------------------- | ------------------------------------- |
| `affiliateId`            | string | アフィリエイト ID                      | `aaaaaaaa.bbbbbbbb.cccccccc.dddddddd` |
| `affiliateIdForNaviLink` | string | アフィリエイトID(商品価格ナビリンク用) | `aaaaaaaa.bbbbbbbb.cccccccc.dddddddd` |
| `measurementId`          | string | 計測 ID                                | `_RTLinkXXXXX`                        |

## 関数一覧

### `getItemURL(pageURL: string, token?: string): string`

商品ページの URL からアフィリエイトリンクを生成し返却する

#### パラメータ

| Parameter | Type                | Description              | Example                           |
| --------- | ------------------- | ------------------------ | --------------------------------- |
| `pageURL` | string              | 商品ページの URL         | `https://item.rakuten.co.jp/XXX/` |
| `token`   | string \| undefined | トークン文字列(任意)[^1] |                                   |

[^1]: [公式サイト](https://affiliate.rakuten.co.jp/)でリンクを生成した際に自動的に付与される`&ut=`に続く文字列。

#### レスポンス

- `string`: アフィリエイトリンク

### `getNaviLinkURL(pageURL: string, token?: string): string`

商品価格ナビリンクのURLからアフィリエイトリンクを生成し返却する

#### パラメータ

| Parameter | Type                | Description          | Example                           |
| --------- | ------------------- | -------------------- | --------------------------------- |
| `pageURL` | string              | 商品ページの URL     | `https://item.rakuten.co.jp/XXX/` |
| `token`   | string \| undefined | トークン文字列(任意) |                                   |

#### レスポンス

- `string`: アフィリエイトリンク

## 使用例

```ts
import { RakutenAffiliate } from "rakuten-affiliate";

const params = {
  // アフィリエイトID
  affiliateId: "aaaaaaaa.bbbbbbbb.cccccccc.dddddddd",
  // アフィリエイトID(商品価格ナビリンク用)
  affiliateIdForNaviLink: "aaaaaaaa.bbbbbbbb.cccccccc.dddddddd",
  // 計測ID
  measurementId: "_RTLinkXXXXX",
};

// RakutenAffiliateクラスのインスタンスを生成
const client = new RakutenAffiliate(params);

// 商品ページURL
const pageURL = "https://item.rakuten.co.jp/XXX";

// 商品のアフィリエイトリンクを取得
const itemURL = client.getItemURL(pageURL);

// 商品価格ナビリンクのURL
const navLinkPageURL = "https://product.rakuten.co.jp/product/-/XXX/";

// 商品価格ナビリンクのアフィリエイトリンクを取得
const navLinkURL = client.getNaviLinkURL(navLinkPageURL);
```

## Link

- [楽天アフィリエイト](https://affiliate.rakuten.co.jp)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
