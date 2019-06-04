<template>
<div >
<select v-model="color">
  <option value="#FF0000">#FF0000</option>
  <option value="#00FF00">#00FF00</option>
  <option value="#0000FF">#0000FF</option>
</select>
  <form>

<label for="nombre">Nombre</label>
<input id="nombre" type="text" v-model="nuevaPersona.nombre">
<label for="apellido">Apellido</label>
<input id="apellido" type="text" v-model="nuevaPersona.apellido">
<label for="edad">Edad</label>
<input id="edad" type="number" v-model.number="nuevaPersona.edad">

<button @click.prevent="agregarPersona()" :style="{'background':color}">Agregar a {{nombreCompleto}}</button>
</form>

<ul>
  <li v-for="persona in personas">
    Nombre: {{persona.nombre}} / Edad: {{persona.edad}}
  </li>
</ul>
</div>


</template>
<script>
export default {
  data(){
    return {
      color:"#FF0000",
      personas:[],
      nuevaPersona:{
        nombre:"",
        apellido:"",
        edad:0
      }
    }
  },
  computed:{
    nombreCompleto:function(value){
      return this.nuevaPersona.nombre + " " + this.nuevaPersona.apellido
    }
  },
  methods:{
    agregarPersona:function(){
      this.personas.push(JSON.parse(JSON.stringify(this.nuevaPersona)))
    }
  },
  watch:{
    color:function(colorNuevo,colorAntiguo){
      alert("Cambiaste el color de "+colorAntiguo+" a "+colorNuevo)
    },
    nuevaPersona:{
      handler(val){
        console.log("Hubo un cambio en los datos de la persona")
      },
      deep:true
    }
  }
}
</script>
<style scoped lang="scss">

form{
  display:flex;
  flex-direction:column;
  align-items:center;
}
ul{
  list-style: none;
}
</style>
