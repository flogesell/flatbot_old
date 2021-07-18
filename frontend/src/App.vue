<template>
  <div id="app">
    <Navigation :route="currentRouteName" v-if="!isLoginOrRegister"/>
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    },
    isLoginOrRegister() {
     return this.$route.name === 'Login' || this.$route.name === 'Register'
  }
}

};
</script>

<style lang="scss">
body, html {
  margin: 0;
  width: 100%;
  height: 100%;
  position: relative;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 50px auto;
}

.content h1.section-header{
  margin: 0;
  text-align: left;
  margin-bottom: 10px;
}

.content h2.section-header{
  text-align: left;
  font-weight: 400;
  font-size: 20px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
