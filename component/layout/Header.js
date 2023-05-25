import LeftLogo from "@/component/header/LeftLogo";
import RightLogo from "@/component/header/RightLogo";
import SearchSection from "@/component/header/SearchSection";
import HeaderNav from "@/component/header/HeaderNav";
import "@/component/header/header.less";

class Header {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$header = $("<header></header>");
    this.$header.attr("id", "header");
    this.$headerTop = $("<div></div>");
    this.$headerTop.addClass("header-top");
    this.$headerInner = $("<div></div>");
    this.$headerInner.addClass("header-inner");

    this.$leftLogo = new LeftLogo({ $target: this.$headerInner });
    this.$searchSection = new SearchSection({ $target: this.$headerInner });
    this.$rightLogo = new RightLogo({ $target: this.$headerInner });
    this.$headerNav = new HeaderNav({ $target: this.$header });

    this.$headerTop.append(this.$headerInner);
    this.$header.prepend(this.$headerTop);
    $target.append(this.$header);
  }

  init() {}
  setState() {}
  render() {}
}

export default Header;
