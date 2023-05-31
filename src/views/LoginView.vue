<template>
  <button class="main-button back" @click="$router.back()">Powrót</button>
  <div class="user-enter-container">
    <h1 class="input-heading">Zaloguj się</h1>
    <form @submit.prevent="login" class="register-form">
      <div class="user-input-box">
        <label for="username" class="input-heading">Nazwa użytownika:</label>
        <input
          type="text"
          id="username"
          class="main-input"
          v-model="username"
          autocomplete="off"
          required
        />
      </div>

      <div class="user-input-box">
        <label for="password" class="input-heading">Hasło:</label>
        <input
          type="password"
          id="password"
          class="main-input"
          v-model="password"
          autocomplete="off"
          required
        />
        <button type="submit" class="start-button login">Zatwierdź</button>
        <span>12345678</span>
      </div>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from "../store/modules/store";

export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const auth = useAuthStore();
      try {
        auth.login({ username: this.username, password: this.password });
        this.$router.push("/UserDashboard");
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

<style lang="css"></style>
