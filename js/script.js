document.addEventListener("DOMContentLoaded", () => {
  new fullpage("#fullpage", {
    licenseKey: "gplv3-license", // 무료 라이선스 키
    autoScrolling: true,
    navigation: true,
    anchors: ["section1", "section2", "section3"],
    scrollHorizontally: true,
  });
});
