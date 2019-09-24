<template>
  <div class="banner">
    <h1>Jamie Pittman</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  // width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  // opacity: .4;
  // font-family: FunSized;
  color: white;
  // background: $banner-color;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("../assets/leopard_print.jpg");
}
</style>