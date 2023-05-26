class MiniMenu {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$miniMenu = $(`
      <div>
        <a class=mini-menu-left>오픈크리틱</a>
        <a class=mini-menu-right>메타크리틱</a>
      </div>
    `);
    this.$miniMenu.addClass("mini-menu");
    this.$miniMenu
      .find(".mini-menu-left")
      .attr("href", "https://opencritic.com/outlet/805/inven");
    this.$miniMenu
      .find(".mini-menu-right")
      .attr("href", "https://www.metacritic.com/publication/inven");

    $target.append(this.$miniMenu);
  }

  init() {}

  setState() {}

  render() {}
}

export default MiniMenu;
