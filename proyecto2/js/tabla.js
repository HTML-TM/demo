let partidos = matches.matches;

function stats(partidos) {
  let estadisticas = [];

  for (let i = 0; i < partidos.length; i++) {
    let idHomeTeam = partidos[i].homeTeam.id;
    let golesCasa = partidos[i].score.fullTime.homeTeam;
    let homeTeam = partidos[i].homeTeam.name;
    let visitante = partidos[i].awayTeam.name
    let idVisitante = partidos[i].awayTeam.id
    let golesVisitante = partidos[i].score.fullTime.awayTeam;
    console.log(homeTeam);

    if (partidos[i].status === "FINISHED") {
      // buscar objeto con el id del homeTeam del partido

      if (estadisticas.length > 0) {
        let equipoHome = estadisticas.find(
          (equipo) => equipo.id === idHomeTeam
        );
        // console.log(_id);

        if (equipoHome) {
          // actualizar goals y matches del objeto

          equipoHome.goals = equipoHome.goals + partidos[i].score.fullTime.homeTeam;
          equipoHome.matches = equipoHome.matches + 1;

        } else {
          estadisticas.push({
            id: idHomeTeam,
            matches: 1,
            name: homeTeam,
            goals: golesCasa,
          }); // introducir objeto nuevo en array estadisticas
        }
      } else {
        console.log("El array estadísticas está vacío");
        estadisticas.push({
          id: idHomeTeam,
          matches: 1,
          name: homeTeam,
          goals: golesCasa,
        }); // introducir objeto nuevo en array estadisticas
      }
       let teamAway = estadisticas.find(
        (equipo) => equipo.id === idVisitante);

        if (teamAway) {
          teamAway.goals = teamAway.goals + partidos[i].score.fullTime.awayTeam;
          teamAway.matches = teamAway.matches + 1;
        } else {
          estadisticas.push({
            id: idVisitante,
            matches: 1,
            name: visitante,
            goals: golesVisitante,
          });
        }
      
    }

    
  }

  for (let k = 0; k < estadisticas.length ; k++) {
    let tablalist = estadisticas[k].goals / estadisticas[k].matches;
    
    medialist {
      keys: ---;
    }


  
  }
  
    
}

stats(partidos);
