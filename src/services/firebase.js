import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDOcppQbZjYvFodMyA52DbpP_IRWy0M504",
  authDomain: "online-tutorial-system-da927.firebaseapp.com",
  projectId: "online-tutorial-system-da927",
  storageBucket: "online-tutorial-system-da927.firebasestorage.app",
  messagingSenderId: "619721107823",
  appId: "1:619721107823:web:8379b17de7918067fba09a",
  measurementId: "G-NPBR35KPNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services
export const auth = getAuth(app);
export default app;
export { analytics };



