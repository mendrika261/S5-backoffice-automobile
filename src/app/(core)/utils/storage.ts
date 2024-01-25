import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes, uploadBytesResumable} from "firebase/storage";

import {Dispatch, useEffect, useState} from "react";
import {toast} from "react-toastify";
import {uuidv4} from "@firebase/util";
const AXIOS = require('axios').default;
const DEFAULT_ERROR_MESSAGE = "Vérifier votre connexion internet";

const firebaseConfig = {
    apiKey: "AIzaSyCvWSkZoh_d17P8yvunpZkZ47b0pXz7Ejg",
    authDomain: "fiara-363ef.firebaseapp.com",
    projectId: "fiara-363ef",
    storageBucket: "fiara-363ef.appspot.com",
    messagingSenderId: "740488711191",
    appId: "1:740488711191:web:eb3b660e0fbc753896a052",
    measurementId: "G-WRHRRR5S2K"
};

// Initialisez Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export {storage}





