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
