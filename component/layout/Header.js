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
    this.$header.addClass("header");
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

    $(window).on("scroll", (e) => {
      let windowTop = $(window).scrollTop();
      if (windowTop >= 160) {
        $(".header-top").addClass("active");
        $(".header-nav").addClass("active");
        $(".main-wrapper").addClass("active");
        this.$header.addClass("active");
      } else {
        $(".header-top").removeClass("active");
        $(".header-nav").removeClass("active");
        $(".main-wrapper").removeClass("active");
        this.$header.removeClass("active");
      }
    });
  }

  init() {}
  setState() {}
  render() {}
}

export default Header;
