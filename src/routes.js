import Home from './components/Header.vue'
import Contact from './components/Form.vue'
import Loading from './components/Loading.vue'

export const routes = [
  { path: '/startjourney', component: Home},
  { path: '/contact', component: Contact},
  { path: '', component: Loading }
];
