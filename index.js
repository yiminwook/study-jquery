import App from "@/page/App";
import "@/style/reset.less";
import "@/style/global.less";

$(() => {
  // document load
  new App({ $target: $("#app") });
});
