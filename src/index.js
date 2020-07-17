var allTheCities = require('all-the-cities')

var Chengdu = allTheCities.find (function(item){
   return (item.name.toUpperCase() === 'Chengdu'.toUpperCase())
    }
)
console.log(Chengdu)

//var cityinfo = function(targetCity){
  //  var list = []
    //for(){

    //}
//}


var population = function(requiredPopul){
    var citylist = []
    for(ii=0; ii<allTheCities.length; ii=ii+1){
      var city= allTheCities[ii]
      if(city.population<requiredPopul){
          citylist.push(city)
      }
    }
    return citylist
}
console.log(population(66666))

