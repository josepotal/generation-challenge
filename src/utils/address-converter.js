import data from './store_directory.json'

const google = window.google

/* Slicing data
  let sliced1Data = data.items.slice(269, 273);
  console.log(sliced1Data)
*/

let newArray = []

data.map((item, index) => {
  const loc = geocodeAddress(item)
  console.log(loc)
  item = {...item, loc}
  newArray.push(item)
})


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
       else {
        if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
          console.log('exceeded')
        }
      }
  })
  return loc
}
