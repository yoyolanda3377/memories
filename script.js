document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".memory-thumb");
  const drawer = document.querySelector(".drawer");
  const drawerImage = document.getElementById("drawer-img");
  const drawerText = document.getElementById("drawer-text");
  const drawerClose = document.getElementById("drawer-close");

  thumbnails.forEach(thumb => {
    thumb.addEventListener("click", () => {
      // 显示抽屉说明
      const imgSrc = thumb.dataset.large;
      const text = thumb.dataset.text;

      drawerImage.src = imgSrc;
      drawerText.textContent = text;
      drawer.classList.add("open");

      // 同时触发小游戏弹窗（100% 概率）
      tryShowGamePopup();
    });
  });

  drawerClose.addEventListener("click", () => {
    drawer.classList.remove("open");
  });
});
