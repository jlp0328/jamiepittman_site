<template>
  <Main>
    <div class="main-page-container landing-wrapper">
      <g-image alt="Jamie Pic" src="~/Jamie_Texture.jpg" width="135" />
      <p>My personal site is currently under construction... brought to you by Gridsome!</p>
    </div>
  </Main>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.landing-wrapper {
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
