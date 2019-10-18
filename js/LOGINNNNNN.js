var firebaseConfig = {
   apiKey: "AIzaSyCNwuHNu_BfFiHiXM93WLoAKUiZNhQGAqs",
   authDomain: "photobox-2861c.firebaseapp.com",
   databaseURL: "https://photobox-2861c.firebaseio.com",
   projectId: "photobox-2861c",
   storageBucket: "photobox-2861c.appspot.com",
   messagingSenderId: "260905480237",
   appId: "1:260905480237:web:bb66731094463aa68e48a4",
   measurementId: "G-EW2THT9VYB"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

document.getElementById('sub-btn').addEventListener('click',x=>{
  x.preventDefault();
    var userEmail = document.getElementById('inputEmail').value;
    var userPass = document.getElementById('inputPassword').value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(e=>{

    window.location.href="index.html"
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);

      // ...
    });

});

/*

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("inputEmail").style.display = "block";
    document.getElementById("").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}

*/
