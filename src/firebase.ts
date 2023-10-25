// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const FIREBASE_CONFIG: FirebaseOptions = {
	apiKey: 'AIzaSyCYsfXfkp-3VQIAZyKqqOEGcra_Jmv3kGo',
	authDomain: 'cf-bcp-f-avaz-2023-proyecto.firebaseapp.com',
	projectId: 'cf-bcp-f-avaz-2023-proyecto',
	storageBucket: 'cf-bcp-f-avaz-2023-proyecto.appspot.com',
	messagingSenderId: '452595136146',
	appId: '1:452595136146:web:9a6d87594fe617308ed84b'
};

// Initialize Firebase
export const FIREBASE = initializeApp(FIREBASE_CONFIG);

export const FIREBASE_AUTH = getAuth(FIREBASE);
