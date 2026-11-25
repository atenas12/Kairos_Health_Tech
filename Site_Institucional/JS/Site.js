/* ==========================
   MENU RESPONSIVO
========================== */

const botao_menu = document.querySelector(".botao_menu");
const menu_navegacao = document.querySelector(".menu_navegacao");

if (botao_menu && menu_navegacao) {
    botao_menu.addEventListener("click", function () {
        const menu_aberto = menu_navegacao.classList.toggle("aberto");

        botao_menu.setAttribute("aria-expanded", menu_aberto);
        botao_menu.setAttribute(
            "aria-label",
            menu_aberto ? "Fechar menu" : "Abrir menu"
        );
    });

    menu_navegacao.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            menu_navegacao.classList.remove("aberto");
            botao_menu.setAttribute("aria-expanded", "false");
            botao_menu.setAttribute("aria-label", "Abrir menu");
        });
    });
}

/* ==========================
   FORMULÁRIO DE CONTATO
========================== */

const formulario_contato = document.querySelector("#formulario_contato");
const mensagem_formulario = document.querySelector("#mensagem_formulario");

if (formulario_contato && mensagem_formulario) {
    formulario_contato.addEventListener("submit", function (evento) {
        evento.preventDefault();

        if (!formulario_contato.checkValidity()) {
            formulario_contato.reportValidity();
            return;
        }

        mensagem_formulario.textContent =
            "Os campos foram validados. O envio real será habilitado após a integração com o serviço de e-mail.";
    });
}
