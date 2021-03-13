console.log(matches.matches)
for (let i = 0; i < matches.matches.length; i++){
    console.log(matches.matches[i].homeTeam.name);
}
/* var fila = document.createElement('tr')
    for (let j = 0; j < 4; j++){
    console.log(matches.matches[j]);

console.log(matches)*/

//Creo una lista con la informacion que saco del json

//cojo la informacion de matches completa de datos que quiero, en este for
for (let t=0; t<matches.matches.length;t++){
    matches.matches[t].utcDate
    matches.matches[t].homeTeam.name
    matches.matches[t].homeTeam.id
    matches.matches[t].score.fullTime.homeTeam + " - " + matches.matches[t].score.fullTime.awayTeam,
    matches.matches[t].homeTeam.id
    matches.matches[t].awayTeam.name

}


//Obtengo referencia del elemento table y tbody

var tbody = document.getElementById("tablebody")
console.log(tbody)
//Creo variables en las filas (tr), introducco los datos de matches en la variable especificamente creada, y por ultimo asigno a fila como pariente de la variable.

for (var g = 0; g < matches.matches.length; g++) {
var fila = document.createElement("tr");

    var fecha = matches.matches[g].utcDate;
    var tiempo = document.createElement("td");
    tiempo.innerHTML = new Date(fecha).toLocaleString();
    fila.appendChild(tiempo);

    var equipolocal = document.createElement("td");
    equipolocal.innerText = matches.matches[g].homeTeam.name;
    fila.appendChild(equipolocal);

    var esc = document.createElement("td");
    var img = document.createElement("img");
    img.setAttribute("src", "https://crests.football-data.org/" + matches.matches[g].homeTeam.id + ".svg");
    img.className="escudo";
    esc.appendChild(img);
    fila.appendChild(esc);
    

    var resultado = document.createElement("td");
    resultado.textContent = matches.matches[g].score.fullTime.homeTeam + " - " + matches.matches[g].score.fullTime.awayTeam;
    fila.appendChild(resultado);
    resultado.className="resultadodatos";
    
    var esc = document.createElement("td");   
    var img = document.createElement("img");
    img.setAttribute("src", "https://crests.football-data.org/" + matches.matches[g].awayTeam.id + ".svg");
    img.className="escudo"
    esc.appendChild(img);
    fila.appendChild(esc);

    var visitante = document.createElement("td");
    visitante.textContent = matches.matches[g].awayTeam.name;
    fila.appendChild(visitante)

tbody.append(fila);

} 

