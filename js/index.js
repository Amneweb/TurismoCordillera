const cerrarMenu = document.querySelector("#cerrar-menu");
const abrirMenu = document.querySelector("#abrir-menu");
const menu = document.querySelector("#modal-menu");
abrirMenu.addEventListener("click", () => {
  menu.classList.add("activa");
});
cerrarMenu.addEventListener("click", () => {
  menu.classList.remove("activa");
});
const menuOptions = document.querySelector(".nav").children;
console.log(menuOptions);
for (let i = 0; i < menuOptions.length; i++) {
  menuOptions[i].addEventListener("click", () => {
    menu.classList.remove("activa");
  });
}
const vermas = document.querySelectorAll(".vermas");
console.log(vermas);
vermas.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    const parentApartado = enlace.closest(".apartados__item");
    parentApartado.style.width = "30%";
    const specificLayer = document.querySelector(`.${e.target.id}`);
    specificLayer.style.transform = "translateX(30%)";

    const cerrarExtras = specificLayer.children[0];
    cerrarExtras.addEventListener("click", () => {
      specificLayer.style.transform = "translateX(100%)";
      parentApartado.style.width = "50%";
    });
  });
});
