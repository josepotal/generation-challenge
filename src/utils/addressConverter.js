/* populate Firebase DB with the json data with latitudes and longitudes */
import data from './store_directory.json';
import database from './database';

const { google } = window;

// function to decode addresses into latitudes and longitudes
let loc = [];
function geocodeAddress(item) {
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: item.Address }, (results, status) => {
    if (status === google.maps.GeocoderStatus.OK) {
      const lat = results[0].geometry.location.lat();
      const lng = results[0].geometry.location.lng();
      loc = [lat, lng];
      return;
    }

    if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
      // eslint-disable-next-line
      return 'exceeded';
    }

    loc = [];
  });
  return loc;
}

// loop to get lat/long to every address (delay appplied to avoid query limit)
let i = 0;
function getLatLong() {
  const id = i;
  loc = geocodeAddress(data[i]);
  const item = {
    ...data[i - 1],
    loc: loc || [],
    id,
  };
  // eslint-disable-next-line
  if (++i < data.length) {
    setTimeout(getLatLong, 2000);
  }
  database.ref('/stores').push(item);
}

export default getLatLong();
