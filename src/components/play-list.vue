<template>
    <div>
      
        <h1> PLAYLIST </h1>
    <h4 @click="addToSongList(song)" v-for="song in songs" :key="song.id">{{ song.artist }}</h4>

        </div>


       
  

</template>

<script>




    export default {
        name: "PlayList",
        
        data:function(){
            return {
                playlist: this.$store.state.playlist,
                
            };
        },
      
        


        computed: {
            songs: function() {
                return this.$store.state.playlist;
            }
        },

        
    };
    
   
</script>

<style lang="scss" scoped>

</style>