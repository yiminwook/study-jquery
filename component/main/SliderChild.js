class SliderChild {
  $target = null;
  data = {
    active: false,
    imageSrc: "",
    link: "",
    cate: "",
    subject: "",
    smrsubject: "",
  };
  constructor({ $target, data }) {
    this.$target = $target;
    this.data = data;
    this.$sliderChild = $(`
      <li>
        <a>
          <span>
            <img></img>
          </span>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </li>
    `);

    this.$sliderChild.find("img").attr("src", this.data.imageSrc);
    this.$sliderChild.css("opacity", 0);
    this.$target.append(this.$sliderChild);
    this.init();
  }

  init() {
    if (this.data.active === true) {
      this.$sliderChild.animate({ opacity: 1 });
    } else {
      this.$sliderChild.css("display", "none");
    }
  }

  setState(newData) {
    this.data = newData;
    this.render();
  }

  render() {}
}

export default SliderChild;
