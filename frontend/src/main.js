
import { createApp } from 'vue'
import App from './App.vue'
import views from './views';
import components from './components';
import main from '@/views/Main/';



const app = createApp(App);

const compAll = { ...views, ...components, ...main };

Object.values(compAll).forEach(component => {
    app.component(component.name, component);
});



app.mount('#app')
