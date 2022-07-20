<template>
  <div id="app">
    <nav>
      <router-link to="/" class="btn btn-primary">Home</router-link>
      <router-link to="/usuarios" class="btn btn-primary">Usuarios</router-link>
      <router-link to="/posteos" class="btn btn-primary">Posteos</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
