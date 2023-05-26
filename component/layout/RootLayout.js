import Header from "@/component/layout/Header";
import Footer from "@/component/layout/Footer";
import Main from "@/component/layout/Main";
import Sidebar from "@/component/layout/Sidebar";

class RootLayout {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$header = new Header({ $target });

    this.$mainWrapper = $("<div></div>");
    this.$mainWrapper.addClass("main-wrapper");

    this.$main = new Main({ $target: this.$mainWrapper });
    this.$sidebar = new Sidebar({ $target: this.$mainWrapper });
    this.$footer = new Footer({ $target: this.$mainWrapper });

    this.$mainWrapper.append(this.$main);
    this.$mainWrapper.append(this.$sidebar);
    this.$mainWrapper.append(this.$footer);
    this.$target.append(this.$mainWrapper);
    this.$target.prepend(this.$header);
  }

  init() {}
  setState() {}
  render() {}
}

export default RootLayout;
