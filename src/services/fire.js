import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


const config = {
    apiKey: "AIzaSyCvVHckJY9lns3IXD9Y7JB-734z28OXsEI",
    authDomain: "diabet-track.firebaseapp.com",
    databaseURL: "https://diabet-track.firebaseio.com",
    projectId: "diabet-track",
    storageBucket: "diabet-track.appspot.com",
    messagingSenderId: "737303630679"
  };

  const fire = firebase.initializeApp(config);
  export {fire}