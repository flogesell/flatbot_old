<template>
  <div class="login-register">
    <div class="container">
      <img class="flatbot-logo" src="@/assets/flatbot-logo.png">
      <div class="loading-dots">
        <hr>
        <div class="dots">
          <span class="dot current-step" :class="currentStep === 1 ? 'current-step' : 'step-done'"></span>
          <span style="margin: 0 auto;" class="dot" :class="[currentStep == 2 ? 'current-step' : '', currentStep > 2 ? 'step-done' : '']" ></span>
          <span class="dot" :class="[currentStep == 3 ? 'current-step' : '', emailVerificated ? 'step-done' : '']"></span>
        </div>
      </div>
      <form class="login-register-form" id="register-form-1" v-if="currentStep==1">
        <label for="email">Email</label>
        <input id="email" type="email">
        <label for="password">Passwort</label>
        <input id="password" type="password">
        <label for="repeatpassword">Passwort wiederholen</label>
        <input id="repeatpassword" type="password">
        <input type="submit" value="Nächster Schritt" v-on:click="nextStep">
      </form>
      <form class="login-register-form" id="register-form-2" v-if="currentStep==2">
        <span class="profileimage"></span>
        <label for="name">Name</label>
        <input id="name" type="name">
        <label for="flatcode">Flatcode</label>
        <input id="flatcode" type="flatcode">
        <input type="submit" value="Nächster Schritt" v-on:click="nextStep">
      </form>
      <router-link class="route-link" to="/" tag="span">Du hast schon einen Account? Einloggen</router-link>
      <div class="middle-trenner"><hr><span>oder registrier dich mit</span><hr></div>
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

export default {
  name: "Register",
  components: {
  },
  data() {
    return {
      currentStep: 1,
    }
  },
  methods: {
  nextStep: function (event) {
    event.preventDefault();

    if(this.currentStep !== 3)this.currentStep = ++this.currentStep;
  }
}
};
</script>

<style lang="scss">
.login-register {
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
  width: 80%;
  max-width: 400px;
}

.login-register-form {
  margin:10px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
}

.login-register-form input{
  width: 100%;
  margin:10px 0;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #808080;
}

.login-register-form input[type="submit"]{
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

.login-register-form input[type="submit"]:hover{
  background: linear-gradient(45deg, #00CE06, #24FF2B );
}

.login-register-form label {
  text-align: left;
  color: #484848;
  margin-top: 10px;
}

.profileimage {
  height: 100px;
  width: 100px;
  margin: 10px auto;
  background-color: #fff;
  border: 2px solid rgb(197, 197, 197);
  border-radius: 50%;
  display: inline-block;
  background-image: url('../assets/stockProfilePicture.jpg');
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

.buttons {
  display: flex;
  width: 100%;
  margin: 0 -5px;
  margin-top: 25px;
}

.buttons button {
  padding: 10px;
  height: 42px;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  flex: auto;
  margin: 0 5px;
  align-content: space-between;
}

.icon {
  width: 16px;
}

.facebook {
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

