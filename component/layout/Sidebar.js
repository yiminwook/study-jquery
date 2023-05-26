import Login from "@/component//sidebar/login";
import "@/component/sidebar/sidebar.less";

class Sidebar {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$sidebar = $("<aside class=sidebar></aside>");
    this.$login = new Login({ $target: this.$sidebar });
    this.$sidebar.append(this.$login);
    this.$target.append(this.$sidebar);
  }

  init() {}
  setState() {}
  render() {}
}

export default Sidebar;
