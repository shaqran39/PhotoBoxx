var inputEmail =document.getElementById("inputEmail");
var submitBtn =document.getElementById("submitBtn");

function submitClick()
{
  window.alert("You have successfully subscribed");
}




firebase.auth().onAuthStateChanged(function(user) {
 if (user) {
   // User is signed in.

   //document.getElementById("user_div").style.display = "block";
   document.getElementById("login_div").style.display = "none";
   document.getElementById("file_div").style.display = "block";

   var user = firebase.auth().currentUser;

   //document.location.href="./remarks.html";

   if(user != null){

     var email_id = user.email;
     document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

   }

 } else {
   // No user is signed in.

   //document.getElementById("user_div").style.display = "none";
   document.getElementById("login_div").style.display = "block";
   document.getElementById("file_div").style.display = "none";

 }
});
