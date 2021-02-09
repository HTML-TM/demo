console.log(matches.matches)
for (let i = 0; i < matches.matches.length; i++){
    console.log(matches.matches[i].homeTeam.name);
}
/* var fila = document.createElement('tr')
    for (let j = 0; j < 4; j++){
    console.log(matches.matches[j]);

console.log(matches)*/

//Creo una lista con la informacion que saco del json


for (let t=0; t<matches.matches.length;t++){
    matches.matches[t].utcDate
    matches.matches[t].homeTeam.name, 
    matches.matches[t].score.fullTime.homeTeam + " - " + matches.matches[t].score.fullTime.awayTeam,
    matches.matches[t].awayTeam.name

}


//Obtengo referencia del elemento table y tbody

var tbody = document.getElementById("tablebody")
console.log(tbody)
//Creo filas (tr) y las meto en tbody

for (var g = 0; g < matches.matches.length; g++) {
var fila = document.createElement("tr");

    var equipolocal = document.createElement("td");
    equipolocal.textContent = matches.matches[g].homeTeam.name;
    fila.appendChild(equipolocal)
    var visitante = document.createElement("td")
    visitante.textContent = matches.matches[g].awayTeam.name;
    fila.appendChild(visitante)
    var resultado = document.createElement("td")
    resultado.textContent = matches.matches[g].score.fullTime.homeTeam + " - " + matches.matches[g].score.fullTime.awayTeam;
    fila.appendChild(resultado)
    var tiempo = document.createElement("td")
    tiempo.textContent = matches.matches[g].utcDate
    fila.appendChild(tiempo)

    // var textoCelda = document.createTextNode(matchesinfo[i][j]);         //ESTOY COGIENDO BIEN LA VALUE DE LA KEY??????
    //celda.appendChild(textoCelda);

tbody.append(fila);

} 

