import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { getAuth, signInWithPopup, onAuthStateChanged, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBhFJYU_MAc_kWdRHH1bl-ckqyrVMLWLjg",
  authDomain: "b6-classin.firebaseapp.com",
  projectId: "b6-classin",
  storageBucket: "b6-classin.appspot.com",
  messagingSenderId: "64721669507",
  appId: "1:64721669507:web:fabc9ea1426eec9201fab6",
  measurementId: "G-YLEERZ0K6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// FACEBOOK LOGIN
const provider = new FacebookAuthProvider();

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    console.log(accessToken);

    alert("Welcome" + user.displayName);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
  });
