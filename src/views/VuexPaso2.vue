<template>
<div>
  <h1>Hola {{this.nombre}}</h1>

    <router-link :to="{ name: 'vuex' }">Volver</router-link>
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

  },
  created:function(){
      this.nombre = this.$store.getters.getNombre
  }
}
</script>
