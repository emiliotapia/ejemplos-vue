<template>
<div class="buttons">
<button @click="saludar('Hola')">Saludar</button>
<button @click="hacerAlgo">Hacer algo</button>
</div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  methods:{
    sumar:function(a,b){
      return a+b
    },
    saludar:function(mensaje){
      alert(mensaje)
    },
    hacerAlgo:function(evento){
      console.log("Evento click",evento)
    }
  }
}
</script>
