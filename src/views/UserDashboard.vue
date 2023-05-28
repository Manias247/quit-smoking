<!-- <template>
 
  <button class="main-button back">
    <router-link to="/" class="link back"> Powrót </router-link>
  </button>
  <button v-if="auth.isLoggedIn" @click="auth.logout">Logout</button>

  <div>
    <h1>Profil palacza</h1>
    <h2>Home</h2>
    <p v-if="auth.isLoggedIn">Hej, {{ auth.user.username }}!</p>
    <p v-else>Please log in or register to continue.</p>
    <button v-if="auth.isLoggedIn" @click="updateItems(1)">+ 1 sztuka</button>
    <p v-if="auth.isLoggedIn">
      heetsy/papierosy dzisiaj: {{ auth.user.items }}
    </p>
  </div>
</template> -->

<template>
   <NavigationBar/>
  
  <button class="main-button back">
    <router-link to="/" class="link back"> Powrót </router-link>
  </button>
  <div>
    
    <h2>Home</h2>
    <p v-if="isLoggedIn">Witaj, {{ user.username }}!Przyznaj, na ile {{ user.selectedOption + ending }} się skusiłeś?</p>
    <p v-else>Zaloguj się, aby kontynuować</p>

    <form v-if="isLoggedIn" @submit.prevent="addEntry">


      <div class="user-input-box">
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
      return auth.user;
    },
    selectedOption() {
      return useAuthStore().selectedOption;
    },
  },
  methods: {
    addEntry() {
      const auth = useAuthStore();
      const newEntry = {
        date: this.entryDate,
        count: this.cigaretteCount,
      };
      if (!auth.user.history) {
        auth.user.history = []; // Initialize history array if it doesn't exist
      }
      auth.user.history.push(newEntry);
      auth.updateUser(); 
      this.entryDate = "";
      this.cigaretteCount = "";
    },
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
/* tr:last-child {
 border-bottom: none;
} */

</style>
