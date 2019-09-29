<template>
  <Main>
    <div class="main-page-container">
      <div class="email">
        <h2>Email</h2>
        <p>jamie@jamiepittman.dev</p>
        <div class="schitts-creek-gif">
          <iframe
            src="https://giphy.com/embed/3ohzdPyUqqwg6Qw9m8"
            width="100%"
            height="100%"
            style="position:absolute"
            frameborder="0"
            class="giphy-embed"
            allowfullscreen
          ></iframe>
        </div>
        <p>
          <a
            href="https://giphy.com/gifs/schittscreek-poptv-pop-tv-comedy-funny-eugenelevy-danlevy-schittscreek-3ohzdPyUqqwg6Qw9m8"
          >via GIPHY</a>
        </p>
      </div>
    </div>
  </Main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.email {
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: unset;
    text-align: center;
  }

  h2::before,
  h2::after {
    content: "\1f495";
    padding: 10px;
  }

  p {
    text-align: center;
    @media only screen and (max-width: $mobile-breakpoint) {
      font-size: 20px;
      margin: 10px auto;
    }
  }

  .schitts-creek-gif {
    width: 85%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
  }
}
</style>