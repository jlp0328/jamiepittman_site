<template>
  <Main>
    <div class="timeline">
      <ul></ul>
    </div>
  </Main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: "";
  position: absolute;
  width: 6px;
  background-color: red;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}
</style>