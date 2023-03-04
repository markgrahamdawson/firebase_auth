import {
  createUserWithEmailAndPassword,
  getAuth,
  User,
} from 'firebase/auth'
import { collection, doc, setDoc, getFirestore } from "firebase/firestore"; 



export const useAuthStore = defineStore('auth', () => {
  const credentials = ref<User | undefined>()

  const createUser = async (email, password, firstName, lastName) => {
    const auth = getAuth();
    credentials.value = await createUserWithEmailAndPassword(auth, email, password)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

    const firestore = getFirestore()
    const usersRef = collection(firestore, "users");
    const createFirestoreUser = async(email)=> {
      await setDoc(doc(usersRef, email), { 
        firstname: firstName, 
        lastname: lastName, 
        email: email,
        paidUser: false });
    }
    createFirestoreUser(email);
    
    return credentials;
    
  }
  
  return {
    createUser,
    credentials
  }
})
