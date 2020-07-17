const cityDB = require('all-the-cities')
const distanceFrom = require('distance-from')

const getCitiesPopGreater = function(number){
    const largerCities = cityDB.filter(function(it){
      var keep = it.population > number
      return keep
    })
    
     return largerCities
}
   var tenM = getCitiesPopGreater(10000000)
   //console.log(tenM)






//distance
var texasCity = allTheCities.find(function(item){
    return item.name.toLowerCase() === 'texas city'.toLowerCase()
})
var texasCoord = texasCity.loc.coordinates

var chicago = allTheCities.find(function(item){
    return item.name.toLowerCase() === 'chicago'.toLowerCase()
})
//console.log(chicago)
var chicagoCoord = chicago.loc.coordinates

var distance = distanceFrom(texasCoord).to(chicagoCoord).in('km')
//console.log(distance)


//distance function
const findDistance = function(queryCities){
   const qcs = cityDB.find(function(it){
       var keep = it.name === queryCities
       return keep
   })
      return qcs
}
const shanghai = findDistance('Chengdu')
const guangzhou = findDistance('Guangzhou')
console.log(shanghai, guangzhou)