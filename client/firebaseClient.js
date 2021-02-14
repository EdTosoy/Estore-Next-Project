import firebase from "firebase";
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBbVE7vIxFMg2jXU0zgMZuNLrp9rhVF3Hg",
  authDomain: "estore-next-project.firebaseapp.com",
  projectId: "estore-next-project",
  storageBucket: "estore-next-project.appspot.com",
  messagingSenderId: "416406830303",
  appId: "1:416406830303:web:b2cb2045fa1a3cf6547d6a",
};

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}
