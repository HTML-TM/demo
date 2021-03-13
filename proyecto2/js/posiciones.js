for (let i = 0; i < standing.standings.length; i++){

//cojo la informacion de standing completa de datos que quiero, en este for
for (let t=0; t<standing.standings.length;t++){
    standing.standings[t].table[t].position
    standing.standings[t].table[t].team.id
    standing.standings[t].table[t].team.name
    standing.standings[t].table[t].playedGames;
    standing.standings[t].table[t].form;
    standing.standings[t].table[t].won;
    standing.standings[t].table[t].draw;
    standing.standings[t].table[t].lost;
    standing.standings[t].table[t].points;
    standing.standings[t].table[t].goalsFor;
    standing.standings[t].table[t].goalsAgainst;
    standing.standings[t].table[t].goalsDifference;
}


//Obtengo referencia del elemento table y tbody

var tbody = document.getElementById("tablebody")
console.log(tbody)

//Creo variables en las filas (tr), introducco los datos de matches en la variable especificamente creada, y por ultimo asigno a fila como pariente de la variable.



for (var g = 0; g < standing.standings[0].table.length; g++) {
    var fila = document.createElement("tr");
        for(var h = 0; h < 12; h++){
        var columna = document.createElement("td");
    }
        var rank = document.createElement("td");
        rank.textContent = standing.standings[0].table[g].position;
        fila.appendChild(rank)                                     
        
        var esc = document.createElement("td");
       
        var img = document.createElement("img");
        img.setAttribute("src", "https://crests.football-data.org/" + standing.standings[0].table[g].team.id + ".svg");
        img.className="escudo"
        esc.appendChild(img)
        fila.appendChild(esc)
        var equipo = document.createElement("td")
        equipo.textContent = standing.standings[0].table[g].team.name;
        fila.appendChild(equipo)
        var Psjs = document.createElement("td")
        Psjs.textContent = standing.standings[0].table[g].playedGames,
        fila.appendChild(Psjs)
        var vict = document.createElement("td")
        vict.textContent = standing.standings[0].table[g].won,
        fila.appendChild(vict)
        var draw = document.createElement("td")
        draw.textContent = standing.standings[0].table[g].draw,
        fila.appendChild(draw)
        var perd = document.createElement("td")
        perd.textContent = standing.standings[0].table[g].lost,
        fila.appendChild(perd)
        var gola = document.createElement("td")
        gola.textContent = standing.standings[0].table[g].goalsFor,
        fila.appendChild(gola)
        var golc = document.createElement("td")
        golc.textContent = standing.standings[0].table[g].goalsAgainst,
        fila.appendChild(golc)
        var gold = document.createElement("td")
        gold.textContent = standing.standings[0].table[g].goalDifference,
        fila.appendChild(gold)
        var punt = document.createElement("td")
        punt.textContent = standing.standings[0].table[g].points;
        fila.appendChild(punt)

        var form = document.createElement("td")
        var ultimos5 = standing.standings[0].table[g].form;
        ultimos5 = ultimos5.replaceAll("W", "✔️")
        ultimos5 = ultimos5.replaceAll("D", "➖");
        ultimos5 = ultimos5.replaceAll("L", "❌");
        form.append(ultimos5)
        fila.append(form)

        tbody.appendChild(fila);
    } 

//obtengo referencia de la imagen
    // let image = document.createElement("img");

    // image.setAttribute("src", "https://crests.football-data.org/558.svg");
    // image.setAttribute("alt", "escudo equipo");
    // console.log(image);

    // fila.appendChild(image);
}