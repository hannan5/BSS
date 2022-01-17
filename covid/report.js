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
let uid = localStorage.getItem('surveyreport')
let logout = document.getElementById('logout')

// Logout Function 
const Logout = () => {
    auth.signOut()
}
auth.onAuthStateChanged((user) => {
    if (!user) {
        location.replace('./index.html')
    }
});
logout.addEventListener('click', Logout)

let uname = document.getElementById('headname')
let time = document.getElementById('time')
let report = document.getElementById('report')
// This function is for showing Report
const Report = () => {
    let ref = firestore.collection('useranswer').where('uid', '==', uid);
    ref.get().then((querySnapshot) => {
        let data = querySnapshot.docs.map(doc => doc.data())
        data.forEach((elem) => {
            uname.innerText = elem.username
            time.innerText = elem.date
            report.innerHTML =
                `<div id="reportlist">
     <p>${elem.question1}</p>
    <p>${elem.answer1}</p>
    </div>
    <div id="reportlist">
    <p>${elem.question2}</p>
   <p>${elem.answer2}</p>
   </div>
   <div id="reportlist">
   <p>${elem.question3}</p>
  <p>${elem.answer3}</p>
  </div>
  <div id="reportlist">
  <p>${elem.question4}</p>
 <p>${elem.answer4}</p>
 </div>
 <div id="reportlist">
 <p>${elem.question5}</p>
<p>${elem.answer5}</p>
</div>`
        })
    })
}
Report()