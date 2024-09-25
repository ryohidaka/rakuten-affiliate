import { RakutenAffiliateParams } from ".";

/**
 * 楽天アフィリエイトのURL生成クラス
 *
 * @param {RakutenAffiliateParams} params - パラメータオブジェクト
 * @param {string} params.affiliateId - アフィリエイトID
 * @param {string} params.measurementId - 計測ID（省略可能）
 */
export class RakutenAffiliate {
  // アフィリエイトID
  private affiliateId: string;

  // 計測ID
  private measurementId: string;

  /**
   * 初期化
   *
   * @param {RakutenAffiliateParams} params - パラメータオブジェクト
   * @param {string} params.affiliateId - アフィリエイトID
   * @param {string} params.measurementId - 計測ID（省略可能）
   * @throws {Error} エラーメッセージが含まれる場合、エラーをスローする
   */
  constructor(params: RakutenAffiliateParams) {
    const { affiliateId, measurementId } = params;

    if (!affiliateId || affiliateId.trim() === "") {
      throw new Error("無効なアフィリエイトIDが指定されています。");
    }

    this.affiliateId = affiliateId;
    this.measurementId = measurementId ?? "";
  }
}
