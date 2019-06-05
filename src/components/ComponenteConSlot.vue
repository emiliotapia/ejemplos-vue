<template>
<div class="componente-slot">
  <h1>Hola, soy un componente y tengo slots</h1>
  <h2>
    <slot>Este es el contenido por defecto del slot</slot>
  </h2>
  <h3>
    <slot name="slot-con-nombre">Este es un slot con nombre</slot>
  </h3>

  <p>
    <slot name="slot-con-scope" :datos="usuario">
      Este es un slot con scope
    </slot>
  </p>
</div>
</template>
<script>
export default {
  data(){
    return {
      usuario:{
        nombre:"Usuario Genérico",
        edad:20
      }
  }
}
}
</script>

<style>
.componente-slot{
  border:2px solid black;
}
</style>
