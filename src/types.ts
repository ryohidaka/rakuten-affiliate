/**
 * 楽天アフィリエイトの初期化に使用するパラメータ
 *
 * @typedef {Object} RakutenAffiliateParams
 * @property {string} affiliateId - アフィリエイトID
 * @property {string} measurementId - 計測ID
 */
export type RakutenAffiliateParams = {
  /* アフィリエイトID */
  affiliateId: string;
  /* 計測ID */
  measurementId?: string;
};
