/**
 * 楽天アフィリエイトの初期化に使用するパラメータ
 *
 * @typedef {Object} RakutenAffiliateParams
 * @property {string} affiliateId - アフィリエイトID（省略可能）
 * @property {string} affiliateIdForNaviLink - アフィリエイトID(商品価格ナビリンク用)（省略可能）
 * @property {string} measurementId - 計測ID（省略可能）
 */
export type RakutenAffiliateParams = (
  | { affiliateId: string; affiliateIdForNaviLink?: string }
  | { affiliateId?: string; affiliateIdForNaviLink: string }
) & {
  /* 計測ID */
  measurementId?: string;
};
