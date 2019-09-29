// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import MainLayout from '~/layouts/Main.vue';
import VueMq from "vue-mq";

require('typeface-merriweather')

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('Main', MainLayout);
  Vue.use(VueMq, {
    breakpoints: {
      mobile: 450,
      tablet: 900,
      laptop: 1250,
      desktop: Infinity
    }
  });
}
