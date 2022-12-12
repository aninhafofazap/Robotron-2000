// const subtrair = document.querySelector("#subtrair");
// const somar = document.querySelector("#somar");
// const braco = document.querySelector("#braco");

// const controle = document.querySelectorAll(".controle-ajuste");


const controle = document.querySelectorAll("[data-controle]");

// Função para pegar todos os elementos
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        // console.log()
    })
})

// Função ao clicar no botão
// somar.addEventListener("click", () => { manipulaDados("somar") })
// subtrair.addEventListener("click", () => { manipulaDados("subtrair") })


// Função para manipular os dados ao clicar no botão
function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    // console.log()

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

// 