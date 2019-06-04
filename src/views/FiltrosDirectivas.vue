<template>
<div>
<input v-model="nombre">
{{nombre | mayusculas}}
</div>


</template>
<script>
export default {
  data(){
    return {
      nombre:"",
    }
  },
  filters:{
    mayusculas:function(value){
      return value.toUpperCase()
    }
  }
}
</script>
