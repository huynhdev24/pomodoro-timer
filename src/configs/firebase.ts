import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import * as auth from 'firebase/auth';
import {
	doc,
	DocumentData,
	getDoc,
	getFirestore,
	setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyABIpaFv5JOoNVKgS_JxbeDa2EMRjl5hP8",
	authDomain: "pomodoro-timer-firebase.firebaseapp.com",
	projectId: "pomodoro-timer-firebase",
	storageBucket: "pomodoro-timer-firebase.appspot.com",
	messagingSenderId: "477402221129",
	appId: "1:477402221129:web:a2636fcb5b52a16b5b4d98",
	measurementId: "G-51BWM87RTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const db = getFirestore();

// util functions
async function getFirebaseDocument(
	collectionName: string,
	documentId: string,
): Promise<DocumentData | null> {
	try {
		const docRef = doc(db, collectionName, documentId);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return docSnap.data();
		}

		return null;
	} catch (error) {
		throw error;
	}
}

export { auth, db, doc, setDoc, getFirebaseDocument };
