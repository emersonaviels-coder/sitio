// Demo de la página JavaScript (JS Vanilla)
const boton = document.getElementById("regar");
if (boton) {
  let riegos = 0;
  boton.addEventListener("click", function () { riegos++; boton.textContent = "Riegos: " + riegos; });
}
// Demo de la página jQuery
if (window.jQuery) {
  $("#mostrar").click(function () { $("#caja").fadeIn(); });
  $("#alternar").click(function () { $("#caja").slideToggle(); });
}
// Cuestionario: texto de la pregunta, opciones, índice correcto, explicación
const preguntas = [
  ["¿Qué rol cumple JavaScript en una página web?", ["Estructura", "Estilo", "Comportamiento"], 2, "HTML da estructura, CSS estilo y JS comportamiento."],
  ["Una variable sirve para guardar datos.", ["Verdadero", "Falso"], 0, "Por ejemplo, let nombre = \"Brota\"."],
  ["¿Qué símbolo usa jQuery para seleccionar elementos?", ["#", "$", "@"], 1, "La sintaxis básica es $(\"selector\")."],
  ["¿Cuál es un efecto típico de jQuery?", ["slideToggle", "stringify", "propagate"], 0, "slideToggle y fadeIn son efectos de jQuery."],
  ["jQuery es hoy imprescindible porque JavaScript moderno no puede hacer lo mismo.", ["Verdadero", "Falso"], 1, "JavaScript moderno hace casi todo sin librería."],
  ["En JSON, las claves deben ir entre…", ["Comillas dobles", "Paréntesis", "Sin símbolos"], 0, "JSON exige comillas dobles en las claves."],
  ["¿Qué hace Vercel con un sitio estático conectado a GitHub?", ["Lo borra", "Lo publica en una URL pública", "Compra el dominio"], 1, "Publica los archivos en cada commit y da una URL."],
  ["En blog.brota.org, ¿qué es \"blog\"?", ["TLD", "Subdominio", "Servidor DNS"], 1, "blog es el subdominio y .org es el TLD."]
];
const quiz = document.getElementById("quiz");
if (quiz) {
  preguntas.forEach(function (p, i) {
    const f = document.createElement("fieldset");
    f.className = "pregunta";
    f.innerHTML = "<legend>" + (i + 1) + ". " + p[0] + "</legend>" +
      p[1].map(function (o, j) { return '<label><input type="radio" name="p' + i + '" value="' + j + '"> ' + o + "</label>"; }).join("") +
      '<p class="fb"></p>';
    quiz.appendChild(f);
  });
  document.getElementById("revisar").addEventListener("click", function () {
    let aciertos = 0;
    preguntas.forEach(function (p, i) {
      const f = quiz.children[i], marcada = f.querySelector("input:checked");
      const bien = marcada && Number(marcada.value) === p[2];
      if (bien) aciertos++;
      f.className = "pregunta " + (bien ? "ok" : "mal");
      f.querySelector(".fb").textContent = (bien ? "Correcto. " : marcada ? "Incorrecto. " : "Sin responder. ") + p[3];
    });
    document.getElementById("nota").textContent = "Acertaste " + aciertos + " de " + preguntas.length + ".";
  });
}