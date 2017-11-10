import database from './database';

let stores = []
function getStores() {
  database.ref('/stores').on('value', snap => {
    stores = snap.val()
    const cleanStores = Object.values(stores)
    localStorage.setItem('cleanStores', JSON.stringify(cleanStores))
  })
}

export default getStores();
