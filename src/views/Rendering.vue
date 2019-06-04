<template>
  <div class="home">

    <label for="nombre">Ingresa tu nombre: </label>
    <input id="nombre" v-model="nombre">
    <button @click="borrar()">Borrar</button>
    <div v-if="nombre.length>0">

    <h2>Hola {{nombre}}, aquí tienes una lista de anímales</h2>

    <ul>
      <li v-for="animal in animales" @mouseover="selectAnimal(animal)" @mouseleave="resetAnimal()">
        {{animal}}
      </li>
    </ul>
    <input v-model="nuevoAnimal"> <button @click="agregarAnimal()">Agregar</button>
    <h3>{{animalElegido}}</h3>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Ejemplo1',
  data: function(){
    return {
      nombre:"",
      animalElegido:"",
      nuevoAnimal:"",
      animales:["perro","gato","quokka","narval"]
    }
  },
  methods:{
     selectAnimal:function(animal){

       this.animalElegido=animal
     },
     resetAnimal:function(){
       this.animalElegido=""
     },
     borrar:function(){
       this.nombre=""
     },
     agregarAnimal:function(){
       if (this.nuevoAnimal.length>0)
        this.animales.push(this.nuevoAnimal)
     }
  }
}
</script>
<style scoped lang="scss">
ul{
  list-style: none;
}
</style>
