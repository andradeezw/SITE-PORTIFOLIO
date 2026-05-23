const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.querySelector("#nome").value;

    const mensagem = document.querySelector("#mensagem").value;

    const telefone = "5585992255730";

    const texto = `Olá, me chamo ${nome}. ${mensagem}`;

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

});