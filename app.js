async function converter() {
    const valor = document.getElementById("valor").value;
    const origem = document.getElementById("moedaOrigem").value;
    const destino = document.getElementById("moedaDestino").value;
    const resultado = document.getElementById("resultado");

    if (!valor) {
        resultado.textContent = "Digite um valor válido!";
        return;
    }

    try {
        // usa a moeda de origem escolhida
        const url = `https://api.exchangerate-api.com/v4/latest/${origem}`;
        const resposta = await fetch(url);
        const dados = await resposta.json();

        const taxa = dados.rates[destino];
        const convertido = (valor * taxa).toFixed(2);

        // mostra na tela
        resultado.textContent = `${valor} ${origem} = ${convertido} ${destino}`;

    } catch (erro) {
        resultado.textContent = "Erro ao buscar taxas!";
    }
}
