import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nombre:""
  },
  getters:{
    getNombre: state =>{
      return state.nombre
    }
  },
  mutations: {
    setNombre(state,nombre){
      state.nombre = nombre
    }
  },
  actions: {

  }
})
