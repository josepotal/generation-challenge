// we import the json data locally
import data from 'json!../../store_directory.json'

console.log(data.items.length)
let sliced1Data = data.items.slice(269, 273);
console.log(sliced1Data)
let newArray = []

sliced1Data.map((item, index) => {
  //console.log(geocodeAddress(item))
  const loc = geocodeAddress(item)
  console.log(loc)
  item = {...item, loc}
  newArray.push(item)
})
console.log(newArray)

export default data;


function geocodeAddress(item){
  var geocoder = new google.maps.Geocoder();
  var loc=[];
    geocoder.geocode({ 'address': item.Address }, (results, status) => {

      if(status === google.maps.GeocoderStatus.OK) {
        let lat=results[0].geometry.location.lat();
        let lng=results[0].geometry.location.lng();
        loc.push(lat)
        loc.push(lng)
        return;
      }
      // } else {
      //   if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
      //     console.log('exceeded')
      //   }
      // }
  })
  return loc
}

// var id = setInterval(function(){
//   console.log('time')
// }, 1000)


//========================================
// we import the json data locally
// import data from 'json!../../mini-store_directory.json'
// console.log(data.items[0].Address)
//
// const item = data.items[0]
// console.log(item)
// var loc = codeAddress(data.items[0].Address.toLowerCase())
//
// console.log(loc)
//
// export default data;

// // helper function to convert address to latitude and longitude
// function codeAddress(address) {
//     var geocoder = new google.maps.Geocoder();
//     var loc=[];
//
//     // next line creates asynchronous request
//     geocoder.geocode( { 'address': address}, function(results, status) {
//       // and this is function which processes response
//       if (status == google.maps.GeocoderStatus.OK) {
//         loc[0]=results[0].geometry.location.lat();
//         loc[1]=results[0].geometry.location.lng();
//
//         alert( loc ); // the place where loc contains geocoded coordinates
//
//       } else {
//         alert('Geocode was not successful for the following reason: ' + status);
//       }
//     });
//
//     return loc;
// }
