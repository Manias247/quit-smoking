<template>
    <NavigationBar/>
  <div class="user-enter-container">
    <button class="main-button back" @click="$router.back()">Powrót</button>
    <h2 class="input-heading">W grupie raźniej! Sprawdź jak radzą sobie inni</h2>
    <div class="user-input-box">
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
</template>

<script>
import { useAuthStore } from "../store/modules/store";
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "UsersGroup",
  components: {
    NavigationBar,
  },
  computed: {
    otherUsers() {
  
  return useAuthStore().users;
},
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="css"></style>
