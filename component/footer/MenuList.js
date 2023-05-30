import "@/component/layout/layout.less";

const MENU_LIST = [
  {
    title: "회사소개",
    href: "https://www.inven.co.kr/webzine/zone/inventeam/?page=introduce",
  },
  {
    title: "제휴문의",
    href: "https://www.inven.co.kr/partner",
  },
  {
    title: "광고문의",
    href: "https://www.inven.co.kr/ad/contact",
  },
  {
    title: "이용약관",
    href: "https://www.inven.co.kr/doc/service.php",
  },
  {
    title: "개인정보처리방침",
    href: "https://www.inven.co.kr/doc/privacy.php",
  },
  {
    title: "청소년보호정책",
    href: "https://www.inven.co.kr/doc/youthpolicy.php",
  },
  {
    title: "찾아오시는 길",
    href: "https://www.inven.co.kr/webzine/zone/inventeam/?page=location",
  },
  {
    title: "공지사항",
    href: "https://www.inven.co.kr/board/webzine/1292?iskin=webzine",
  },
];

class MenuList {
  $target = null;

  constructor({ $target }) {
    this.$target = $target;
    this.$menuList = $(`<ul></ul>`).addClass("menu-list");
    MENU_LIST.forEach(({ title, href }, index) => {
      const $menuListChild = $(`<li>`);
      $menuListChild.addClass("menu");
      $menuListChild.addClass(`menu${index}`);
      const $menuListLink = $(`<a>`).prop({ href, text: title });
      $menuListChild.append($menuListLink);
      this.$menuList.append($menuListChild);
    });

    this.$target.append(this.$menuList);
  }

  init() {}
  setState() {}
  render() {}
}

export default MenuList;
