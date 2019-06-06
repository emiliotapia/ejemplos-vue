<template>
<div>

  <label for="nombre">Nombre </label>
  <input id="nombre" type="text" v-model="nombre">
  <button @click="continuar()">Continuar</button>
</div>
</template>
<script>

export default {

  data(){
    return {
      nombre:""
    }
  },
  methods:{
    continuar:function(){
      this.$store.commit("setNombre",this.nombre)
      this.$router.push({name:"vuexPaso2"})
    }
  },
  created:function(){

      this.$store.commit("setNombre",this.nombre)

      this.nombre = this.$store.getters.getNombre

  }
}
</script>
