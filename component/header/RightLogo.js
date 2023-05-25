class RightLogo {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$rightLogo = $("<h1></h1>");
    this.$rightLogo.addClass("right-logo");
    $target.append(this.$rightLogo);
  }

  init() {}
  setState() {}
  render() {}
}

export default RightLogo;
