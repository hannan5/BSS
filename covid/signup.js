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
  
  const adminSignup = () =>{
    let security = document.getElementById('security').value
    // It is for when admin given a security key to user for login
if(security == 'admin123'){ 
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    auth.createUserWithEmailAndPassword(email,password)
    .then((user)=>{
        // admin data is also set in firebase after signup 
        firestore.collection('admin').doc(user.user.uid).set({ 
            email:email,
            name:name,
            uid:user.user.uid
        })
        .catch((error)=>{
            const errorMessage = error.message
            console.log(errorMessage)
        })
    })
}
// If user haven't key they don't do Signup
else{ 
    alert('Please Contact with admin for Security Keys')    
}
}
loginbtn.addEventListener('click', adminSignup)