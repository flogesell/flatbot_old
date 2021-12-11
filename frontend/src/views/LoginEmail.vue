<template>
  <div class="login-register">
    <div class="logo-container">
      <img class="flatbot-logo" src="@/assets/flatbot-logo.png">
    </div>
    <div class="container">
      <div class="login-wrapper">
        <h1>Einloggen</h1>
        <form class="login-register-form" @submit.prevent="login">
          <label for="email">Email</label>
          <input id="email" type="email" v-model="username">
          <label for="email">Passwort</label>
          <input id="password" type="password" v-model="password">
          <input id="submit" class="submit" type="submit" value="Login">
      </form>
        <div class="links">
          <router-link class="route-link" to="/forgotpassword" tag="span">Passwort vergessen?</router-link>
        </div>
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
@import "@/assets/styles/variables.scss";

.login-register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: linear-gradient(to right bottom, #2980b9, #3795ca, #47aadb, #59bfea, #6dd5fa);
  h1 {
    margin-bottom: 20px;
    color: $ui-primary;
  }
  .logo-container {
    height: 100%;
    display: flex;
    justify-content: center;
    .flatbot-logo {
      align-self: center;
      width: 250px;
      height: auto;
    }
  }
} 

.container {
  width: 100%;
  min-height: 50%;
  background: white;
  border-radius: 10px 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-wrapper {
    width: 80%;
    .links {
      display: flex;
      flex-direction: column;
      margin: 20px 0;
    }
  }
}

.login-register-form {
  display: flex;
  flex-direction: column;
  text-align: left;
  input {
    margin-bottom: 10px;
    height: 40px;
    width: 100%;
    border: 1px solid $ui-grey;
    border-radius: 5px;
    box-sizing: border-box;
  }
  .submit {
    cursor: pointer;
    padding: 10px;
    height: 40px;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    color: white;
    font-family: sans-serif;
    background: linear-gradient(45deg, #3382F8, #3FB6FB );
  }
  .icon {
    width: 16px;
  }
}


span.route-link   {
  cursor: pointer;
  margin-bottom: 10px;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin: 0 -5px;
  margin-top: 20px;
}

.buttons button {
  cursor: pointer;
  padding: 10px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  flex: auto;
  margin: 0 5px;
  align-content: space-between;
  color: white;
  font-family: sans-serif;

  .icon {
    width: 16px;
  }
}



.email {
  background: linear-gradient(45deg, #3382F8, #3FB6FB );
}

.apple {
  background: black;
}

.dot {
  height: 25px;
  width: 25px;
  background-color: #fff;
  border: 1px solid rgb(197, 197, 197);
  border-radius: 50%;
  display: inline-block;
}

.dot.current-step {
  background-color: #219ED6;
  border-color: #219ED6 ;
}
 
.dot.step-done {
  background-color: #35F93B;
  border-color: #35F93B;
}

.loading-dots {
  width: 100%;
  position: relative;
  height: 30px;
  display: flex;
  align-items: center;
}

.loading-dots hr {
  position: absolute;
  width: 98%;
}

.loading-dots .dots {
  position: absolute;
  display: flex;
  width: 100%;
  align-content: space-around;
}

.loading-dots .dots:nth-child(2) {
  margin: 0 auto;
}

</style>
