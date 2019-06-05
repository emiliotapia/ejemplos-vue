<template>
<div>
<p><label for="color">Escribe un color en inglés o hexadecimal: </label>
<input type="text" id="color" v-model="color">
</p>
<p>
<label for="radio">Radio del margen:</label>
<input type="number" id="radio" v-model="radio">
</p>
{{color | mayusculas}}
<p class="caja" v-fondo="color" v-radio="radio">Tengo un par de directivas</p>


</div>

</template>
<script>
export default {
  data(){
    return {
      color:"",
      radio:10,
    }
  },
  filters:{
    mayusculas:function(value){
      return value.toUpperCase()
    }
  },
  directives:{
    fondo: function(el,binding) { // Esta directiva se activa para los "bind" y "updated"
      el.style.background=binding.value
    },
    radio: {
      bind:function(el,binding){
        console.log("Solo mostraré un console.log")
      },
      update:function(el,binding){
        el.style.borderRadius=binding.value+"px"
      }
    }
  }
}
</script>
<style>
.caja{
  border:2px solid black;
  min-height:100px;
}
</style>
