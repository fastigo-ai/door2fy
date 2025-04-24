import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDtClvxqnsbFe1xRPmTOsN94L6NNdxZEFc",
  authDomain: "door2fy-6f73c.firebaseapp.com",
  projectId: "door2fy-6f73c",
  storageBucket: "door2fy-6f73c.firebasestorage.app",
  messagingSenderId: "394341024747",
  appId: "1:394341024747:web:fe37eb241b6bff6ead8fae",
  measurementId: "G-3JY6RHYDBW"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth};
export default firebase;