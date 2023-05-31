<script>
import  HomeView  from '@/components/HomeView.vue';
import { useAuthStore } from '@/store/modules/store.js'; 


export default {
  
    components: {
        HomeView,
       

    },
    setup() {
    const auth = useAuthStore()

    return { auth }
  },
    data() {
        return {
            welcomeHidden: false,
        };
    },
    methods: {
        hideWelcome(){
          this.welcomeHidden = true;
        }

    }

};

</script>
<template>
  <HomeView
  v-if="!welcomeHidden"
  @hide-welcome="hideWelcome"/>
 
  <router-view v-if="welcomeHidden"/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}
.welcome-heading {
  text-align: center;
}
.link {
  text-decoration: none;
}
.main-button {
  padding: 10px;
  margin: 10px;
  width: 150px;
  border: none;
  transition: border-radius 0.3s ease; 
}
.main-button:hover {
  border-radius: 30px;
}
.back {
background-color: rgb(30, 151, 91);
color: azure;
padding: 5px;
width: 100px;
}
.back:hover {
  background-color: rgb(23, 184, 104);
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.welcome-container {
  position: absolute;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
