import { RakutenAffiliate, RakutenAffiliateParams } from "..";
import "./style.css";

// 動作確認用のパラメータを取得
const env = import.meta.env;

const params: RakutenAffiliateParams = {
  // アフィリエイトID
  affiliateId: env.VITE_AFFILIATE_ID,
  // アフィリエイトID(商品価格ナビリンク用)
  affiliateIdForNaviLink: env.VITE_NAVILINK_AFFILIATE_ID,
  // 計測ID
  measurementId: env.VITE_MEASUREMENT_ID,
};

// RakutenAffiliateクラスのインスタンスを生成
const client = new RakutenAffiliate(params);

// 商品ページURL
const pageURL = env.VITE_PAGE_URL;
// 商品価格ナビリンクのURL
const navLinkPageURL = env.VITE_NAVILINK_URL;
// トークン
const token = env.VITE_TOKEN;

// 商品のアフィリエイトリンクを取得
const itemURL = client.getItemURL(pageURL, token);

// 商品価格ナビリンクのアフィリエイトリンクを取得
const navLinkURL = client.getNaviLinkURL(navLinkPageURL, token);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <section>
      <h3>商品URL</h3>
      <a href="${itemURL}" target="_blank" rel="noopener noreferrer">${itemURL}</a>
    </section>

    <section>
      <h3>商品価格ナビリンク</h3>
      <a href="${navLinkURL}" target="_blank" rel="noopener noreferrer">${navLinkURL}</a>
    </section>
  </div>
`;
