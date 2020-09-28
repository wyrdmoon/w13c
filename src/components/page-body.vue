<template>
<div>
  <page-body></page-body>
<h2>{{ song }}</h2>

<button @click="addToPlayList" v-if="!isplaylist">add to playlist</button>
<button @click="removefromplaylist" v-else>remove from playlist</button>
<button @click="addToPlayList (song)" v-if="!isplaylist">add to playlist</button>
<button @click="removefromplaylist(song)" v-else>remove from playlist</button>
</div>


</template>

<script>

import SongList from "./components/song-list.vue";
import PlayList from "./components/play-list.vue";

 

export default {
  name: "page-body",
  components: {
  
  SongList,
  PlayList,
 

  }
};
</script>

<style scoped>
#layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
}


</style>