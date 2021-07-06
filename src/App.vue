<template>
  <div id="nav">
    <router-link to="/egyik">Egyik</router-link>
    <br>
    <router-link to="/masik">Másik</router-link>
    <br>
    <button @click="changeName" type="button">Név változtatás</button>
  </div>

  <h1>{{this.$store.state.nev}}</h1>
  <router-view/>
</template>

<script>
  export default {
    methods: {
      changeName() {
        this.$store.commit('changeName')
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
