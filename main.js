// Your web app's Firebase configuration
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

 firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.href="register.html";
  } else {
    // No user is signed in.
  }
});
