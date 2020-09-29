import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songlist: [
    {
      artist: "The Doors",
      song: "Light My Fire",
      id:1
    },

    {
      artist: "AC/DC",
      song: "Money Talks",
      id:2
    },

    {
      artist: "Prince and the Revolution",
      song: "Purple Rain",
      id:3
    },

    {
      artist: "Hole in the Sky",
      song: "Black Sabbath",
      id:4
    },

    {
      artist: "Pantera",
      song: "Planet Caravan",
      id:5
    },
   


  ],
  playlist: []

  


  },
  mutations: {
    toPlayList: function(state, addSong) {
      state.playlist.push(addSong)

     
     
     
     
    }
  },
  

  getters: {
    songlist: function(state){
      return state.quote.toPlayList();
    }
  },
})

   

  
 

