<template>
    <nav class="main-menu">
        <g-link v-if="!this.isMobile" class="nav__link" to="/">About Me</g-link>
        <g-link v-if="!this.isMobile" class="nav__link" to="/about">What I'm Loving...</g-link>
        <g-link v-if="!this.isMobile" class="nav__link" to="/about">Experiences</g-link>
        <g-link v-if="!this.isMobile" class="nav__link" to="/about">Blog</g-link>
        <g-link v-if="!this.isMobile" class="nav__link" to="/about">Contact</g-link>
        <Hamburger v-if="this.isMobile"/>
    </nav>
</template>

<script>
import Hamburger from '../components/Hamburger.vue';

export default {
components: {
    Hamburger
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
      this.isMobile = (window.innerWidth <= 400) ? true : false;
    }
  },
  mounted() {
    window.addEventListener("resize", this.checkWidth);
    this.checkIfPhone();
  }
    }
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