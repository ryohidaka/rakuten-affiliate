import { RakutenAffiliate } from "..";
import "./style.css";

// RakutenAffiliateクラスのインスタンスを生成
const client = new RakutenAffiliate();
console.log(client);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div></div>
`;
