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
  width: 90%;
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

.center {
  justify-content: center;
  align-items: center;
}

.gap {
  gap: 15px;
}

.grow {
  flex-grow: 1;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.full-height {
  height: 100%;
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

@media only screen and (min-width: 1024px) {
  .content {
    width: 30%;
}
}
</style>
