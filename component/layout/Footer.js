class Footer {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$footer = $("<footer class=footer>footer</footer>");
    this.$target.append(this.$footer);
  }

  init() {}
  setState() {}
  render() {}
}

export default Footer;
