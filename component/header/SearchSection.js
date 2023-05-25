class SearchSection {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$searchSection = $("<section></section>");
    this.$searchSection.addClass("search");
    $target.append(this.$searchSection);
  }

  init() {}
  setState() {}
  render() {}
}

export default SearchSection;
