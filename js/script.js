// seleciona o banner e o botão Conhecer
const banner = document.querySelector("#intro-banner");
const botaoBanner = document.querySelector("#entrar-site");

botaoBanner.addEventListener("click", () => {
    banner.classList.add("is-opening");

    document.body.classList.remove("intro-active"); // Libera a rolagem da página

    banner.addEventListener("transitionend", (event) => { // quando a transição do CSS termina, o evento é chamado
        if (event.propertyName === "transform") { 
            banner.inert = true; // caso a transição já tenha ocorrido, o banner se torna inerte
        }
    }, {once: true}); // Aqui o listener é removido automaticamente depois que o evento for atendido uma vez
})