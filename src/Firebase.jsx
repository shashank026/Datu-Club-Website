import firebase from "firebase";

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBvQb_ygyEvHB8MbQRCPOXLzwkojkD0Ep4",
    authDomain: "datum-club.firebaseapp.com",
    projectId: "datum-club",
    storageBucket: "datum-club.appspot.com",
    messagingSenderId: "567467083708",
    appId: "1:567467083708:web:fdfa275bcbcffac8714db9",
    measurementId: "G-4CRZKV0YWL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();