import { RakutenAffiliate, RakutenAffiliateParams } from "..";
import "./style.css";

// 動作確認用のパラメータを取得
const env = import.meta.env;

const params: RakutenAffiliateParams = {
  // アフィリエイトID
  affiliateId: env.VITE_AFFILIATE_ID,
  // 計測ID
  measurementId: env.VITE_MEASUREMENT_ID,
};

// RakutenAffiliateクラスのインスタンスを生成
const client = new RakutenAffiliate(params);
console.log(client);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div></div>
`;
