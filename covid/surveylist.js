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
    let firestore = firebase.firestore()

    let mainsurveyline = document.getElementById('mainsurveyline')

    let ref = firestore.collection('surveyquestion'); // It is the collection wher survey question is same
    // It is the Function where Survey is show 
    const surveyshow = () => {
        ref.onSnapshot((snap) => {
            snap.forEach((elem) => {
                let id = elem.data().uid
                mainsurveyline.innerHTML += ` <div class="surveylist">
                <div class="surveybox">
                    <h2>${elem.data().surveyname}</h2>
                    <h4>Survey By ${elem.data().name}</h4>
                    <button  id=${elem.data().surveyid} class='start' onclick='surveydetect(this.id)'><a href='./survey.html'>Start Survey</a></button>
                </div>
            </div>`
            })
        })
    }
    surveyshow()
}
const surveydetect = (e) => {
    // local Storage is used for save user uid of current survey where is user click for showing full survey in survey.html
    localStorage.setItem('surveyindex', JSON.parse(e))
}
