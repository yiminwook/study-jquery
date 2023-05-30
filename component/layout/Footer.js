import Infomation from "../footer/Infomation";

class Footer {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$footer = $("<footer class=footer></footer>");
    this.$infomation = new Infomation({ $target: this.$footer });

    this.$target.append(this.$footer);
  }

  init() {}
  setState() {}
  render() {}
}

export default Footer;
