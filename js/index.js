const trade_btn = document.querySelectorAll(".trade_btn");
let active_btn = null;

for (var i = 0; i < trade_btn.length; i++) {
  trade_btn[i].addEventListener("click", function () {
    if (active_btn !== null) {
      active_btn.classList.remove("trade_btn_active");
    }
    this.classList.add("trade_btn_active");
    active_btn = this;
  });
}
