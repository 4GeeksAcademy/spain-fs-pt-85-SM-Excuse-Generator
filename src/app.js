window.onload = function() {
  generadorExcusas();
};

let posiblesExcusas = {
  culpable: [
    "Mi perro ",
    "Mi abuelo ",
    "Mi coche ",
    "Mi delegado de clase favorito ",
    "Mi casa ",
    "Mi orangután "
  ],
  como: [
    "se ha comido ",
    "ha sufrido una combustión espontánea sobre ",
    "ha defecado profusamente sobre ",
    "se ha tumbado sobre ",
    "ha empezado a hacer una plancha abdominal sobre ",
    "ha ascendido a un plano superior cuando se encontraba sobre "
  ],
  objetoDestrozado: [
    "mis deberes ",
    "mi pierna ",
    "mi ordenador ",
    "el ladrillo de mi madre ",
    "Francia ",
    "los planos de mi edificio ",
    "la comisaría de policías de al lado de mi casa "
  ],
  cuando: [
    "ayer.",
    "esta madrugada.",
    "desde los albores de la humanidad.",
    "cuando llegue a casa.",
    "cuando mi planta, Eustaquio, se teleportó a Bielorrusia."
  ]
};

function generadorExcusas() {
  let excusa = "";
  excusa +=
    posiblesExcusas.culpable[
      Math.floor(Math.random() * posiblesExcusas.culpable.length)
    ];
  excusa +=
    posiblesExcusas.como[
      Math.floor(Math.random() * posiblesExcusas.como.length)
    ];
  excusa +=
    posiblesExcusas.objetoDestrozado[
      Math.floor(Math.random() * posiblesExcusas.objetoDestrozado.length)
    ];
  excusa +=
    posiblesExcusas.cuando[
      Math.floor(Math.random() * posiblesExcusas.cuando.length)
    ];

  document.getElementById("generadorExcusas").innerText = excusa;
}
