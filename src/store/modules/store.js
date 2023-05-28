import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    user: null,
    userID: null,
    selectedOption: null,
    // smokingHistory: {
    //   entries: [],
    //   totalCigarettes: 0,
    // },
  }),
  actions: {
    register({ username, password, selectedOption }) {
      
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const existingUser = users.find(user => user.username === username);
      if (existingUser) {
        throw new Error('Username already exists');
      }
      const userID = users.length + 1; 
      const newUser = {userID, username, password, items: 0, history: [], selectedOption };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      console.log(users);
    },
    login({ username, password }) {
     
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(user => user.username === username);
      if (!user || user.password !== password) {
        throw new Error('Invalid credentials');
      }
      this.isLoggedIn = true;
      this.user = user;
    },
    logout() {
      this.isLoggedIn = false;
      this.user = null;
    },
    updateUser() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = users.map(user => {
          if (user.username === this.user.username) {
            return { ...this.user };
          }
          return user;
        });
        localStorage.setItem('users', JSON.stringify(updatedUsers));
      }
  }
})

