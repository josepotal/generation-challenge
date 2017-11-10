/* populate Firebase DB with the json data with latitudes and longitudes*/

import data from './store_directory.json'
import database from './database';

const google = window.google

// loop to get lat/long to every address (delay appplied to avoid query limit)
let i = 0;
function getLatLong() {
    let id = i;
    let loc = geocodeAddress(data[i])
    let item = {
      ...data[i-1],
      loc: loc || [],
      id
    }

    if (++i < data.length) {
      setTimeout(getLatLong, 2000);
    }
    database.ref('/stores')
      .push(item)
}

export default getLatLong();

// function to decode addresses into latitudes and longitudes
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
      loc = []
  })
  return loc
}
