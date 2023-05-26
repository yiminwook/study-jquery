class LeftLogo {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$leftlogo = $("<h1></h1>");
    this.$leftlogo.addClass("left-logo");
    this.$leftLogolink = $("<a></a>");
    this.$leftLogolink.attr("href", "https://www.inven.co.kr");
    this.$leftlogo.append(this.$leftLogolink);
    this.$target.append(this.$leftlogo);
  }

  init() {}
  setState() {}
  render() {}
}

export default LeftLogo;
