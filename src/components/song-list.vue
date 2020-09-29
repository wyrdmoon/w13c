<template>
    
<div>
    <h2> Songs </h2>
    <h4 @click="addToPlayList(song)" v-for="song in songlist" :key="song.id">{{ song.artist }}</h4>
   

</div>





  


</template>

<script>




export default {
    name: "SongList",
    data: function() {
        return{
            songlist: this.$store.state.songlist,
            
        }
        

    },
    methods: {
        addToPlayList(addSong) {
             this.$store.commit('toPlayList', addSong)
        }
        
    },
   

   
    
}
</script>

<style scoped>

</style>