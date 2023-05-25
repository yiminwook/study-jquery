import { sliderArticles } from "@/component/main/Slider";

class SliderNav {
  $target = null;
  constructor({ $target, onMouse }) {
    this.$target = $target;
    this.$lists = $(`<ul></ul>`);
    this.$lists.addClass("slider-nav");
    sliderArticles.forEach((data, index) => {
      let list = $(`<li><a></a></li>`);
      let a = list.find("a");
      list.on("mouseenter", () => onMouse(index));
      a.attr("href", data.link);
      a.text(data.title);
      this.$lists.append(list);
    });

    this.$target.append(this.$lists);
  }

  init() {}
  setState() {}
  render() {}
}
export default SliderNav;
