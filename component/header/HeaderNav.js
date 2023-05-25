class HeaderNav {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$headerNav = $("<div>nav</div>");
    this.$headerNav.addClass("harder-nav");
    this.$target.append(this.$headerNav);
  }

  init() {}
  setState() {}
  render() {}
}

export default HeaderNav;
