import {
  createUserWithEmailAndPassword,
  getAuth,
  User,
} from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  const credentials = ref<User | undefined>()

  const createUser = async (email, password) => {
    const auth = getAuth();
    credentials.value = await createUserWithEmailAndPassword(auth, email, password)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    return credentials;
    
  }
  
  return {
    createUser,
    credentials
  }
})
