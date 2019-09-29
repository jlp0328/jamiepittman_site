<template>
  <nav class="footer">
    <a href="https://twitter.com/jamiepittmandev" target="_blank" class="twitter icon"></a>
    <a href="https://www.instagram.com/jamiepittman.dev/" target="_blank" class="instagram icon"></a>
    <a href="https://www.linkedin.com/in/jlpittman10/" target="_blank" class="linkedin icon"></a>
    <a href="https://github.com/jlp0328" target="_blank" class="github icon"></a>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background: $peachy-pink;
  color: white;
  height: $standard-nav-height;
  @media only screen and (max-width: $mobile-breakpoint) {
    height: $mobile-nav-height;
  }
  @media only screen and (min-width: $laptop-min-breakpoint) {
    height: $desktop-nav-height;
  }
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.icon {
  height: 40px;
  width: 40px;
  margin: 0 15px;
  filter: invert(100%) sepia(1%) saturate(0%) hue-rotate(338deg)
    brightness(108%) contrast(100%);
  @media only screen and (max-width: $mobile-breakpoint) {
    height: 25px;
    width: 25px;
  }
}
</style>