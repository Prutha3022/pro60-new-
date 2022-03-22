import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD44q1YO1e7rLmLkQV5Hllc2uYWwZZvKQ0",
  authDomain: "attendenceappnew.firebaseapp.com",
  databaseURL: "https://attendenceappnew-default-rtdb.firebaseio.com",
  projectId: "attendenceappnew",
  storageBucket: "attendenceappnew.appspot.com",
  messagingSenderId: "220370212448",
  appId: "1:220370212448:web:d9eb8fab5d03c0ca9dd505"
};
 
firebase.initializeApp(firebaseConfig);
export default firebase.database()
 

  