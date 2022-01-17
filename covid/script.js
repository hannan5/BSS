const firebaseConfig = {
    apiKey: "AIzaSyAoLFHA9gGcoZywqUdnPoiSk8QRFhFEN4g",
    authDomain: "covid-survey-b5b8a.firebaseapp.com",
    projectId: "covid-survey-b5b8a",
    storageBucket: "covid-survey-b5b8a.appspot.com",
    messagingSenderId: "632244051742",
    appId: "1:632244051742:web:f1b9e19350aef16122b30f"
  };
  firebase.initializeApp(firebaseConfig);
  let auth = firebase.auth();
  let firestore = firebase.firestore()

  let loginbtn = document.getElementById('loginbtn')

  const adminlogin = () =>{
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    auth.signInWithEmailAndPassword(email,password)
   .catch((error)=>{
            const errorMessage = error.message
            console.log(errorMessage)
        })
}
auth.onAuthStateChanged((user) => {
      if (user) { 
    // User is signed in.  
    location.replace('./Adminpanel.html') // for redirect in Main page after Login
    } 
      else {   
        // No user is signed in.
      }});
loginbtn.addEventListener('click', adminlogin)