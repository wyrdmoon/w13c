import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: [
    songlist[
    {
      artist: "The Doors",
      song: "Light My Fire"
    },

    {
      artist: "AC/DC",
      song: "Money Talks"
    },

    {
      artist: "Prince and the Revolution",
      song: "Purple Rain"
    },

    {
      artist: "Hole in the Sky",
      song: "Black Sabbath"
    },

    {
      artist: "Pantera",
      song: "Planet Caravan"
    }

  ] 

],
mutations: {
  toplaylist: function (state, addedSong) {
    state.playSongs.push(addedSong);
    for (let i = 0; i <state.songs.length; i++) {
      if (state.songs[i] == addedSong) (
        state.songs.splice(i, 1)
      )
    }
  }
  }
},
fromplaylist, function (state, deleteSong){

state.songs.push(deleteSong);
for (let i = 0; i <state.playSongs.length; i++) {
  if (state.playSongs[1] == deleteSong) {
    state.playSongs.splice(i, 1);
  }
} 
   

  
 
});
