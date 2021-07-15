<template>
  <div class="login">
    <div class="container">
      <img class="flatbot-logo" src="@/assets/flatbot-logo.png">
      <span class="flatbot-desc ">The bot that keeps an overview of all your housing expenses at all times</span>
      <form class="login-form">
        <input type="email">
        <input type="password">
        <input type="submit" value="Login">
      </form>
      <router-link class="route-link" to="/forgotpassword" tag="span">Passwort vergessen?</router-link>
      <router-link class="route-link" to="/register" tag="span">Keinen Account? Registrieren</router-link>
      <div class="middle-trenner"><hr><span>or login with</span><hr></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default { 
  name: "Login",
  components: {},
};
</script>

<style scoped lang="scss">
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
} 

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
}

.login-form {
  margin:10px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
}

.login-form input{
  width: 100%;
  margin:10px 0;
  padding: 10px;
  box-sizing: border-box;
}

.login-form input[type="submit"]{
  background: linear-gradient(45deg, #3FFB45 , #33F839);
  -webkit-transition: background 1s;
  -moz-transition: background 1s;
  -o-transition: background 1s;
  transition: background 1s;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
}

.login-form input[type="submit"]:hover{
  background: linear-gradient(45deg, #00CE06, #24FF2B );
}

.flatbot-logo {
  width: 250px;
  margin-bottom: 25px;
}

span.route-link   {
  margin-bottom: 10px;
}

.flatbot-desc {
  font-size: 1.4em;
}

.middle-trenner {
  display: flex;
  width: 100%;
  margin-top: 25px;
}

.middle-trenner hr {
  flex: auto;
}

.middle-trenner span {
  margin: 0 15px;
}
</style>
