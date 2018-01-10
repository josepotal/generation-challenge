import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCd417_8yxqfdd86YTQgQvol6ESOEIIhUc',
  authDomain: 'generation-a9f80.firebaseapp.com',
  databaseURL: 'https://generation-a9f80.firebaseio.com',
  projectId: 'generation-a9f80',
  storageBucket: '',
  messagingSenderId: '818437071588',
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
