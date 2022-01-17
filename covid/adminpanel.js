{
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

  let logout = document.getElementById('logout')
  let createbtn = document.getElementById('createbtn')
  let savebtn = document.getElementById('savebtn')
  const Logout = () => {
    auth.signOut()
  }
  // Logout Function 
  auth.onAuthStateChanged((user) => {
    if (!user) {
      location.replace('./index.html')
    }
  });
  logout.addEventListener('click', Logout)
  let uid;
  // It is for get all Data of current User
  auth.onAuthStateChanged((user) => {
    uid = user.uid;

    let ref = firestore.collection('admin').where('uid', '==', uid) // get current user from firestore collection data
    let form = document.getElementById('form')
    let surveyname = document.getElementById('surveyname')
    // this function is for showing question form 
    const showform = () => {
      surveyname.classList.replace('surveyname', 'surveynamehide')
      savebtn.classList.replace('savebtn', 'savebtnhide')
      form.innerHTML = '';
      for (i = 1; i <= 5; i++) {
        form.innerHTML += `<div class="question" >
   <div class="question_input">
       <input type="text" placeholder="Enter a Question " id='${i}'/>
   </div>
   <div class="response_type">
       <select>
           <option>Single</option>
           <option>Multiple</option>
           <option>Data</option>
       </select>
   </div>
</div>`
      }
    }
    createbtn.addEventListener('click', showform)
    // This function is for send Questions to Firestore 
    const senddata = () => {
      let question1 = document.getElementById(1).value
      let question2 = document.getElementById(2).value
      let question3 = document.getElementById(3).value
      let question4 = document.getElementById(4).value
      let question5 = document.getElementById(5).value
      let nameinput = document.getElementById('nameinput').value
      let surveyid = new Date().getTime()
      let adminname;
      form.style = 'display:none'
      savebtn.style = 'display:none'
      ref.onSnapshot((snap) => {
        snap.forEach((elem) => {
          adminname = elem.data().name
          firestore.collection('surveyquestion').doc().set({
            question1: question1,
            question2: question2,
            question3: question3,
            question4: question4,
            question5: question5,
            uid: uid,
            name: adminname,
            surveyname: nameinput,
            surveyid: surveyid.toString()
            // surveuid:
          })
        })
      })
    }
    savebtn.addEventListener('click', senddata)
  })
}