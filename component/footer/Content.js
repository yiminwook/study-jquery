import "@/component/layout/layout.less";

const INFO_TEXT = [
  {
    0: "명칭 : ",
    1: "주식회사 인벤",
    2: " | 등록번호: 경기 아 51514 | ",
    3: "등록연월일: 2009. 12. 14 | 제호: 인벤",
    4: "(INVEN)",
  },
  {
    0: "발행인: 서형준 | 편집인: 강민우 | ",
    1: "발행소: 경기도 성남시 분당구 구미로 9번길 3-4 한국빌딩 3층",
  },
  {
    0: "발행연월일: 2004 11. 11 | ",
    1: "전화번호 : 02 - 6393 - 7700 | E-mail: help@inven.co.kr",
  },
  {
    0: "인벤의 컨텐츠 및 기사는 저작권법의 보호를 받으므로, 무단 전재, 복제, 배포 등을 금합니다.",
  },
  {
    1: "Copyrightⓒ",
    2: " All rights reserved.",
  },
];

class Content {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$infoContent = $(`<div>`).addClass("info-content");
    this.$infoText = $(`<div>`).addClass("info-text");
    this.$textWarp = $(`<div>`).addClass("text-wrap");

    INFO_TEXT.forEach((obj, index) => {
      const text = Object.values(obj).join("");
      const $p = $("<p>").text(text);
      this.$textWarp.append($p);
    });

    this.$infoBanner = $(`<div>`).addClass("info-banner");
    this.$onc = $(`<div>`).addClass("onc");
    this.$isms = $(`<div>`).addClass("isms");

    this.$infoText.append(this.$textWarp);
    this.$infoBanner.append(this.$onc).append(this.$isms);

    this.$infoContent.append(this.$infoText).append(this.$infoBanner);
    this.$target.append(this.$infoContent);
  }

  init() {}
  setState() {}
  render() {}
}

export default Content;
