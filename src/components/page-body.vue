<template>
<div id="SongList">
<h2>{{song}}</h2>

<button @click="addToPlayList" v-if="!isplaylist">add to playlist</button>
<button @click="removefromplaylist" v-else>remove from playlist</button>


</div>


</template>

<script>
export default {
  name: "page-body",
  data: function() {}
};
</script>

<style scoped>
</style>