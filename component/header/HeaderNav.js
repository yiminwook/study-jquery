class HeaderNav {
  $target = null;
  data = [
    { title: "뉴스", url: "https://www.inven.co.kr/webzine/news" },
    {
      title: "플랫폼",
      url: "https://www.inven.co.kr/webzine/platform/?nplatform=1",
    },
    {
      title: "리뷰",
      url: "https://www.inven.co.kr/webzine/news/?sclass=12&platform=gamereview",
    },
    {
      title: "특별취재",
      url: "https://www.inven.co.kr/webzine/special/gameshow.php",
    },
    { title: "게이머존", url: "https://www.inven.co.kr/webzine/zone/gamer" },
    { title: "IGC", url: "https://igc.inven.co.kr" },
  ];

  constructor({ $target }) {
    this.$target = $target;
    this.$headerNav = $("<div></div>");
    this.$headerNav.addClass("header-nav");
    this.$headerNavInner = $("<nav></nav>"); //길이를 1060px로 고정
    this.$headerLinkWapper = $("<ul></ul>");
    this.$siteMap = $("<div><button>인벤 전체 사이트 맵</button></div>");
    this.$siteMap.addClass("site-map");

    this.$headerNavInner.append(this.$headerLinkWapper);
    this.$headerNavInner.append(this.$siteMap);
    this.$headerNav.append(this.$headerNavInner);
    this.$target.append(this.$headerNav);

    this.render();
  }

  init() {}
  setState() {}
  render() {
    if (this.$headerLinkWapper) {
      this.data.map(({ title, url }) => {
        this.$headerLinkWapper.append(`
          <li key=header-nav-${title}>
            <a href=${url}>${title}</a>
          </li>
        `);
      });
    }
  }
}

export default HeaderNav;
