// Your web app's Firebase configuration
credentials();
signout();

var name,fname,iname;

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
    var uid = user.uid;
    firebase.database().ref('users/'+uid).set({
      Name: name,
      FatherName: fname,
      INSTITUTION : iname
    }, function(error) {
      if (error) {
        alert("Data not Saved");
        // The write failed...
      } else {
        alert("Now, proceed to login");
      }
    });
  } else {
    // No user is signed in.
  }
});

function register() {
    name = document.getElementById("Name").value;
    fname = document.getElementById("Father Name").value;
    iname = document.getElementById("Institution").value;
   var email=document.getElementById("email").value;
   var password=document.getElementById("password").value;
   var rpassword=document.getElementById("rpassword").value;

   if(password==rpassword){
    alert("Registered Succesfully");
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(function() {
      return firebase.auth().createUserWithEmailAndPassword(email,password);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
     }
     else {
     alert("Password mismatch");
    }
  }
