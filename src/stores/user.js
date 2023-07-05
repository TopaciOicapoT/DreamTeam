import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { defineStore } from 'pinia';
import { auth, db, storage } from '../Services/FirebaseService';
import router from '../router/routes';
import {useTeams} from './teams'
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';




export const useUserStore = defineStore("userStore", {
    state: () => ({
        userData: null,
        loadingUser: false,
        userLoged: false,
        userId: null
    }),
    actions: {
        async registerUser(email, password, name) {
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
                  money: 850,
                  rol: "player",
                  totalPoints: 0,
                  name: name,
                

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
        async updateUser(name, img) {
            this.loadingUser = true;
            try {
                
                if(img){
                    console.log(img)
                    const storageRef = ref(storage,`perfiles/${this.userData.uid}`);
                    await uploadBytes(storageRef,img.originFileObj);
                    const URL = await getDownloadURL(storageRef);
                    await updateProfile(auth.currentUser, {
                        photoURL: URL,
                    });
                    await updateDoc(doc(db, "users", auth.currentUser.uid),
                    {
                        name: name,  
                        photoURL: URL,
                        
                    })
                }
                await updateProfile(auth.currentUser, {
                    displayName: name,
                });
                
                console.log("@@@", URL)
                console.log("Nombre ", name)

            } catch (error) {
                console.log(error.code)
                return error.code
            }finally{
                this.loadingUser = false;
            }
        },

        async loginUser(email, password){
            this.loadingUser= true
            try {
                const {user}= await signInWithEmailAndPassword(auth, email, password)
                this.userData = {
                    email: user.email,
                    uid: user.uid,
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
            const teamsDb = useTeams()
            return new Promise((resolve, reject)=>{
                const unsuscribe = onAuthStateChanged(auth, (user)=>{
                    if (user) {
                        this.userData = {
                            email: user.email,
                            uid: user.uid,
                            displayName :user.displayName,
                            photoURL: user.photoURL,
                            
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





