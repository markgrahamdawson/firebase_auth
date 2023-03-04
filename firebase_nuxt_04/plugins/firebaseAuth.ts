import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(nuxtApp => {
    const { public: config } = useRuntimeConfig();
    // Doing something with nuxtApp
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: config.FIREBASE_API_KEY,
        authDomain: config.FIREBASE_AUTH_DOMAIN,
        projectId: config.FIREBASE_PROJECT_ID,
        storageBucket: config.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
        appId: config.FIREBASE_APP_ID
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);

})