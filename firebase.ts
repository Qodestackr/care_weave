// Import the functions you need from the SDKs you need
import { FirebaseOptions, getApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getStorage, ref } from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

import localforage from "localforage";

import { GoogleAuthProvider, getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
  apiKey: ",
  authDomain: "afyamed-tele.firebaseapp.com",
  projectId: "afyamed-tele",
  storageBucket: "afyamed-tele.appspot.com",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const firebaseMessaging = () => getMessaging(app);

export const firebaseCloudMessaging = {
  init: async () => {
    if (getApp()) {
      // Initialize the Firebase app with the credentials

      try {
        // const messaging = firebase.messaging();
        const tokenInLocalForage = await localforage.getItem("fcm_token");

        // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
          // Get new token from Firebase
          //   const fcm_token = await messaging.getToken({
          //     vapidKey: "your_web_push_certificate_key_pair",
          //   });
          // Set token in our local storage
          //   if (fcm_token) {
          //     localforage.setItem("fcm_token", fcm_token);
          //     return fcm_token;
          //   }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};
