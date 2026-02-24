import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBU5TIVmM06HXpzY8C9zejnxQTBXsl8BsM",
  authDomain: "teamgamersofficialwebsite.firebaseapp.com",
  projectId: "teamgamersofficialwebsite",
  storageBucket: "teamgamersofficialwebsite.firebasestorage.app",
  messagingSenderId: "916749575153",
  appId: "1:916749575153:web:5f102a0d515c608b541a50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export for use in other files
export const auth = getAuth(app);
export const db = getFirestore(app);
