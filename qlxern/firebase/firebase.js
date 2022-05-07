import * as firebase from 'firebase';
import 'firebase/firestore';
// const firebaseConfig = {
//   apiKey: 'AIzaSyCm17eiXEaSRnAsMXGYmwlELcXPETLdZh4',
//   authDomain: 'quanlysach-f234d.firebaseapp.com',
//   projectId: 'quanlysach-f234d',
//   databaseURL: 'https://quanlysach-f234d-default-rtdb.firebaseio.com/',
//   storageBucket: 'quanlysach-f234d.appspot.com',
//   messagingSenderId: '66938153609',
//   appId: '1:66938153609:web:d49dcb7af5192611643458',
//   measurementId: 'G-JHC2GFR0ZG',
// };
const firebaseConfig = {
  apiKey: "AIzaSyAX-24Q-4WoZgcjvVvamsJTRrFp9Djs11U",
  authDomain: "qlxern.firebaseapp.com",
  databaseURL: "https://qlxern-default-rtdb.firebaseio.com",
  projectId: "qlxern",
  storageBucket: "qlxern.appspot.com",
  messagingSenderId: "772924205568",
  appId: "1:772924205568:web:d570f789ae9a4fd2d986e5",
  measurementId: "G-ERC6N7VV5H"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
