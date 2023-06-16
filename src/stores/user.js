import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { defineStore } from 'pinia';
import { auth, db } from '../Services/FirebaseService';
import router from '../router/routes';
import {useTeams} from './teams'
import { doc, setDoc } from 'firebase/firestore';




export const useUserStore = defineStore("userStore", {
    state: () => ({
        userData: null,
        loadingUser: false,
        userLoged: false,
        userId: null
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
                await setDoc(doc(db, "users", auth.currentUser.uid ),
                {
                  mail: this.userData.email,
                  money: 750,
                  rol: "player",
                  totalPoints: 0,
                  name: "userDefault"

                }
                )
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
            const teamsDataBase = useTeams()
            teamsDataBase.$reset()
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
                        this.userId=auth.currentUser.uid
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





