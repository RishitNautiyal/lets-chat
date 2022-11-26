//YOUR FIREBASE LINKS
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

  room_name=localStorage.getItem("room_name");





function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

name=message_data['name'];
message=message_data['message'];
like=message_data['like'];

name_tag="<h4> "+ name +"<img class='user_tick' src='tick.png'>";
message_tag="<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
r=name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=r;




    } });  }); }
getData();









function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0

    });
    document.getElementById("msg").value="";
    
}


function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
window.location="index.html";






}
