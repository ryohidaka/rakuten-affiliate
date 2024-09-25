import { describe, it, expect } from "vitest";
import { RakutenAffiliate } from "../src";
import { BASE_URL } from "../src/constants";

describe("RakutenAffiliate", () => {
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
  });
});
