<template>
<div>
 <song-list></song-list>
 <play-list></play-list>

</div>


</template>

<script>

import SongList from "./song-list.vue";
import PlayList from "./play-list.vue";

 

export default {
  name: "page-body",
  components: {
  
  SongList,
  PlayList,
 },
 
};
</script>

<style scoped>
#layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
}


</style>