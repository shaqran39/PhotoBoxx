console.log('sdasdas');
var firebaseConfig = {
  apiKey: "AIzaSyCNwuHNu_BfFiHiXM93WLoAKUiZNhQGAqs",
  authDomain: "photobox-2861c.firebaseapp.com",
  databaseURL: "https://photobox-2861c.firebaseio.com",
  projectId: "photobox-2861c",
  storageBucket: "",
  messagingSenderId: "260905480237",
  appId: "1:260905480237:web:bb66731094463aa68e48a4",
  measurementId: "G-EW2THT9VYB"
};
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const db = firebase.firestore();
