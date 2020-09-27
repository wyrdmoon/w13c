<template>
  <div id="app">
    <page-body></page-body>
    <song-list></song-list>
    <play-list></play-list>
  </div>
</template>

<script>
import PageBody from "./components/page-body.vue";
import SongList from "./components/song-list.vue";
import PlayList from "./components/play-list.vue";

export default {
  name: "App",
  components: {
    PageBody,
    SongList,
    PlayList,
   
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
