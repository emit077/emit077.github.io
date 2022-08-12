// import * as firebase from "firebase/app"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {onUnmounted, ref} from "vue";


const firebaseConfig = {
 apiKey: "AIzaSyDVsydGWD3jDWycp70f8iWy1OjyRnLdY6s",
  authDomain: "amit-portfolio-1d20f.firebaseapp.com",
  projectId: "amit-portfolio-1d20f",
  storageBucket: "amit-portfolio-1d20f.appspot.com",
  messagingSenderId: "80105803323",
  appId: "1:80105803323:web:b5d69913060881356dd61e",
  measurementId: "G-6JP3FL6MQR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const usersCollection = db.collection('inquiry')


export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
  })
  onUnmounted(close)
  return users
}

