<template>
  
  <div class="navigation-container">
    <h1 class="title">Licznik Palacza</h1>



    <div class="navbar">
      <div @click="showGroup" class="dropdown">
    <button class="dropbtn">W grupie raźniej
    </button>
    
  </div>
     
  
  <div class="dropdown">
    <button class="dropbtn">Jakie jest Twoje uzależnienie?
    </button>
    <ul class="dropdown-content">
      <li class="nav-link"> HEETSY</li>
      <li class="nav-link">PAPIEROSY</li>
    </ul>
  </div>
  <div class="dropdown">
    <button class="dropbtn">Świadomość
    </button>
    <ul class="dropdown-content">
      <li class="nav-link">Zagrożenia</li>
      <li class="nav-link">Nawyki</li>
      <li class="nav-link">Motywacja</li>
    </ul>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {};
  },
  methods: {
    showGroup(){
      this.$router.push("/UsersGroup");
    }
  },
};
</script>

<style lang="css">
h1 {
  margin: 5px;
  padding-left: 30px;
  text-shadow: rgb(1, 38, 21) 1px 0 10px;
}

.navigation-container {
  background-color: rgb(9, 83, 62);
  color: azure;
  font-size: large;
  align-items: center;
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  
  
}
.navbar {
  overflow: hidden;
  background-color: #333;
  font-family: Arial;
  padding: 5px;
  float: right;
  
}


.navbar .nav-link {
  float: right;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  display: flex;
}


.dropdown {
  float: left;
  overflow: hidden;
}


.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit; 
  margin: 0; 
}


.navbar .nav-link:hover, .dropdown:hover .dropbtn {
  animation: shining-login-effect 1s;
}


.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}


.dropdown-content .nav-link {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}


.dropdown-content .nav-link:hover {
  background-color: #ddd;
}


.dropdown:hover .dropdown-content {
  display: block;
}

 
 



</style>
