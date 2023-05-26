const POPUP_WIDTH = 600;
const POPUP_HIEGHT = 800;

class Login {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$login = $(`
      <div>
        <p>인벤을 더 안전하고 편리하게 이용하세요</p>
        <a>로그인</a>
        <div>
          <a class="id-password">아이디/비밀번호 찾기</a>
          <a class="join">회원가입</a>
        </div>
      </div>
    `);

    this.$loginButton = this.$login.find("a:eq(0)");
    this.$loginButton.addClass("login-btn");
    this.$loginButton.attr(
      "href",
      "https://member.inven.co.kr/user/scorpio/mlogin"
    );

    this.$login.find(".id-password").on("click", () => {
      window.open(
        "https://member.inven.co.kr/user/aquarius/find/info",
        "Child",
        `width=${POPUP_WIDTH},height=${POPUP_HIEGHT},top=100,left=530`
      );
    });
    this.$login
      .find(".join")
      .attr("href", "https://member.inven.co.kr/user/aries/join/");
    this.$login.addClass("login");
    this.$target.append(this.$login);
  }

  init() {}

  setState() {}

  render() {}
}

export default Login;
