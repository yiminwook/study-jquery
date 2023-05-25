class SearchForm {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$searchForm = $("<form></form>");
    this.$searchForm.on("submit", (e) => {
      e.preventDefault();
      const value = e.target.sw.value.trim();
      if (value.trim() === "") {
        alert("입력되지 않았습니다.");
        return;
      }
      window.location.href = `https://www.inven.co.kr/search/webzine/top/${encodeURIComponent(
        value.trim()
      )}`;
    });
    this.$searchInput = $("<input></input>");
    this.$searchInput.attr("placeholder", "제노니아");
    this.$searchInput.attr("name", "sw");
    this.$searchInput.attr("autocomplete", "off");
    this.$searchButton = $(`
      <button>
        <svg viewBox="0 0 512 512">
          <path d="M206.1 412c45.8 0 90.2-15.3 126.3-43.4l136.2 136.2c10.2 9.8 26.4 9.5 36.2-.6 9.6-9.9 9.6-25.7 0-35.6L368.6 332.3c69.8-89.8 53.5-219.2-36.3-289s-219.2-53.5-289 36.3-53.5 219.2 36.3 289c36.2 28.1 80.7 43.4 126.5 43.4zM96.6 96.6c60.4-60.4 158.4-60.4 218.9 0s60.4 158.4 0 218.9-158.4 60.4-218.9 0c-60.4-60-60.8-157.6-.8-218.1l.8-.8z"></path>
        </svg>
      </button>
    `);
    this.$searchButton.attr("type", "submit");

    this.$searchForm.append(this.$searchInput);
    this.$searchForm.append(this.$searchButton);
    this.$target.append(this.$searchForm);
  }

  init() {}
  setState() {}
  render() {}
}

export default SearchForm;
