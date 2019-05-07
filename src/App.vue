<template>
  <div id="app">
    <Fullpage v-if="showfull"/>
    <left-pane></left-pane>
    <router-view class="page"></router-view>
  </div>
</template>

<script>
import LeftPane from "./components/LeftPane";
import Fullpage from "./components/Fullpage";
let parent;
export default {
  name: "app",
  components: {
    LeftPane,
    Fullpage
  },
  data: () => ({
    showfull: false
  }),
  watch: {
    $route: () => {
      parent.showfull = true;

      setTimeout(function() {
        parent.showfull = false;
      }, 800);
    }
  },
  created() {
    parent = this;
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  background-color: #050505;
  display: flex;
}

.page {
  width: 93%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  position: fixed;
}
</style>
