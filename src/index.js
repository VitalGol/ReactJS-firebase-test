import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCMSRouimDWmPfcBGmtAi34I48Hu_K6AuM",
  authDomain: "fir-project-5d738.firebaseapp.com",
  databaseURL: "https://fir-project-5d738.firebaseio.com",
  projectId: "fir-project-5d738",
  storageBucket: "fir-project-5d738.appspot.com",
  messagingSenderId: "315607246317",
  appId: "1:315607246317:web:24b854af63ae48508fb3e4",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
