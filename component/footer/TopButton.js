import "@/component/footer/footer.less";

class TopButton {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$topButton = $(`<button></button>`);
    this.$topButton.addClass("top-button");
    this.$topButton.text("▲");
    this.$topButton.on("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    this.$target.append(this.$topButton);
  }

  init() {}
  setState() {}
  render() {}
}

export default TopButton;
