<template>
  <div>
    <div v-if="$mq !== 'mobile'" class="main-menu">
      <g-link class="nav__link" to="/">About Me</g-link>
      <g-link class="nav__link" to="/loving">What I'm Loving...</g-link>
      <g-link class="nav__link" to="/experiences">Experiences</g-link>
      <g-link class="nav__link" to="/blog">Blog</g-link>
      <g-link class="nav__link" to="/contact">Contact</g-link>
    </div>
    <div v-if="$mq === 'mobile'" class="phone-menu">
      <ClientOnly>
        <Slide noOverlay>
          <g-link class="nav__link" to="/">About Me</g-link>
          <g-link class="nav__link" to="/loving">What I'm Loving...</g-link>
          <g-link class="nav__link" to="/experiences">Experiences</g-link>
          <g-link class="nav__link" to="/blog">Blog</g-link>
          <g-link class="nav__link" to="/contact">Contact</g-link>
        </Slide>
      </ClientOnly>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Slide: () =>
      import("vue-burger-menu")
        .then(m => m.Slide)
        .catch()
  },
  data() {
    return {
      isMobile: false
    };
  },
  methods: {
    checkWidth() {
      this.checkIfPhone();
    },
    checkIfPhone() {
      this.isMobile = window.innerWidth <= 400 ? true : false;
    }
  },
  mounted() {
    window.addEventListener("resize", this.checkWidth);
    this.checkIfPhone();
  }
};
</script>

<style lang="scss" scoped>
.main-menu {
  background: $peachy-pink;
  color: #ffe7bc;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.nav__link {
  color: #ffe7bc;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  margin-left: 20px;
}
</style>