<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">



    <ul>
      <router-link :to="{name:'rendering'}">
        <li>Rendering / binding / directivas básicas</li>
      </router-link>

      <router-link :to="{name:'eventos'}">
        <li>Eventos y métodos</li>
      </router-link>

      <router-link :to="{name:'componentes'}">
        <li>Componentes</li>
      </router-link>

      <router-link :to="{name:'slots'}">
        <li>Slots</li>
      </router-link>

      <router-link :to="{name:'computedWatchers'}">
        <li>Computed y Watchers</li>
      </router-link>

      <router-link :to="{name:'filtrosDirectivas'}">
        <li>Filtros y directivas propias</li>
      </router-link>

      <router-link :to="{name:'transiciones'}">
        <li>Transiciones</li>
      </router-link>
      </ul>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
}
</script>


<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
