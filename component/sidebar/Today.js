class Today {
  $target = null;
  data = true;

  constructor({ $target }) {
    this.$target = $target;
    this.$today = $("<div></div>");
    this.$today.addClass("today");
    this.$todayTab = $(`
      <div>
        <h3 class=hotven>오늘의 핫벤</h3>
        <h3 class=party>오늘의 팟벤</h3>
      </div>
    `);

    this.$todayTab.find(".hotven").on("mouseenter", () => {
      this.setState(true);
    });
    this.$todayTab.find(".party").on("mouseenter", () => {
      this.setState(false);
    });
    this.$todayBody = $("<div class=today-body></div>");

    this.$today.append(this.$todayTab);
    this.$today.append(this.$todayBody);
    $target.append(this.$today);

    this.init();
    this.render();
  }

  init() {
    this.handleTab();
  }

  handleTab() {
    if (this.data === true) {
      this.$todayTab.find(".hotven").addClass("active");
      this.$todayTab.find(".party").removeClass("active");
    } else {
      this.$todayTab.find(".hotven").removeClass("active");
      this.$todayTab.find(".party").addClass("active");
    }
  }

  setState(newData) {
    this.data = newData;
    this.handleTab();
    this.render();
  }

  render() {
    this.$todayBody.text("");
    const inner = $(`
      <div>
        <ul></ul>
        <div class=more>
          <a>더보기+</a>
        </div>
      </div>
    `);
    const ul = inner.find("ul");
    const more = inner.find(".more>a");

    if (this.data === true) {
      for (let i = 1; i < 11; i++) {
        ul.append($(`<li><span>${i}</span> 오늘의 핫벤</li>`));
        more.attr("href", "https://hot.inven.co.kr");
      }
    } else {
      for (let i = 1; i < 11; i++) {
        ul.append($(`<li><span>${i}</span> 오늘의 팟벤</li>`));
        more.attr("href", "https://party.inven.co.kr");
      }
    }

    this.$todayBody.append(inner);
  }
}

export default Today;
