<template>
  
  <div class="navigation-container">
    <h1 class="title">Licznik Palacza</h1>



    <div class="navbar">
      <!-- <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
   -->
  <div class="nav-link">W grupie raźniej</div>
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




 
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
  
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {};
  },
  methods: {
   
  },
};
</script>

<style lang="css">
h1 {
  margin: 5px;
  padding-left: 30px;
}
.navigation-container {
  background-color: rgb(9, 9, 117);
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
  background-color: red;
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

 
 


.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #2196F3;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
</style>
