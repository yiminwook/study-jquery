import "@/component/footer/footer.less";
import MenuList from "@/component/footer/MenuList";
import Content from "@/component/footer/Content";

class Infomation {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$infomation = $("<div>");
    this.$infomation.addClass("infomation");

    this.$menuList = new MenuList({ $target: this.$infomation });
    this.$content = new Content({ $target: this.$infomation });
    this.$target.append(this.$infomation);
  }

  init() {}
  setState() {}
  render() {}
}

export default Infomation;
