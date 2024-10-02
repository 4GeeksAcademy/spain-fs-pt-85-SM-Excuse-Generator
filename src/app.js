window.onload = function() {
  generadorExcusas();
};

let culpable = [
  "Mi perro ",
  "Mi abuelo ",
  "Mi coche ",
  "Mi delegado de clase favorito ",
  "Mi casa ",
  "Mi orangután "
];
let como = [
  "se ha comido ",
  "ha sufrido una combustión espontánea sobre ",
  "ha defecado profusamente sobre ",
  "se ha tumbado sobre ",
  "ha empezado a hacer una plancha abdominal sobre ",
  "ha ascendido a un plano superior cuando se encontraba sobre "
];
let objetoDestrozado = [
  "mis deberes ",
  "mi pierna ",
  "mi ordenador ",
  "el ladrillo de mi madre ",
  "Francia ",
  "los planos de mi edificio ",
  "la comisaría de policías de al lado de mi casa "
];
let cuando = [
  "ayer.",
  "esta madrugada.",
  "desde los albores de la humanidad.",
  "cuando llegue a casa.",
  "cuando mi planta, Eustaquio, se teleportó a Bielorrusia."
];

function generadorExcusas() {
  let excusa = "";
  excusa += culpable[Math.floor(Math.random() * culpable.length)];
  excusa += como[Math.floor(Math.random() * como.length)];
  excusa +=
    objetoDestrozado[Math.floor(Math.random() * objetoDestrozado.length)];
  excusa += cuando[Math.floor(Math.random() * cuando.length)];

  document.getElementById("generadorExcusas").innerHTML = excusa;
}
