import { describe, it, expect } from "vitest";
import { RakutenAffiliate } from "../src";
import { BASE_URL } from "../src/constants";

describe("RakutenAffiliate", () => {
  it("affiliateIdとaffiliateIdForNaviLinkが共に空の場合、コンストラクタでエラーをスローする", () => {
    expect(() => {
      new RakutenAffiliate({
        affiliateId: "",
        affiliateIdForNaviLink: "",
      });
    }).toThrowError(
      "affiliateId または affiliateIdForNaviLink のいずれか一方を指定してください。",
    );
  });

  describe("getItemURL", () => {
    it("計測IDなしで生成できること", () => {
      const affiliate = new RakutenAffiliate({
        affiliateId: "dummyAffiliateId",
      });
      const pageURL = "https://example.com/item/12345";
      const result = affiliate.getItemURL(pageURL);

      expect(result).toBe(
        `${BASE_URL}/dummyAffiliateId?pc=${encodeURIComponent(
          pageURL,
        )}&link_type=hybrid_url`,
      );
    });

    it("計測IDあり、トークンなしで生成できること", () => {
      const affiliate = new RakutenAffiliate({
        affiliateId: "dummyAffiliateId",
        measurementId: "measurement123",
      });
      const pageURL = "https://example.com/item/12345";
      const result = affiliate.getItemURL(pageURL);

      expect(result).toBe(
        `${BASE_URL}/dummyAffiliateId/measurement123?pc=${encodeURIComponent(
          pageURL,
        )}&link_type=hybrid_url`,
      );
    });

    it("計測IDとトークンありで生成できること", () => {
      const affiliate = new RakutenAffiliate({
        affiliateId: "dummyAffiliateId",
        measurementId: "measurement123",
      });
      const pageURL = "https://example.com/item/12345";
      const token = "sampleToken";
      const result = affiliate.getItemURL(pageURL, token);

      expect(result).toBe(
        `${BASE_URL}/dummyAffiliateId/measurement123?pc=${encodeURIComponent(
          pageURL,
        )}&link_type=hybrid_url&ut=${token}`,
      );
    });

    it("計測IDなし、トークンありで生成できること", () => {
      const affiliate = new RakutenAffiliate({
        affiliateId: "dummyAffiliateId",
      });
      const pageURL = "https://example.com/item/12345";
      const token = "sampleToken";
      const result = affiliate.getItemURL(pageURL, token);

      expect(result).toBe(
        `${BASE_URL}/dummyAffiliateId?pc=${encodeURIComponent(
          pageURL,
        )}&link_type=hybrid_url&ut=${token}`,
      );
    });

    it("affiliateIdが空の場合、エラーをスローする", () => {
      const affiliate = new RakutenAffiliate({
        affiliateId: "",
        affiliateIdForNaviLink: "dummyAffiliateId",
      });
      expect(() => {
        affiliate.getItemURL("https://example.com/item/12345");
      }).toThrowError("affiliateIdを指定してください。");
    });

    it("無効なURLを渡した場合、エラーをスローする", () => {
      const affiliate = new RakutenAffiliate({
        affiliateId: "dummyAffiliateId",
      });
      expect(() => {
        affiliate.getItemURL("");
      }).toThrowError("無効な商品ページURLが指定されています。");
    });
  });

  describe("getNaviLinkURL", () => {
    it("計測IDなしで生成できること", () => {
      const affiliate = new RakutenAffiliate({
        affiliateId: "dummyAffiliateId",
        affiliateIdForNaviLink: "dummyAffiliateId",
      });
      const pageURL = "https://example.com/product/-/12345";
      const result = affiliate.getNaviLinkURL(pageURL);

      expect(result).toBe(
        `${BASE_URL}/dummyAffiliateId?pc=${encodeURIComponent(
          pageURL,
        )}&link_type=hybrid_url`,
      );
    });

    it("計測IDあり、トークンなしで生成できること", () => {
      const affiliate = new RakutenAffiliate({
        affiliateId: "dummyAffiliateId",
        affiliateIdForNaviLink: "dummyAffiliateId",
        measurementId: "measurement123",
      });
      const pageURL = "https://example.com/product/-/12345";
      const result = affiliate.getNaviLinkURL(pageURL);

      expect(result).toBe(
        `${BASE_URL}/dummyAffiliateId/measurement123?pc=${encodeURIComponent(
          pageURL,
        )}&link_type=hybrid_url`,
      );
    });

    it("計測IDとトークンありで生成できること", () => {
      const affiliate = new RakutenAffiliate({
        affiliateId: "dummyAffiliateId",
        affiliateIdForNaviLink: "dummyAffiliateId",
        measurementId: "measurement123",
      });
      const pageURL = "https://example.com/product/-/12345";
      const token = "sampleToken";
      const result = affiliate.getNaviLinkURL(pageURL, token);

      expect(result).toBe(
        `${BASE_URL}/dummyAffiliateId/measurement123?pc=${encodeURIComponent(
          pageURL,
        )}&link_type=hybrid_url&ut=${token}`,
      );
    });

    it("計測IDなし、トークンありで生成できること", () => {
      const affiliate = new RakutenAffiliate({
        affiliateId: "dummyAffiliateId",
        affiliateIdForNaviLink: "dummyAffiliateId",
      });
      const pageURL = "https://example.com/product/-/12345";
      const token = "sampleToken";
      const result = affiliate.getNaviLinkURL(pageURL, token);

      expect(result).toBe(
        `${BASE_URL}/dummyAffiliateId?pc=${encodeURIComponent(
          pageURL,
        )}&link_type=hybrid_url&ut=${token}`,
      );
    });

    it("affiliateIdForNaviLinkが空の場合、エラーをスローする", () => {
      const affiliate = new RakutenAffiliate({
        affiliateId: "dummyAffiliateId",
        affiliateIdForNaviLink: "",
      });
      expect(() => {
        affiliate.getNaviLinkURL("https://example.com/product/-/12345");
      }).toThrowError("affiliateIdForNaviLinkを指定してください。");
    });

    it("無効なURLを渡した場合、エラーをスローする", () => {
      const affiliate = new RakutenAffiliate({
        affiliateId: "dummyAffiliateId",
        affiliateIdForNaviLink: "dummyAffiliateId",
      });
      expect(() => {
        affiliate.getNaviLinkURL("");
      }).toThrowError("無効な商品ページURLが指定されています。");
    });
  });
});
