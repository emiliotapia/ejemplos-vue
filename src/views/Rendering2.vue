<template>
  <div class="home">

    <label for="nombre">Ingresa tu nombre: </label>
    <input id="nombre" v-model="nombre">

    <h2>Hola {{nombre}}</h2>
    <label for="cantidad">Adivina cuántos animales tiene la lista: </label>
    <input id="cantidad"  type="number" v-model="valor">
    <div v-if="valor==animales.length">
    <h2>
    ¡Adivinaste!
    </h2>
    <ul>
      <li v-for="animal in animales" @mouseover="selectAnimal(animal)" @mouseleave="resetAnimal()">
        {{animal}}
      </li>
    </ul>
    <h3>{{animalElegido}}</h3>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data: function(){
    return {
      valor:5,
      nombre:"",
      animalElegido:"",
      animales:["perro","gato","quokka","narval"]
    }
  },
  methods:{
     selectAnimal:function(animal){

       this.animalElegido=animal
     },
     resetAnimal:function(){
       this.animalElegido=""
     }

  }
}
</script>
<style scoped lang="scss">
ul{
  list-style: none;
}
</style>
