import { defineStore } from 'pinia';
import { ref } from 'vue';
import router from '../router/routes';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, where, setDoc } from 'firebase/firestore';
import { auth, db, MotoGp } from '../Services/FirebaseService';

export const useTeams = defineStore('useTeams', {
  state: () => ({
    userDbData: [],
    userTeam: ref([]),
    userTeamId: ref([]),
    confirmAddRiderTeam: true,
    dollars: ref(0),
    riders: ref([]),
    ridersMotoGp: [],
    userTeamMGP: [],
    ridersMoto2: [],
    userTeamM2: [],
    ridersMoto3: [],
    userTeamM3: [],
    isLoading: true,
    valor: ref(0)
  }),
  actions: {
    async getUsers(){
      if (this.userDbData.length >0) {
        return
      }
      this.isLoading=true
      try {
        const docRefUsers = doc(db, "users", auth.currentUser.uid);
        const docUsers = await getDoc(docRefUsers);
        if (docUsers.exists()) {
          const usersDb = docUsers.data()
          this.userDbData.push(usersDb)
          this.dollars= this.userDbData[0].money
        }
      } catch (error) {
        console.log(error)
      }finally{

        this.isLoading=false
      }
    },
    async getRidersMotoGp() {
      if (this.ridersMotoGp.length !== 0) {
        return;
      }
      this.isLoading = true;
      try {
        const docRefMotoGp = doc(db, "summaryMotoGp", "summary");
        const docMotoGp = await getDoc(docRefMotoGp);
        if (docMotoGp.exists()) {
          const summaryMotoGp = docMotoGp.data()
          summaryMotoGp.stage.competitors.forEach((rider)=>{
            if(rider.result.points && rider.result.races >= 3 ){
              this.valor = Math.floor(rider.result.points *1.5) 
            }else{
              this.valor= 2
            }
            rider.result.points
            this.ridersMotoGp.push({
              ...rider,
              value:this.valor
            })
          })
          return this.ridersMotoGp
        } else {
          console.log("no existe el documento")
        }

      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log("getRidersMotoGp " , errorMessage)
      } finally {
        this.isLoading = false
      }
    },
    async getRidersMoto2() {
      if (this.ridersMoto2.length !== 0) {
        return;
      }
      this.isLoading = true;
      try {
        const docRefMoto2 = doc(db, "summaryMoto2", "summary");
        const docMoto2 = await getDoc(docRefMoto2);
        if (docMoto2.exists()) {
          const summaryMoto2 = docMoto2.data()
          summaryMoto2.stage.competitors.forEach((rider)=>{
            if(rider.result.points && rider.result.races >= 3 ){
              this.valor = Math.floor(rider.result.points *1.5) 
            }else{
              this.valor= 2
            }
            rider.result.points
            this.ridersMoto2.push({
              ...rider,
              value:this.valor
            })
          })
          return this.ridersMoto2
        } else {
          console.log("no existe el documento")
        }

      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log("getRidersMoto2 " , errorMessage)
      } finally {
        this.isLoading = false
      }
    },
    async getRidersMoto3() {
      if (this.ridersMoto3.length !== 0) {
        return;
      }
      this.isLoading = true;
      try {
        const docRefMoto3 = doc(db, "summaryMoto3", "summary");
        const docMoto3 = await getDoc(docRefMoto3);
        if (docMoto3.exists()) {
          const summaryMoto3 = docMoto3.data()
          summaryMoto3.stage.competitors.forEach((rider)=>{
            if(rider.result.points && rider.result.races >= 3 ){
              this.valor = Math.floor(rider.result.points *1.5) 
            }else{
              this.valor= 2
            }
            rider.result.points
            this.ridersMoto3.push({
              ...rider,
              value:this.valor
            })
          })
          return this.ridersMoto3
        } else {
          console.log("no existe el documento")
        }

      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log("getRidersMoto3 " , errorMessage)
      } finally {
        this.isLoading = false
      }
    },
    async getTeamMGP(){
      if (this.userTeamMGP.length > 0) {
        return
      }
      
      this.userTeamMGPLoading = true;
      try {
        const docRefTeamMGP = doc(db, "userTeamMGP", auth.currentUser.uid);
        const docTeamMGP= await getDoc(docRefTeamMGP);
        if (docTeamMGP.exists()) {
          const teamMGP = docTeamMGP.data()
          Object.keys(teamMGP).forEach(rId =>{
            let objetId = teamMGP[rId]
            this.ridersMotoGp.forEach((rider)=>{
              if (rider.id == objetId) {
                 this.userTeamMGP.push(rider)
              }
            })
          })
        }
        this.userTeamMGPLoading = false;
      } catch (error) {
        console.log("getTeamMGP",error.message)
      }
    },
    async getTeamM2(){
      if (this.userTeamM2.length > 0) {
        return
      }
      
      this.userTeamMGPLoading = true;
      try {
        const docRefTeamM2 = doc(db, "userTeamM2", auth.currentUser.uid);
        const docTeamM2= await getDoc(docRefTeamM2);
        if (docTeamM2.exists()) {
          const teamM2 = docTeamM2.data()
          Object.keys(teamM2).forEach(rId =>{
            let objetId = teamM2[rId]
            this.ridersMoto2.forEach((rider)=>{
              if (rider.id == objetId) {
                 this.userTeamM2.push(rider)
              }
            })
          })
        }
        this.userTeamMGPLoading = false;
      } catch (error) {
        console.log("getTeamM2",error.message)
      }
    },
    async getTeamM3(){
      if (this.userTeamM3.length > 0) {
        return
      }
      
      this.userTeamMGPLoading = true;
      try {
        const docRefTeamM3 = doc(db, "userTeamM3", auth.currentUser.uid);
        const docTeamM3= await getDoc(docRefTeamM3);
        if (docTeamM3.exists()) {
          const teamM3 = docTeamM3.data()
          Object.keys(teamM3).forEach(rId =>{
            let objetId = teamM3[rId]
            this.ridersMoto3.forEach((rider)=>{
              if (rider.id == objetId) {
                 this.userTeamM3.push(rider)
              }
            })
          })
        }
        this.userTeamMGPLoading = false;
      } catch (error) {
        console.log("getTeamM3",error.message)
      }
    },

    addRiderTeam(rider) {
      // console.log(this.dollars)
      this.confirmAddRiderTeam= false
      if (this.userTeam.length < 3) {
        if (!this.userTeam.includes(rider)) {
          if (this.dollars >= rider.value) {
            this.userTeam.push(rider)
            this.userTeamId.push(rider.id)
            const dolares = this.dollars - rider.value
            console.log(dolares)
            this.confirmAddRiderTeam= true
            this.dollars = dolares

          } else {
            return alert("No tienes fondos suficientes 🔻")
          }

        } else {
          return alert("Ese piloto ya esta en tu equipo 👍")
        }

      } else {
        return alert("Has llegado al límite de pilotos 🏍️")
      }
    },
    removeRiderTeam(rider) {
      console.log(rider.value)
      const element = rider
      const index = this.userTeam.indexOf(element)
      this.userTeam.splice(index, 1)
      const dolares = this.dollars + rider.value
      this.dollars = dolares
      console.log("Vuelves a tener ",this.dollars)

    },
    async createTeamMGP(){
      if (this.userTeam.length != 3) {
        alert("El equipo debe tener tres pilotos")
        return
      }
      if (this.userTeamMGP.length === 3) {
        return
      }
      console.log("Create MGP")
      try {

        const objectMotoGp = this.userTeamId.reduce((team, riderId)=>{
          team[riderId] = riderId
          return team
        }, {})
        await setDoc(doc(db, "userTeamMGP", auth.currentUser.uid ), objectMotoGp )
        await setDoc(doc(db, "users", auth.currentUser.uid ),
        {
          money:this.dollars
          
        }
        )
      } catch (error) {
        console.log("createTeamMGP ", error.message )
      }finally{
        this.userTeam.value = []

      }
    },
    async createTeamM2(){
      if (this.userTeam.length != 3) {
        alert("El equipo debe tener tres pilotos")
        return
      }
      if (this.userTeamM2.length === 3) {
        return
      }
      console.log("Create M2")
      try {

        const objectMoto2 = this.userTeamId.reduce((team, riderId)=>{
          team[riderId] = riderId
          return team
        }, {})
        await setDoc(doc(db, "userTeamM2", auth.currentUser.uid ), objectMoto2 )
      } catch (error) {
        console.log("createTeamM2 ", error.message )
      }finally{
        this.userTeam.value = []
   
      }
    },
    async createTeamM3(){
      if (this.userTeam.length != 3) {
        alert("El equipo debe tener tres pilotos")
        return
      }
      if (this.userTeamM3.length === 3) {
        return
      }
      console.log("Create 3")
      try {

        const objectMoto3 = this.userTeamId.reduce((team, riderId)=>{
          team[riderId] = riderId
          return team
        }, {})
        await setDoc(doc(db, "userTeamM3", auth.currentUser.uid ), objectMoto3 )
      } catch (error) {
        console.log("createTeamM3 ", error.message )
      }finally{
        this.userTeam.value = []
   
      }
    },
  },
})