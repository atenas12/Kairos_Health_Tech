// MENU PARA TELAS MENORES
const botao_menu = document.querySelector("#botao_menu");
const menu_principal = document.querySelector("#menu_principal");

if (botao_menu && menu_principal) {
    botao_menu.addEventListener("click", function () {
        const menu_aberto = menu_principal.classList.toggle("aberto");

        botao_menu.setAttribute("aria-expanded", menu_aberto);
        botao_menu.setAttribute(
            "aria-label",
            menu_aberto ? "Fechar menu" : "Abrir menu"
        );
    });

    const links_menu = menu_principal.querySelectorAll("a");

    links_menu.forEach(function (link) {
        link.addEventListener("click", function () {
            menu_principal.classList.remove("aberto");
            botao_menu.setAttribute("aria-expanded", "false");
            botao_menu.setAttribute("aria-label", "Abrir menu");
        });
    });
}

// ANO ATUAL NO RODAPÉ
const ano_atual = document.querySelector("#ano_atual");

if (ano_atual) {
    ano_atual.textContent = new Date().getFullYear();
}

