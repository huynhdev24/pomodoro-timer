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
	apiKey: process.env.apiKey,
	authDomain: process.env.authDomain,
	projectId: process.env.projectId,
	storageBucket: process.env.storageBucket,
	messagingSenderId: process.env.messagingSenderId,
	appId: process.env.appId,
	measurementId: process.env.measurementId
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
