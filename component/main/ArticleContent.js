class ArticleContents {
  $target = null;
  data = [
    {
      href: "",
      imageSrc: "http://via.placeholder.com/298x132",
      desc: "미리본 파이널 판타지 16, 기대 포인트와 아쉬운 점",
    },
    {
      href: "",
      imageSrc: "http://via.placeholder.com/162x132",
      desc: "3인칭으로 돌아온 정예부대, 헬다이..",
    },
    {
      href: "",
      imageSrc: "http://via.placeholder.com/162x132",
      desc: "쿠카게임즈, 삼국 올스타에 엔픽셀 아..",
    },
    {
      href: "",
      imageSrc: "http://via.placeholder.com/162x132",
      desc: "초능력 + 삼국지, 삼국 올스타",
    },
  ];

  constructor({ $target, data }) {
    this.$target = $target;
    // this.data = data

    this.render();
  }

  init() {}
  setState() {}

  render() {
    this.$target.text("");
    const content = $("<dl></dl>");
    this.data.forEach(({ href, imageSrc, desc }) => {
      const $article = $(`
        <div>
          <dt><img></img></dt>
          <dd></dd>
        </div>`);
      $article.find("img").attr("src", imageSrc);
      $article.find("dd").text(desc);
      content.append($article);
    });
    content.css({ opacity: 0 });
    this.$target.append(content);
    content.animate({ opacity: 1 });
  }
}

export default ArticleContents;
