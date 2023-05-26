import SliderChild from "@/component/main/SliderChild";
import SliderNav from "@/component/main/SliderNav";
import image0 from "@/image/slider/0.png";
import image1 from "@/image/slider/1.webp";
import image2 from "@/image/slider/2.webp";
import image3 from "@/image/slider/3.png";
import image4 from "@/image/slider/4.jpg";
import image5 from "@/image/slider/5.png";
import image6 from "@/image/slider/6.png";

export const sliderArticles = [
  {
    title: "AI와 저작권법",
    imageSrc: image0,
    link: "https://www.inven.co.kr/webzine/news/?news=285033",
    cate: "INTERVIEW",
    subject: "저작권법과 그림 AI",
    smrsubject: "편리한 도구인가, 또 다른 행태의 도둑질인가",
  },
  {
    title: "PS 쇼케이스",
    imageSrc: image1,
    link: "https://www.inven.co.kr/webzine/news/?news=285056",
    cate: "SHOWCASE",
    subject: "플레이스테이션 쇼케이스",
    smrsubject: "11분 스파이더맨2 영상부터 휴대용 게임기 프로젝트Q까지",
  },
  {
    title: "블랙클로버 모바일",
    imageSrc: image2,
    link: "https://www.inven.co.kr/webzine/news/?news=284960",
    cate: "INTERVIEW",
    subject: "블랙클러버 모바일",
    smrsubject: "원작 애니매이션 감성을 고스란히 담았다",
  },
  {
    title: "레고 2K 드라이브",
    imageSrc: image3,
    link: "https://www.inven.co.kr/webzine/news/?news=284982",
    cate: "REVIEW",
    subject: "어른이에게 찾아온 뜻밖의 선물",
    smrsubject: "레고 2K 드라이브 리뷰",
  },
  {
    title: "아르케랜드",
    imageSrc: image4,
    link: "https://www.inven.co.kr/webzine/news/?news=284880",
    cate: "INTERVIEW",
    subject: "반주년 앞둔 '아르케랜드'",
    smrsubject: "한국은 SRPG에 진심, 검증 받고자 한다",
  },
  {
    title: "5월 3주차 순위",
    imageSrc: image5,
    link: "https://www.inven.co.kr/webzine/news/?news=284946",
    cate: "RANKING",
    subject: "호러, 액션에 코옵까지",
    smrsubject: "이번 주 스팀 트렌드는 '얼리 액세스' 신작",
  },
  {
    title: "블랙스톰",
    imageSrc: image6,
    link: "https://www.inven.co.kr/webzine/news/?news=284857",
    cate: "INTERVIEW",
    subject: "신생 개발사 블랙스톰",
    smrsubject: "무한한 RPG의 가능성, 그렇기에 우리는 전문 개발사를 꿈꾼다",
  },
];

class Slider {
  $target = null;
  data = { selected: 0 };

  constructor({ $target }) {
    this.$target = $target;
    this.$slider = $("<div></div>");
    this.$slider.addClass("slider");
    this.$sliderInner = $("<ul></ul>");
    this.$sliderInner.addClass("slider-inner");
    this.$sliderNav = new SliderNav({
      $target: this.$slider,
      onMouse: (index) => {
        this.setState({ ...this.data, selected: index });
      },
    });

    this.$slider.append(this.$sliderInner);
    this.$target.append(this.$slider);

    this.init();
    this.render();
  }

  init() {}
  setState(newData) {
    this.data = newData;
    this.render();
  }

  render() {
    this.$sliderInner.text("");
    if (!this.$sliderInner) return;
    sliderArticles.map((data, index) => {
      let child = new SliderChild({
        $target: this.$sliderInner,
        data: { ...data, active: index === this.data.selected },
      });
      this.$sliderInner.append(child);
    });
  }
}

export default Slider;
