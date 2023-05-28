import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);

const selectedOption = localStorage.getItem('selectedOption');
if (selectedOption) {
  pinia.state.value.auth.selectedOption = selectedOption;
}
app.mount('#app');
