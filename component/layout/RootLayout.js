import Header from "@/component/layout/Header";
import Main from "@/component/layout/Main";

class RootLayout {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;

    this.$header = new Header({ $target });
    this.$main = new Main({ $target });
  }

  init() {}
  setState() {}
  render() {}
}

export default RootLayout;
