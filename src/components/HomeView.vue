<template>
  <div class="container">
  <div class="smoke-background">
 
      <video autoplay muted loop id="smoke-video">
        <source src="../assets/smoke.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="welcome-container">

      <div class="welcome-heading">
        <h1>Hej Palaczu. Tak, Ty.</h1>
      </div>
      <div class="user-enters-buttons">
        <button class="start-button about-btn">
          <router-link @click="hideWelcome" to="/AboutView" class="link">
            O aplikacji
          </router-link></button>
        <button class="start-button register">
          <router-link @click="hideWelcome" to="/RegisterView" class="link">
            Stwórz konto
          </router-link>
        </button>
        <button class="start-button login">
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
    hideWelcome() {
      this.$emit("hide-welcome");
    },
    showInfo(){
      this.$router.push("/AboutView");
    }
  },
};
</script>

<style lang="css">
body {
  background-color: rgb(24, 29, 29);
  color: azure;
}
.welcome-heading {
  text-shadow: rgb(1, 38, 21) 1px 0 10px;
}
.container {
  position: relative;
}
input {
  border-color: rgb(62, 118, 181);
  color: rgb(109, 177, 255);
  background-color: rgb(24, 29, 29);
  font-weight: 600;
  border-radius: 10px;
}
input:focus, input:active, input:focus-visible  {
  border-color: rgb(62, 118, 181);
  color: rgb(109, 177, 255);
  background-color: rgb(24, 29, 29);
}

h1 {
  padding-bottom: 20px;
  
}
button {
  border-radius: 10px;
  border: none;
  color: azure;
}
.smoke-background {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#smoke-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.start-button
 {
  padding: 10px;
  margin: 10px;
  width: 200px;
  border: none;
  box-shadow: rgb(1, 38, 21) 1px 0 10px;
}
.about-btn{
  background-color: rgb(22, 138, 124);

 
  
}
.link {
  color: aliceblue;
}

.register,
.login,
.about-btn {
  transition: border-radius 0.5s ease, background-color 0.5s ease;
  border-radius: 5px;
  font-weight: 700;
}
.register {
  background-color: rgb(0, 35, 132);
  box-shadow: rgb(1, 38, 21) 1px 0 10px;
}
.login {
  background-color: rgb(106, 13, 164)
}

.register:hover {
  animation: shining-register-effect 2s infinite;
  border-radius: 30px;
}
.login:hover {
  animation: shining-login-effect 2s infinite;
  border-radius: 30px;
}
.about-btn:hover {
  animation: shining-about-effect 2s infinite;
  border-radius: 30px;
}
@keyframes shining-register-effect {
  0% {
    background-color: rgb(10, 83, 132);
  }
  50% {
    background-color: rgb(18, 114, 204);
  }
  100% {
    background-color: rgb(23, 52, 147);
  }
}
@keyframes shining-login-effect {
  0% {
    background-color: rgb(116, 65, 204);
  }
  50% {
    background-color: rgb(117, 25, 143);
  }
  100% {
    background-color: rgb(136, 0, 177);
  }
}
@keyframes shining-about-effect {
  0% {
    background-color: rgb(143, 167, 188);
  }
  50% {
    background-color: rgb(39, 171, 169);
  }
  100% {
    background-color: rgb(29, 161, 218);
  }
}
</style>
