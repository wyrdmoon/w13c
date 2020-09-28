<template>
    
<div>
<song-list>
    <h2> {{ song }} </h2>

    <h3> {{ artist }} </h3>


</song-list>
</div>
  


</template>

<script>
export default {
    name: "SongList",
    data: function() {
        return{
            SongList: this.$store.state.SongList,
            
        };

    },
};
</script>

<style scoped>

</style>