/* populate Firebase DB with the json data with latitudes and longitudes*/

import data from './store_directory.json'
import database from './database';

// testing small chunks
const dataSlice = data.slice(0,10)

const google = window.google

// loop to get lat/long to every address (delay appplied to avoid query limit)
let i = 0;
function getLatLong() {
    let id = i;
    let loc = geocodeAddress(dataSlice[i])

    if (loc === undefined) {
      loc = []
    }
    let item = {
      ...dataSlice[i],
      loc,
      id
    }
    if (i++ < dataSlice.length) {
        setTimeout(getLatLong, 500);
    }

    database.ref('/stores')
      .push(item)
}


export default getLatLong();

// address to decode addresses into latitudes and longitudes
let loc = [];
function geocodeAddress(item){
  const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': item.Address }, (results, status) => {
      if(status === google.maps.GeocoderStatus.OK) {
        let lat = results[0].geometry.location.lat();
        let lng = results[0].geometry.location.lng();
        loc = [lat, lng]
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
