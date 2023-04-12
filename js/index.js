const trade_btn = document.querySelectorAll(".trade_btn");
let active_btn = trade_btn[2]; // устанавливаем первый элемент по умолчанию
active_btn.classList.add("trade_btn_active");

for (let i = 0; i < trade_btn.length; i++) {
  trade_btn[i].addEventListener("click", function () {
    if (active_btn !== null) {
      active_btn.classList.remove("trade_btn_active");
    }
    this.classList.add("trade_btn_active");
    active_btn = this;
  });
}

const downbar_menu__link = document.querySelectorAll(".downbar_menu__link");
let active_link = downbar_menu__link[0];
active_link.classList.remove("downbar_menu__link");
active_link.classList.add("downbar_menu__link_active");

for (let i = 0; i < downbar_menu__link.length; i++) {
  downbar_menu__link[i].addEventListener("click", function () {
    if (active_link !== null) {
      active_link.classList.remove("downbar_menu__link_active");
      active_link.classList.toggle("downbar_menu__link");
    }
    this.classList.remove("downbar_menu__link");
    this.classList.toggle("downbar_menu__link_active");
    active_link = this;
  });
}

const pay__link = document.querySelectorAll(".pay__link");
let active_payLink = pay__link[0];
active_payLink.classList.add("pay__link_active");

for (let i = 0; i < pay__link.length; i++) {
  pay__link[i].addEventListener("click", function () {
    if (active_payLink !== null) {
      active_payLink.classList.remove("pay__link_active");
    }
    this.classList.add("pay__link_active");
    active_payLink = this;
  });
}

