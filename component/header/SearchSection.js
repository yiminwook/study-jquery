import SearchForm from "./SearchForm";

class SearchSection {
  $target = null;
  data = {
    list: ["제노니아", "제노니아 사전예약", "제노니아 기사단", "쇼케이스 "],
  };

  constructor({ $target }) {
    this.$target = $target;
    this.$searchSection = $("<section></section>");
    this.$searchSection.addClass("search-section");

    this.$searchForm = new SearchForm({ $target: this.$searchSection });
    this.$searchWord = $("<div></div");
    this.$searchWord.addClass("search-word");

    this.$searchSection.append(this.$searchInput);
    this.$searchSection.append(this.$searchWord);
    $target.append(this.$searchSection);

    this.render();
  }

  init() {}

  setState() {}

  render() {
    if (this.$searchWord) {
      this.data.list.map((text) => {
        let keywordLink = $(`<a>${text}</a>`);
        keywordLink.on("click", () => {
          window.location.href = `https://www.inven.co.kr/search/webzine/top/${encodeURIComponent(
            text
          )}`;
        });
        this.$searchWord.append(keywordLink);
      });
    }
  }
}

export default SearchSection;
