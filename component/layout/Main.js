class Main {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$main = $("<main>main</main>");
    this.$target.append(this.$main);
  }

  init() {}
  setState() {}
  render() {}
}

export default Main;
