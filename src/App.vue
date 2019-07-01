<template>
  <div id="app">
    <toptool />
    <router-view />
  </div>
</template>


<script>
import toptool from "@/components/toptool";

export default {
  components: {
    toptool
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
