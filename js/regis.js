// Your web app's Firebase configuration
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


document.getElementById('contactForm').addEventListener('submit', submitForm); // Listen for form submit

var msgref=firebase.database().ref('messages');//creats a table in the database named messages



function resetForm() {
    document.getElementById('inputUserame').value = "";
    document.getElementById('inputEmail').value = "";
    document.getElementById('inputPassword').value = "";
    inputConfirmPassword  document.getElementById('  inputConfirmPassword').value = "";

}


function submitForm(e)
{
  e.preventDefault();//prevents html from doing any default work upon getting an event

  var name= getInputVal('inputUserame');

  var email= getInputVal('inputEmail');

  //inputPassword
  var pass= getInputVal('inputPassword');

  //var message= getInputVal('message');

  saveMessage(name,email,pass);

  /*document.querySelector('.alert').style.display='block';

  setTimeout(function(){
    document.querySelector('.alert').style.display='none';
  },3000);*/

  document.getElementById('contactForm').reset();

  setTimeout(function(){
    window.alert("cool");
    document.location.href="./index.html";
  },2000);

}

function getInputVal(id)
{

  return document.getElementById(id).value; //returning the value of designated id

}

function saveMessage(name,email,pass)
{
  var newmsgref=msgref.push();

  newmsgref.set({
    name: name,
    email:email
  });


/*window.alert("cool");
  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...

      window.alert("error" +errorMessage);
    });
*/

}
