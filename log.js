credentials();
signout();

function credentials(){
 var firebaseConfig = {
   apiKey: "AIzaSyC1Zf_VsRWkrlrxLQDNYBJ1Ait1UCcqhIs",
   authDomain: "online-examination-syste-b1886.firebaseapp.com",
   databaseURL: "https://online-examination-syste-b1886.firebaseio.com",
   projectId: "online-examination-syste-b1886",
   storageBucket: "online-examination-syste-b1886.appspot.com",
   messagingSenderId: "642625682916",
   appId: "1:642625682916:web:722a09d9fea544bd4a1bf1",
   measurementId: "G-98L1EW8YGE"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();
}

function signout(){
 firebase.auth().signOut().then(function() {
   // Sign-out successful.
 }).catch(function(error) {
   // An error happened.
 });
}
function login(){

  var email=document.getElementById("email").value;
  var password=document.getElementById("password").value;

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
firebase.auth().onAuthStateChanged(function(user) {
 if (user) {
   window.location.href="quiz.html";
 } else {
   // No user is signed in.
 }
});
}
