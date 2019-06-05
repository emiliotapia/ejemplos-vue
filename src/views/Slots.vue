<template>
<div>
Abajo insertaré un componente que tiene slots
<componente-con-slot>
<ul>
  <li>Esto reemplaza</li>
  <li> el contenido</li>
  <li>del slot</li>
</ul>

<template v-slot:slot-con-nombre>
  Esto reemplaza el slot con nombre
</template>

<template v-slot:slot-con-scope="datosDelSlot">
  Nombre: {{datosDelSlot.datos.nombre}} // Edad: {{datosDelSlot.datos.edad}}
</template>
</componente-con-slot>
</div>
</template>
<script>
import componenteConSlot from "@/components/ComponenteConSlot.vue"
export default {
  components:{
    componenteConSlot
  },
  data(){
    return {
    }
  }
}
</script>
