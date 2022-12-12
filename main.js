const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste");

// Função ao clicar no botão
somar.addEventListener("click", () => { manipulaDados("somar") })
subtrair.addEventListener("click", () => { manipulaDados("subtrair") })


// Função para manipular os dados ao clicar no botão
function manipulaDados(operacao) {
    if (operacao === "subtrair") {
        braco.value = parseInt(braco.value) - 1;
    } else {
        braco.value = parseInt(braco.value) + 1;
    }
}