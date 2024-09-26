import { RakutenAffiliateParams } from ".";
import { BASE_URL } from "./constants";

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

  // アフィリエイトID(商品価格ナビリンク用)
  private affiliateIdForNaviLink: string;

  // 計測ID
  private measurementId: string;

  /**
   * 初期化
   *
   * @param {RakutenAffiliateParams} params - パラメータオブジェクト
   * @param {string} params.affiliateId - アフィリエイトID
   * @param {string} params.affiliateIdForNaviLink - アフィリエイトID(商品価格ナビリンク用)
   * @param {string} params.measurementId - 計測ID（省略可能）
   * @throws {Error} エラーメッセージが含まれる場合、エラーをスローする
   */
  constructor(params: RakutenAffiliateParams) {
    const { affiliateId, affiliateIdForNaviLink, measurementId } = params;

    // どちらのIDも指定されていない場合はエラーをスロー
    if (
      (!affiliateId || affiliateId.trim() === "") &&
      (!affiliateIdForNaviLink || affiliateIdForNaviLink.trim() === "")
    ) {
      throw new Error(
        "affiliateId または affiliateIdForNaviLink のいずれか一方を指定してください。",
      );
    }

    this.affiliateId = affiliateId ?? "";
    this.affiliateIdForNaviLink = affiliateIdForNaviLink ?? "";
    this.measurementId = measurementId ?? "";
  }

  /**
   * 商品アフィリエイトリンク取得処理
   *
   * @param pageURL - リンク先のURL (エンコードされる)
   * @param token - トークン (任意)
   * @returns 生成されたアフィリエイトリンク
   * @throws エラーメッセージが含まれる場合、エラーをスローする
   */
  getItemURL(pageURL: string, token?: string): string {
    if (!this.affiliateId || this.affiliateId.trim() === "") {
      throw new Error("affiliateIdを指定してください。");
    }

    if (!pageURL || pageURL.trim() === "") {
      throw new Error("無効な商品ページURLが指定されています。");
    }

    try {
      // ベースURLにアフィリエイトIDを付加
      let url = `${BASE_URL}/${this.affiliateId}`;

      // 計測IDがあれば、URLに追加
      if (this.measurementId) {
        url += `/${this.measurementId}`;
      }

      // 商品ページのURLとリンクタイプをクエリパラメータとして追加
      url += `?pc=${encodeURIComponent(pageURL)}&link_type=hybrid_url`;

      // トークンがある場合は、URLに追加
      if (token) {
        url += `&ut=${token}`;
      }

      return url;
    } catch (error: any) {
      throw new Error(`URLの生成中にエラーが発生しました: ${error.message}`);
    }
  }

  /**
   * 商品価格ナビリンク用アフィリエイトリンク取得
   *
   * @param pageURL - リンク先のURL (エンコードされる)
   * @param token - トークン (任意)
   * @returns 生成されたアフィリエイトリンク
   * @throws エラーメッセージが含まれる場合、エラーをスローする
   */
  getNaviLinkURL(pageURL: string, token?: string): string {
    if (
      !this.affiliateIdForNaviLink ||
      this.affiliateIdForNaviLink.trim() === ""
    ) {
      throw new Error("affiliateIdForNaviLinkを指定してください。");
    }

    if (!pageURL || pageURL.trim() === "") {
      throw new Error("無効な商品ページURLが指定されています。");
    }

    try {
      // ベースURLにアフィリエイトIDを付加
      let url = `${BASE_URL}/${this.affiliateIdForNaviLink}`;

      // 計測IDがあれば、URLに追加
      if (this.measurementId) {
        url += `/${this.measurementId}`;
      }

      // 商品ページのURLとリンクタイプをクエリパラメータとして追加
      url += `?pc=${encodeURIComponent(pageURL)}&link_type=hybrid_url`;

      // トークンがある場合は、URLに追加
      if (token) {
        url += `&ut=${token}`;
      }

      return url;
    } catch (error: any) {
      throw new Error(`URLの生成中にエラーが発生しました: ${error.message}`);
    }
  }
}
