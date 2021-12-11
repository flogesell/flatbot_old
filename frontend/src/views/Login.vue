<template>
  <div class="login-register">
    <div class="logo-container">
      <img class="flatbot-logo" src="@/assets/flatbot-logo.png">
    </div>
    <div class="container">
      <div class="login-wrapper">
        <h1>Einloggen</h1>
        <div class="buttons">
          <button class="apple">
            <img class="icon" src="@/assets/icons/apple.svg">
            Mit Apple anmelden
          </button>
          <button class="email" @click="emailLogin">
           <span> Mit Email anmelden</span>
          </button>
        </div>
        <div class="links">
          <router-link class="route-link" to="/forgotpassword" tag="span">Passwort vergessen?</router-link>
          <router-link class="route-link" to="/register" tag="span">Keinen Account? Registrieren</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default { 
  name: "Login",
  components: {},
  data() {
    return {

    };
  },
  methods: {
    emailLogin() {
      this.$router.push('/login-email');
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



span.route-link   {
  cursor: pointer;
  margin-bottom: 10px;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
}

.buttons button {
  cursor: pointer;
  padding: 10px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
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
