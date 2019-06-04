<template>
<div>
<ul>
  <li v-for="elemento in lista" @click="seleccionaElemento(elemento)">
    {{elemento}}
  </li>
</ul>
</div>
</template>
<script>
export default {
  props:["lista"],
  data(){
    return {
      nombre:"",
    }
  },
    methods:{
    seleccionaElemento:function(elemento){
      this.$emit("seleccion",elemento)
    }
  },
  beforeCreate:function(){
    console.log("Se va a crear el componente hijo ")
  },
  created:function(){
    console.log("Se creó el componente hijo ")
  },
  beforeMount:function(){
    console.log("Se va a montar el DOM del componente hijo")
  },
  mounted:function(){
    console.log("Se montó el DOM del componente hijo")
  },
  beforeUpdated:function(){
    console.log("Ocurrirá una actualización en el componente hijo")
  },
  updated:function() {
    console.log("Ocurrió una actualización en el componente hijo")
  },
  beforeDestroy:function(){
    console.log("Se va a destruir el componente hijo")
  },
  destroyed:function(){
    console.log("Se destruyó el componente hijo")
  }
}
</script>


<style scoped lang="scss">
ul{
  list-style: none;
  li{
    cursor:pointer;
    &:hover{
      background-color:"#1D1D1D"
    }
  }
}

</style>
