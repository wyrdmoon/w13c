<template>
    <div>
        <play-list>
        <h1>PLAYLIST</h1>
        
        </div>


       
  

</template>

<script>
import { component } from 'vue/types/umd'
import songs from './song-list.vue'


    export default {
        name: "PlayList",
        components: {
            songs
        },
        data:function(){
            return {
                songs : this.$store.state.songs
            }
        },
        name: "song-list",
        components: {
            songs
        },
        computed: {
            courses: function() {
                return this.$store.state.songs; 
            }
        },

        
    };
    
   
</script>

<style lang="scss" scoped>

</style>