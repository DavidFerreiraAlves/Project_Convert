//Cotação de moedas do dia.
const USD = 4.86;
const EUR = 5.27;
const GBP = 6.25;
const JPY = 0.04;
const AUD = 3.67;
const CAD = 3.76;
const CHF = 5.01;
const CNY = 0.63;

// Obtendo os elementos do formulário.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");


// Manipulando o input amount para receber apenas números.
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, "");
});


form.onsubmit = (event) => {
    event.preventDefault();

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$");
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
        case "JPY":
            convertCurrency(amount.value, JPY, "JP¥");
            break;
        case "AUD":
            convertCurrency(amount.value, AUD, "AU$");
            break;
        case "CAD":
            convertCurrency(amount.value, CAD, "C$");
            break;
        case "CHF":
            convertCurrency(amount.value, CHF, "₣");
            break;
        case "CNY":
            convertCurrency(amount.value, CNY, "¥");
            break;
    }
}

//Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
    try {
        // Exibindo a cotação da moeda selecionada.
        description.textContent = ` ${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Aplica a classe que exibe o footer para mostrar o resultado.
        footer.classList.add("show-result");
    } catch (error) {
        // Remove a classe que exibe o footer para mostrar o resultado.
        footer.classList.remove("show-result");

        console.log(error);
        alert ("não foi possível converter. Tente novamente.");
    }
}

// Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", { 
        style: "currency", 
        currency: "BRL", });
}

