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

var ref = firebase.database().ref("bildeurler/");
var data;
var arr_data = [];

var photoList = document.getElementById("photoList");

ref.on(
  "value",
  function(snapshot) {
    data = snapshot.val();
    // console.log(data);
    populateArray();
    displayPhotos();
  },
  function(error) {
    console.log("Error: " + error.code);
  }
);

function populateArray() {
  for (var i in data) {
    // console.log();
    arr_data.push(data[i].photo_url);
  }
  console.log(arr_data);
}

function displayPhotos() {
  for (var i = 0; i < arr_data.length; i++) {
    var eachElement = document.createElement("div");
    eachElement.setAttribute("class", "col-lg-3 col-md-4 col-6");
    var eachLink = document.createElement("a");
    eachLink.setAttribute("class", "d-block mb-4 h-100");
    var eachPic = document.createElement("img");
    eachPic.setAttribute("class", "img-fluid img-thumbnail");
    eachPic.setAttribute("src", arr_data[i]);
    eachPic.style.maxWidth = "400";
    eachLink.appendChild(eachPic);
    eachElement.appendChild(eachLink);
    photoList.appendChild(eachElement);
  }
}
