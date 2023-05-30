<template>
  <NavigationBar/>
 
 <button @click="logout" class="main-button back"> Wyloguj

 </button>
 <div>
   
   <div v-if="isLoggedIn">
   <h2 v-if="isLoggedIn">Witaj, {{ user.username }}!</h2>
   <br>
    <h3> Przyznaj, na ile {{ user.selectedOption + ending }} się skusiłeś?</h3>
    <div>
          <h3 class="input-heading">Inni użytkownicy:</h3>
          <table class="user-table">
            <thead>
              <tr>
                <th>Użytkownik:</th>
                <th>Suma dymków:</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="otherUser in otherUsers" :key="otherUser.userID">
                <td>{{ otherUser.username }}</td>
                <td>{{ otherUser.totalCigarettes }}</td>
              </tr>
            </tbody>
          </table>
        </div>
 
    
   </div>
   <h1 v-else>Zaloguj się, aby kontynuować</h1>

   <form v-if="isLoggedIn" @submit.prevent="addEntry">
     


     <div class="user-input-box">
       <h4>Wypaliłeś łącznie: {{ user.totalCigarettes }}</h4> <br>
       <h4>Uczestniczysz już: {{ user.uniqueDays  }} dni</h4>
       <label for="entryDate" class="input-heading">Data:</label>
       <input
         type="date"
         id="entryDate"
         class="main-input"
         v-model="entryDate"
         required
       />
     </div>
     
     <div class="user-input-box">
       <label for="entryDate" class="input-heading"> Ile dziś było dymków?</label>
       <input
         type="number"
         id="cigaretteCount"
         class="main-input"
         v-model="cigaretteCount"
         required
       />
       <button type="submit" class="main-button">Dodaj</button>
       <div v-if="isLoggedIn">
     <h3 class="input-heading" >Historia:</h3>
     <table class="history-table">
       <thead>
         <tr>
           <th>Data:</th>
           <th>Ilość:</th>
         </tr>
       </thead>
       <tbody>
         <tr v-for="entry in user.history" :key="entry.date">
           <td>{{ entry.date }}</td>
           <td>{{ entry.count }}</td>
         </tr>
       </tbody>
     </table>
     
     
   </div>
 
     </div>
    
   </form>
 </div>
</template>

<script>
import { useAuthStore } from "../store/modules/store";
import NavigationBar from "@/components/NavigationBar.vue";




export default {
 name: "UserDashboard",
 components: {
   NavigationBar,
 },
 
 data() {
   return {
     entryDate: new Date().toISOString().substring(0, 10),
     cigaretteCount: "",
     ending: "ów",
     
   };
 },
 computed: {
   isLoggedIn() {
     const auth = useAuthStore();
     return auth.isLoggedIn;
   },
  
   user() {
     const auth = useAuthStore();
     const user = auth.user;
      if (user) {
      const uniqueDays = new Set(user.history.map((entry) => entry.date)).size;
      return { ...user, uniqueDays };
    }
    return null;
   },
   selectedOption() {
     return useAuthStore().selectedOption;
   },
   otherUsers() {
  
  return useAuthStore().users;
},
   
  

 
 },
 methods: {
   addEntry() {
     const auth = useAuthStore();
     const newEntry = {
       date: this.entryDate,
       count: parseInt(this.cigaretteCount)
     };
     if (!auth.user.history) {
       auth.user.history = [];
       auth.user.totalCigarettes = 0;
     }
     auth.user.history.push(newEntry);

     auth.user.totalCigarettes = auth.user.history.reduce(
    (total, entry) => total + entry.count,
    0
  );
    
     auth.updateUser(); 
     this.entryDate = "";
     this.cigaretteCount = "";
   },
   logout(){
      useAuthStore().logout()
      this.$router.push('/')
    }
  
 },
};
</script>
<style lang="css">
.history-table {
    border-collapse: collapse;
    text-align: center;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 200px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
    padding: 20px;
    
    
}

  tr, td, th{
  border: 1px solid rgb(142, 141, 141, .3);
  padding: 10px;
  
  
}

</style>
