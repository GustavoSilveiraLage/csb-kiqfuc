function revelarResposta() {
  var resposta = document.querySelector("#resposta");
  resposta.classList.toggle("blur");
}

function proximaPergunta(proximaPergunta) {
  var pergunta = document.querySelector("#cardContainer");
  pergunta.innerHTML = "";

  var cardDiv = document.createElement("div");
  cardDiv.classList.add(
    "card_total",
    "animate__animated",
    "animate__bounceInDown"
  );

  cardDiv.innerHTML = `<div class="card_cabecalho centralizar">
  <!--Card pergunta-->
  <h1 class="card_pergunta">${proximaPergunta.title}?</h1>
</div>

<div id="resposta" class="card_resposta blur">
  <!--Card resposta-->
  <p>
   ${proximaPergunta.description}
  </p>
</div>`;

  pergunta.appendChild(cardDiv);
}

function buscarInfo() {
  fetch("https://flash.quickstaart.com/random")
    .then(function (resultado) {
      return resultado.json();
    })
    .then(function (resultadoJson) {
      proximaPergunta(resultadoJson);
    });
}

window.addEventListener("load", buscarInfo);
