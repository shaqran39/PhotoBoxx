//console.log('sdasdas');
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



/*
console.log('chklogin');

const loginForm = document.querySelector('#signin-form');
//loginForm.reset();
loginForm.addEventListener('submit', (e) => {
  //  e.preventDefault();
    const email = loginForm['inputEmail'].value;
    const password = loginForm['inputPassword'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
    }).catch(function (error) { // * Edited here
              var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
    });;
}

document.getElementById('signin-Form').reset();

setTimeout(function(){
  window.alert("cool");
  document.location.href="./index.html";
},2000);
);

*/

/*
  var user = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    //document.getElementById("user_div").style.display = "block";
     //document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    document.location.href="./index.html";



    if(user != null){

      var email_id = user.email;
      //document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;



    }

  } else {
    // No user is signed in.

    //document.getElementById("user_div").style.display = "none";
    //document.getElementById("login_div").style.display = "block";

	 //document.location.href="./remarks.html";

  }
});
*/
function login(){

  var userEmail = document.getElementById("inputEmail").value;
  var userPass = document.getElementById("inputPassword").value;

	//document.location.href="./remarks.html";
window.alert("samihat moda");

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

  document.getElementById('sigin-form').reset();

  setTimeout(function(){
    window.alert("cool");
    document.location.href="./index.html";
  },2000);




}



function getInputVal(id)
{

  return document.getElementById(id).value; //returning the value of designated id

}

function logout(){
  firebase.auth().signOut();
  document.location.href="./signin.html";
}
