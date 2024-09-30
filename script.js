let posiblesExcusas = {
    culpable: ["a", "b"],
    como: ["a", "b"],
    objetoDestrozado: ["a", "b"],
    cuando: ["a", "b"]
};

function generadorExcusas (){
    let excusa = "";    
    for (let i = 0; i < posiblesExcusas.length; i++){
            let numeroAleatorio = Math.floor(Math.random() * posiblesExcusas[i].length);
            excusa += posiblesExcusas[i][numeroAleatorio];
    }
    return excusa;
}

generadorExcusas();