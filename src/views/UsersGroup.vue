<template>
    <NavigationBar/>
  <div>
    <h1>W grupie raźniej! Sprawdź jak radzą sobie inni</h1>
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
