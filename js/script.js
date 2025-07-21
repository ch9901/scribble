document.addEventListener("DOMContentLoaded", () => {
  new fullpage("#fullpage", {
    licenseKey: "gplv3-license", // 무료 라이선스 키
    autoScrolling: true,
    // navigation: true,
    anchors: ["section1", "section2", "section3"],
    scrollHorizontally: true,
    onLeave: function (origin, destination, direction) {
      const header = document.querySelector("header");
      const footer = document.querySelector("footer");
      const fullpage = document.querySelector("#fullpage");

      header.className = `section${Number(destination.index) + 1}`;
      footer.className = `section${Number(destination.index) + 1}`;
      fullpage.className = `fullpage-wrapper section${
        Number(destination.index) + 1
      }`;
    },
  });
});
