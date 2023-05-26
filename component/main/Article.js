const NAV_LIST = [
  {
    title: "인기뉴스",
    href: "https://www.inven.co.kr/webzine/news/?hotnews=1",
  },
  {
    title: "#삼국 올스타",
    href: "https://www.inven.co.kr/event/sp/samgukallstar",
  },
  {
    title: "블록체인",
    href: "https://www.inven.co.kr/webzine/news/?keyword=NFT",
  },
  {
    title: "메타버스",
    href: "https://www.inven.co.kr/webzine/news/?keyword=meta",
  },
  {
    title: "최신영상",
    href: "https://www.inven.co.kr/webzine/news/?sclass=1",
  },
  {
    title: "코스프레",
    href: "https://www.inven.co.kr/board/webzine/2898",
  },
  { title: "EZ게임", href: "" },
];

class Article {
  $target = null;
  data = { selected: 0 };
  constructor({ $target }) {
    this.$target = $target;
    this.$article = $(`<div></div>`);
    this.$article.addClass("article");

    this.$articleNav = $(`<ul></ul>`);
    NAV_LIST.forEach(({ title, href }, index) => {
      const articleNavList = $(`<li><a><span></span></a></li>`);
      articleNavList.on("mouseenter", () => {
        this.setState({ selected: index });
      });
      const link = articleNavList.find("a");
      link.attr("href", href);
      link.find("span").text(title);
      this.$articleNav.append(articleNavList);
    });

    this.$article.append(this.$articleNav);
    this.$target.append(this.$article);
    this.init();
  }

  init() {
    this.handleNav();
  }

  handleNav() {
    if (!this.$articleNav) return;
    const lists = this.$articleNav.find("li>a>span");
    lists.each((index, el) => {
      if (index === this.data.selected) {
        $(el).addClass("active");
      } else {
        $(el).removeClass("active");
      }
    });
  }

  setState(newData) {
    this.data = newData;
    this.handleNav();
    this.render();
  }

  render() {}
}

export default Article;
