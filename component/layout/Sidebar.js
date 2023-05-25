class Sidebar {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$sidebar = $("<aside id=sidebar>sidebar</aside>");
    this.$target.append(this.$sidebar);
  }

  init() {}
  setState() {}
  render() {}
}

export default Sidebar;
