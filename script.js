const botaoTema = document.querySelector("#botao-tema");
const rotuloTema = document.querySelector("#rotulo-tema");
const iconeTema = botaoTema.querySelector("span");

botaoTema.addEventListener("click", function () {
  const temaClaroAtivo = document.body.classList.toggle("tema-claro");

  if (temaClaroAtivo) {
    iconeTema.textContent = "☾";
    rotuloTema.textContent = "Modo escuro";
    botaoTema.setAttribute("aria-label", "Ativar modo escuro");
    botaoTema.setAttribute("title", "Ativar modo escuro");
  } else {
    iconeTema.textContent = "☀";
    rotuloTema.textContent = "Modo claro";
    botaoTema.setAttribute("aria-label", "Ativar modo claro");
    botaoTema.setAttribute("title", "Ativar modo claro");
  }
});