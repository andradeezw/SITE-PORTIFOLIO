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

VANTA.DOTS({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xe0989,
  color2: 0x20ffb0,
  backgroundColor: 0x20202,
  size: 1.80,
  spacing: 22.00,
  showLines: false
})