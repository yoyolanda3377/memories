// 随机触发小游戏并打开弹出层
function tryShowGamePopup() {
  const chance = Math.random();
  if (chance < 0.1) { // 10% 概率
    setTimeout(() => {
      document.getElementById("game-popup").classList.add("active");
    }, 300);
    return true;
  }
  return false;
}

// 绑定关闭按钮
document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById("close-popup");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      document.getElementById("game-popup").classList.remove("active");
    });
  }
});
