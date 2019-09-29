<template>
  <div class="layout">
    <Banner />
    <MainMenu />
    <PageHeader v-if="$mq === 'mobile'" />
    <slot />
    <Footer />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Banner from "../components/Banner.vue";
import Footer from "../components/Footer.vue";
import MainMenu from "../components/MainMenu.vue";
import PageHeader from "../components/PageHeader.vue";

export default {
  components: {
    Banner,
    Footer,
    MainMenu,
    PageHeader
  },
  created() {}
};
</script>

<style lang="scss">
.layout {
  // display: grid;
  // min-width: 320px;
  // grid-template-rows: 20% 10% 60% 10%;
  // height: 100vh;
}

h1 {
  color: white;
  text-shadow: 6px -2px black;
  font-size: 32px;
  z-index: 2;
}
</style>
