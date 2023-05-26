import { SLIDER_ARTICLES } from "@/component/main/Slider";

class SliderNav {
  $target = null;
  constructor({ $target, onMouse }) {
    this.$target = $target;
    this.$lists = $(`<ul></ul>`);
    this.$lists.addClass("slider-nav");
    SLIDER_ARTICLES.forEach(({ title, link }, index) => {
      const list = $(`<li><a></a></li>`);
      const $a = list.find("a");
      list.on("mouseenter", () => onMouse(index));
      $a.attr("href", link);
      $a.text(title);
      this.$lists.append(list);
    });

    this.$target.append(this.$lists);
  }

  init() {}
  setState() {}
  render() {}
}
export default SliderNav;
