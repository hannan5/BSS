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

let ref = firestore.collection('useranswer'); // It is the collection where I save a users Answer 

// This function is for show report list 
const getreportlist = () => {
    let report = document.getElementById('report');
    ref.onSnapshot((snap) => {
        snap.forEach((elem) => {
            report.innerHTML += `
<div id="reportlist">
<h4>${elem.data().username}</h4>
<h4>${elem.data().company}</h4>
<h4>${elem.data().date},${elem.data().time}</h4>
<h4 id=${elem.data().uid} style='cursor:pointer' onclick='reportdetect(this.id)'><a href='./report.html' style='color:#000; text-decoration:none'>See Report Here</a></h4>
</div>`
        })
    })
}
getreportlist()

const reportdetect = (e) => {
    // local Storage is used for save user uid of current report for showing full report in report.html
    localStorage.setItem('surveyreport', JSON.parse(e))
}