import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { defineStore } from 'pinia';
import { auth } from '../FirebaseConfi';
import router from '../router/routes';





export const useUserStore = defineStore("userStore", {
    state: () => ({
        userData: null,
        loadingUser: false,
        userLoged: false
    }),
    actions: {
        async registerUser(email, password) {
            this.loadingUser= true
            try {
                const { user } = await createUserWithEmailAndPassword(auth, email, password);
                this.userData = {
                    email: user.email,
                    uid: user.uid
                }
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            }finally{
                this.loadingUser=false
            }
        },
        async loginUser(email, password){
            this.loadingUser= true
            try {
                const {user}= await signInWithEmailAndPassword(auth, email, password)
                this.userData = {
                    email: user.email,
                    uid: user.uid
                }
                router.push("/")
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            }finally{
                this.loadingUser= false
            }

        },
        async logoutUser(){
            try {
                await signOut(auth);
                this.userData = null;
                router.push("/login")
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            }finally{
                this.userLoged=false
            }
        },
        currentUser(){
            return new Promise((resolve, reject)=>{
                const unsuscribe = onAuthStateChanged(auth, (user)=>{
                    if (user) {
                        this.userData = {
                            email: user.email,
                            uid: user.uid
                        }
                        this.userLoged= true
                    } else {
                        this.userData= null
                        this.userLoged=false
                    }
                    resolve(user)
                  },e => reject(e))
                  unsuscribe()
            })
        }
    },



})





