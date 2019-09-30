// Your web app's Firebase configuration
//  var firebaseConfig = {
//    apiKey: "AIzaSyCNwuHNu_BfFiHiXM93WLoAKUiZNhQGAqs",
//    authDomain: "photobox-2861c.firebaseapp.com",
//    databaseURL: "https://photobox-2861c.firebaseio.com",
//    projectId: "photobox-2861c",
//    storageBucket: "",
//    messagingSenderId: "260905480237",
//    appId: "1:260905480237:web:bb66731094463aa68e48a4",
//    measurementId: "G-EW2THT9VYB"
//  };
// firebase.initializeApp(firebaseConfig);

document.getElementById("sub-btn").addEventListener("submit", () => {
  var userEmail = document.getElementById("inputEmail").value;
  var userPass = document.getElementById("inputPassword").value;
  console.log(userEmail, userPass);

})
function login(){

  var userEmail = document.getElementById("inputEmail").value;
  var userPass = document.getElementById("inputPassword").value;
  console.log(userEmail, userPass);

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(() => {
    console.log('signed in');
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    //document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    document.location.href="./remarks.html";

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    //document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});


function logout(){
  firebase.auth().signOut();
  document.location.href="./demo.html";
}
login();
