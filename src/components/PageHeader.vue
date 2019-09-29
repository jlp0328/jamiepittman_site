<template>
  <div class="page-name-container">
    <h3>{{this.heading}}</h3>
  </div>
</template>

<script>
import routeHeadings from "../route-headings";

export default {
  data: function() {
    return {
      heading: ""
    };
  },
  created() {
    const route = this.$route.path.substring(1).toUpperCase();
    this.heading = routeHeadings[route];
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
//Only visible in mobile view
.page-name-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto 10px auto;
  h3 {
    font-family: Indonesia;
    margin: unset;
    font-size: 40px;
  }
}
</style>