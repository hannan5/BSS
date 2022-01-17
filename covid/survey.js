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
let btn = document.getElementById('btn')
// local Storage is used for get current survey data by id which I save in surveylist.js
let uid = localStorage.getItem('surveyindex')
let startbtn = document.getElementById('next')
let surveyname = document.getElementById('surveyname')

let ref = firestore.collection('surveyquestion').where('surveyid', '==', uid) /// get survey question for showing in survey

ref.get().then((querySnapshot) => {
    let name = querySnapshot.docs.map(doc => doc.data().surveyname) // get Survey Name
    surveyname.innerText = name
})
let questions = document.getElementById('questions')

// This is function is for show survey 
const loadsurvey = () => {
    let namediv = document.getElementById('namediv')
    namediv.classList.replace('show', 'hide')
    startbtn.innerText = 'Submit'
    ref.get().then((querySnapshot) => { // get all questions of current survey from firstore
        let data = querySnapshot.docs.map(doc => doc.data())
        data.forEach((elem) => {
            surveyname.innerText = elem.surveyname
            questions.innerHTML =
                `<div>
            <p id="question1">Qno1: ${elem.question1}</p>
            <input type="text" id='answer1' placeholder="Enter an Answer" required/>
            </div>
            <div>
            <p id="question1">Qno2: ${elem.question2}</p>
            <input type="text" id='answer2' placeholder="Enter an Answer" required/>
            </div>
            <div>
            <p id="question1">Qno3: ${elem.question3}</p>
            <input type="text" id='answer3' placeholder="Enter an Answer" required/>
            </div>
            <div>
            <p id="question1">Qno4: ${elem.question4}</p>
            <input type="text" id='answer4' placeholder="Enter an Answer" required/>
            </div>
            <p id="question1">Qno4: ${elem.question5}</p>
            <input type="text" id='answer5' placeholder="Enter an Answer" required/>
            </div>`
        })
    })
    saveuser()
}
startbtn.addEventListener('click', loadsurvey)

const saveuser = () => {
    questions.innerHTML = `<h1> Your Response is Submit </h1>`
    // It is for the get input value of user details and answers
    let username = document.getElementById('username').value
    let useremail = document.getElementById('useremail').value
    let usercompany = document.getElementById('usercompany').value
    let answer1 = document.getElementById('answer1').value
    let answer2 = document.getElementById('answer2').value
    let answer3 = document.getElementById('answer3').value
    let answer4 = document.getElementById('answer4').value
    let answer5 = document.getElementById('answer5').value
    ref.get().then((querySnapshot) => {
        let data = querySnapshot.docs.map(doc => doc.data())
        data.forEach((elem) => {
            let q1 = elem.question1
            let q2 = elem.question2
            let q3 = elem.question3
            let q4 = elem.question4
            let q5 = elem.question5
            let date = new Date()
            let time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }); // get the time when survey is submit
            let Dates = date.toLocaleDateString('en-US', { data: 'numeric' })

            firestore.collection('useranswer').doc().set({ // It is for save answers and Questions in firstore collection usersAnswer
                username: username,
                useremail: useremail,
                company: usercompany,
                answer1: answer1,
                answer2: answer2,
                answer3: answer3,
                answer4: answer4,
                answer4: answer4,
                answer5: answer5,
                question1: q1,
                question2: q2,
                question3: q3,
                question4: q4,
                question5: q5,
                time: time,
                date: Dates,
                uid: date.getTime().toString()
            })
        })
    })
}