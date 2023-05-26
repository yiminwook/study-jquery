import Slider from "@/component/main/Slider";
import "@/component/main/main.less";
import Article from "@/component/main/Article";

class Main {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$main = $("<main class=main></main>");

    this.$slider = new Slider({ $target: this.$main });
    this.$article = new Article({ $target: this.$main });

    this.$target.append(this.$main);
  }

  init() {}
  setState() {}
  render() {}
}

export default Main;
