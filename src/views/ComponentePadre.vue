<template>
<div>
  
  <h2>Hay un componente abajo y el elemento seleccionado es {{seleccionado}}</h2>
  <componente-hijo :lista="animales" @seleccion="mostrarSeleccion" />
</div>
</template>
<script>
import componenteHijo from "@/components/ComponenteHijo.vue"
export default {
  components:{
    componenteHijo
  },
  data(){
    return {
      seleccionado:"",
      animales:["perro","gato","quokka","narval"]
    }
  },
  methods:{
    mostrarSeleccion:function(evento) {
      alert(evento)
    }
  }
}
</script>
