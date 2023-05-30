import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false,
    user: null,
    userID: null,
    selectedOption: null,
    totalCigarettes: 0,
    users: [],
  }),
  actions: {
    register({ username, password, selectedOption, totalCigarettes }) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const existingUser = users.find((user) => user.username === username);
      if (existingUser) {
        throw new Error("Username already exists");
      }
      const userID = users.length + 1;
      const newUser = {
        userID,
        username,
        password,
        history: [],
        totalCigarettes,
        selectedOption,
      };
      this.users.push(newUser);
      localStorage.setItem("users", JSON.stringify(this.users));
      console.log(this.users);
    },
    login({ username, password }) {
      this.users = JSON.parse(localStorage.getItem("users")) || [];
      const user = this.users.find((user) => user.username === username);
      if (!user || user.password !== password) {
        throw new Error("Nieprawidłowe hasło i/lub nazwa użytkownika");
      }
      this.isLoggedIn = true;
      this.user = { ...user, uniqueDays: 0 };
    },
    logout() {
      this.isLoggedIn = false;
      this.user = null;
    },
    updateUser() {
      const updatedUsers = this.users.map((user) => {
        if (user.username === this.user.username) {
          return {
            ...this.user,
            totalCigarettes: Number(this.user.totalCigarettes),
            uniqueDays: new Set(this.user.history.map((entry) => entry.date))
              .size,
          };
        }
        return user;
      });
      this.users = updatedUsers;
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    },
  },
});
