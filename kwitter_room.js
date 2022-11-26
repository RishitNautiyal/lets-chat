
const firebaseConfig = {
    apiKey: "AIzaSyDgJx7q9Cnm1cUMOTbTQ17PphpiNE-rEbM",
    authDomain: "kwitter-23ad9.firebaseapp.com",
    databaseURL: "https://kwitter-23ad9-default-rtdb.firebaseio.com",
    projectId: "kwitter-23ad9",
    storageBucket: "kwitter-23ad9.appspot.com",
    messagingSenderId: "417673458663",
    appId: "1:417673458663:web:95cce5f8bc2a8fac058342"
  };
  firebase.initializeApp(firebaseConfig)


  user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="WELCOME"+user_name+"!";


function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child("room_name").update({
purpose:"adding room name"
});
localStorage.setItem("room_name",Room_name);
window.location="kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) {
                childKey  = childSnapshot.key;
     Room_names = childKey;
console.log("ROOM NAME-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"></div><hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();



function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";




}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
window.location="index.html";






}




