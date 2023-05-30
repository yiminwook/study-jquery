import Infomation from "@/component/footer/Infomation";
import TopButton from "@/component/footer/TopButton";

class Footer {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$footer = $("<footer class=footer></footer>");
    this.$infomation = new Infomation({ $target: this.$footer });
    this.$topButton = new TopButton({ $target: this.$footer });

    this.$target.append(this.$footer);
  }

  init() {}
  setState() {}
  render() {}
}

export default Footer;
