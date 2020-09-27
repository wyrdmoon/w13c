<template>
    
<div id="song"></div>
  


</template>

<script>
export default {
    name: "SongList",
    data: function() {
        return{
            SongList: this.$store.state.SongList,
            
        }

    }
}
</script>

<style scoped>

</style>