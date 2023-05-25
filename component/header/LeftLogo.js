class LeftLogo {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$leftlogo = $("<h1></h1>");
    this.$leftlogo.addClass("left-logo");
    this.$link = $("<a></a>");
    this.$link.attr("href", "https://www.inven.co.kr");
    this.$leftlogo.append(this.$link);
    this.$target.append(this.$leftlogo);
  }

  init() {}
  setState() {}
  render() {}
}

export default LeftLogo;
