import Home from './components/Header.vue'
import Contact from './components/Form.vue'
import Loading from './components/Loading.vue'
import Slogan from './components/TransitionText.vue'

export const routes = [
  { path: '/startjourney', component: Home},
  { path: '/slogan', component: Slogan},
  { path: '/contact', component: Contact},
  { path: '', component: Loading }
];
