function toggleSignIn2() {
    if (firebase.auth().currentUser) {
      // [START signout]
      firebase.auth().signOut();
      // [END signout]
    } else {
      var email = document.getElementById('txtEmail').value;
      
      var password = document.getElementById('txtPassword').value;
      
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      // Sign in with email and pass.
      // [START authwithemail]
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        document.getElementById('btnLogin').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authwithemail]
    }
 
    document.getElementById('btnLogin').disabled = true;
  }

  function initApp2() {
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function(user) {
      // [START_EXCLUDE silent]
      // [END_EXCLUDE]
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // [START_EXCLUDE]
     
        document.getElementById('btnLogin').textContent = 'Sign out';
        document.getElementById('txtEmail').style.display = "none";
        document.getElementById('txtPassword').style.display = "none";
        console.log('user is logged in');
        //document.getElementById('header-sign-in').textContent = 'Sign out';
        // [END_EXCLUDE]
      } else {
        // User is signed out.
        // [START_EXCLUDE]
        console.log('user is signed out');
        document.getElementById('btnLogin').textContent = 'Sign in';
        document.getElementById('txtEmail').style.display = "block";
        document.getElementById('txtPassword').style.display = "block";
        //document.getElementById('header-sign-in').textContent = 'Sign in';
        
        // [END_EXCLUDE]
      }
      // [START_EXCLUDE silent]
      document.getElementById('btnLogin').disabled = false;
      //document.getElementById('header-sign-in').disabled = false;
      // [END_EXCLUDE]
    });
    // [END authstatelistener]
    //document.getElementById('header-sign-in').addEventListener('click', toggleSignIn, false);
  
    document.getElementById('btnLogin').addEventListener('click', toggleSignIn2, false);

  }

  window.onload = function() {
    initApp2();
  };