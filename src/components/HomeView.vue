<template>
    <button class="main-button about">
    <router-link @click="hideWelcome" to="/AboutView" class="link"> O aplikacji </router-link>
  </button>
    <div class="container">
      
      <div class="welcome-container">
      <div class="welcome-heading">
        <h1>Hej Palaczu. Tak, Ty.</h1>
        
      </div>
      <div class="user-enters-buttons">
        <button class="main-button" @click="clearLocals">wyczyść</button>
        <button class="main-button register">
          <router-link @click="hideWelcome" to="/RegisterView"  class="link">
          Stwórz konto
        </router-link>
        </button>
        <button class="main-button login">
          <router-link @click="hideWelcome" to="/LoginView" class="link">
          Zaloguj się
        </router-link>
        </button>
      </div>
  
    </div>
  </div>
</template>

<script>

export default {
    name: "HomeView",
    data() {
        return {};
    },
    methods: {
      hideWelcome(){
        this.$emit("hide-welcome");
      },
      clearLocals(){
        localStorage.clear();
      }
    }
};


</script>

<style lang="css">

</style>