class AI {
  playAITurn(player, cities, buildCity, buildArmy, attack) {
    //Choose strategy at random:
    //Expansionist (1): build lots of cities
    //Aggressive (2): choose target and attack them
    //Defensive (3): build lots of armies in cities

    //Expansionist
    //Build lots of cities
    //Build at least one army in each city
    //Attack a random weak target once a city has lots of armies
    
    //Aggressive
    //Build a few cities
    //Build one army in each
    //Build lots of armies in one city
    //Choose a target
    //Attack target's most undefended cities

    //Defensive
    //Build some cities
    //Build lots of armies in each city
    //Attack a random weak target once a city has lots of armies

    console.log("Playing AI turn: " + player.id)

    var ownedCities = cities.filter(function(c) {
      return c.owner === player.id
    })

    if (ownedCities.length === 0) {
      buildCity(player.id)
      return
    } else {
      for (var i = 0; i < cities.length; i++) {
        if (cities[i].owner === player.id && cities[i].armies === 0) {
          buildArmy(i)
          return
        }
      }
      buildCity(player.id)
      return
    }
  }
}

export default AI