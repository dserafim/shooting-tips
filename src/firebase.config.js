import { getFirestore } from '@firebase/firestore';
import { initializeApp }  from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAd-NwOy2uc_n-FHr8h5oHCVk9CIN9PE6U",
  authDomain: "shooter-tips.firebaseapp.com",
  projectId: "shooter-tips",
  storageBucket: "shooter-tips.appspot.com",
  messagingSenderId: "258701140817",
  appId: "1:258701140817:web:19a27bbfc20e958f9ae970"
  };
  // Initialize Firebase
const firebaseApp=initializeApp(firebaseConfig);
const db=getFirestore(firebaseApp);

export { 
  db
};