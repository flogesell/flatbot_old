<template>
  <div class="login-register">
    <div class="container">
      <img class="flatbot-logo" src="@/assets/flatbot-logo.png">
      <span class="flatbot-desc ">The bot that keeps an overview of all your housing expenses at all times</span>
      <form class="login-register-form" @submit.prevent="login">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="username">
        <label for="email">Passwort</label>
        <input id="password" type="password" v-model="password">
        <input id="submit" type="submit" value="Login">
      </form>
      <router-link class="route-link" to="/forgotpassword" tag="span">Passwort vergessen?</router-link>
      <router-link class="route-link" to="/register" tag="span">Keinen Account? Registrieren</router-link>
      <div class="middle-trenner"><hr><span>oder logg dich ein mit</span><hr></div>
      <div class="buttons">
        <button class="facebook"><img class="icon" src="@/assets/icons/facebook.svg"></button>
        <button class="apple"><img class="icon" src="@/assets/icons/apple.svg"></button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import auth from '@/services/user.service.js';

export default { 
  name: "Login",
  components: {},
  data() {
    return {
      username: '',
      password: '',
      msg: ''
    };
  },
  methods: {
    async login() {
      try {
        const credentials = {
          email: this.username,
          password: this.password
        };
        const response = await auth.login(credentials);
        this.msg = response.data;
        const token = response.accessToken;
        const user = response.account_data;
        this.$store.dispatch('login', { token, user });
        this.$router.push('/');
      } catch (error) {
        this.msg = error;
      }
    }
  }
};
</script>

<style scoped lang="scss">


</style>
