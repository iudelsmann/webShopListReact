import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBpQphNTvo5q62QINveiEkCzd2_rR5qEEc',
  authDomain: 'shoplist-dev-2640d.firebaseapp.com',
  databaseURL: 'https://shoplist-dev-2640d.firebaseio.com',
  projectId: 'shoplist-dev-2640d',
  storageBucket: 'shoplist-dev-2640d.appspot.com',
  messagingSenderId: '831831945383',
};

export const firebaseImpl = firebase.initializeApp(config);
export const db = firebase.firestore(firebaseImpl);

const settings = { timestampsInSnapshots: true };
db.settings(settings);
db.enablePersistence();
