import Header from "@/component/layout/Header";
import Footer from "@/component/layout/Footer";
import Main from "@/component/layout/Main";
import Sidebar from "@/component/layout/Sidebar";

class RootLayout {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$header = new Header({ $target });
    this.$wapper = $("<div></div>");
    this.$wapper.addClass("main-wrapper");
    this.$main = new Main({ $target: this.$wapper });
    this.$sidebar = new Sidebar({ $target: this.$wapper });
    this.$footer = new Footer({ $target: this.$wapper });

    this.$wapper.append(this.$main);
    this.$wapper.append(this.$sidebar);
    this.$wapper.append(this.$footer);
    this.$target.append(this.$wapper);
    this.$target.prepend(this.$header);
  }

  init() {}
  setState() {}
  render() {}
}

export default RootLayout;
