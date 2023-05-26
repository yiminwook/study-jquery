import Login from "@/component//sidebar/login";
import "@/component/sidebar/sidebar.less";
import MiniMenu from "@/component/sidebar/MiniMenu";
import Today from "@/component/sidebar/today";

class Sidebar {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$sidebar = $("<aside class=sidebar></aside>");
    this.$login = new Login({ $target: this.$sidebar });
    this.$miniMenu = new MiniMenu({ $target: this.$sidebar });
    this.$today = new Today({ $target: this.$sidebar });

    this.$target.append(this.$sidebar);
  }

  init() {}
  setState() {}
  render() {}
}

export default Sidebar;
