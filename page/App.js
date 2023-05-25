import RootLayout from "@/component/layout/RootLayout";
import "@/component/layout/layout.less";

class App {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$rootLayout = new RootLayout({ $target });
  }

  init() {}
  setState() {}
  render() {}
}

export default App;
