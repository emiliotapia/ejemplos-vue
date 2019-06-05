<template>
<div>
  <input id="mostrar" type="checkbox" v-model="mostrar">
  <label for="mostrar">Hola</label>
  <transition name="fade">
  <h1 v-if="mostrar">¡Hola!</h1>
  </transition>
  <transition-group name="mover" tag="ul">
  <li v-for="animal in animales" :key="animal">
      {{animal}}
  </li>
  </transition-group>

  <p>
    <input v-model="nuevoAnimal"><button @click="agregar()">Agregar</button></p>
  <p>
    <button @click="eliminarRandom()">Borrar Cualquiera</button></p>
  <p>
    <button @click="invertir()">Invertir</button>
  </p>

</div>
</template>
<script>
export default {
  data(){
    return {
      mostrar:false,
      animales:["perro","gato","quokka","narval"],
      nuevoAnimal:"",
    }
  },
  methods:{
    agregar:function(nuevo){
      if (this.nuevoAnimal.length>0) this.animales.push(this.nuevoAnimal)
    },
    eliminarRandom:function(){
      var posicion = Math.floor(Math.random() * this.animales.length)
      this.animales.splice(posicion, 1);
    },
    invertir:function(){
      this.animales.reverse()
    }

  }
}
</script>
<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.mover-enter-active, .mover-leave-active{
    transition: all 2s ease;
}

.mover-enter{
  opacity:0;
  transform:translateX(-60px)
}

.mover-leave-to{
  opacity:0;
  transform:translateX(60px)
}

.mover-move{
  transition: transform 1s;
}

ul{
  display:flex;
  list-style: none;
  flex-direction: column;
  align-items: center;
}
</style>
