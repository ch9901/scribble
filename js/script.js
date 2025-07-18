document.addEventListener("DOMContentLoaded", () => {
  new fullpage("#fullpage", {
    licenseKey: "gplv3-license", // 무료 라이선스 키
    autoScrolling: true,
    // navigation: true,
    anchors: ["section1", "section2", "section3"],
    scrollHorizontally: true,
    onLeave: function (origin, destination, direction) {
      const header = document.querySelector("header");

      if (destination.index === 1) {
        // 두 번째 섹션에 진입하면
        header.classList.add("section2");
      } else {
        header.classList.remove("dark");
      }
    },
  });
});
