// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAzlKc8XS6wYeGdy3ftfgHWThbxSTHBQKY",
  authDomain: "cart-test-rn.firebaseapp.com",
  projectId: "cart-test-rn",
  storageBucket: "cart-test-rn.appspot.com",
  messagingSenderId: "1065921752494",
  appId: "1:1065921752494:web:757fbad5830801786dac3f",
  measurementId: "G-XG1P39LLYZ",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
