<template>
  <div class="nav-container">
    <div class="nav">
      <img class="flatbot-quad-logo" src="@/assets/flatbot_smallLogo.png" />
      <div class="container route left">
        <h1>{{ route }}</h1>
      </div>
      <div class="container menu right" v-on:click="menu = !menu">
        <img class="icon icon-menu" src="@/assets/icons/menu.png" />
      </div>
    </div>
    <div class="flyout">
      <div class="primary">
        <router-link class="route-link" to="/dashboard" tag="div">
          <span class="menu-icon">💻</span>
          <span class="menu-title">Dashboard</span>
        </router-link>
        <router-link class="route-link" to="/statistics" tag="div">
          <span class="menu-icon">📊</span>
          <span class="menu-title">Statistiken</span>
        </router-link>
        <router-link class="route-link" to="/party" tag="div">
          <span class="menu-icon">🎉</span>
          <span class="menu-title">Partys</span>
        </router-link>
        <router-link class="route-link" to="/flat" tag="div">
          <span class="menu-icon">🏡</span>
          <span class="menu-title">Deine Flat</span>
        </router-link>
        <router-link class="route-link" to="/profile" tag="div">
          <span class="menu-icon">👤</span>
          <span class="menu-title">Dein Profil</span>
        </router-link>
        <router-link class="route-link" to="/settings" tag="div">
          <span class="menu-icon">⚙️</span>
          <span class="menu-title">Einstellungen</span>
        </router-link>
      </div>
      <div class="misc-links">
        <span class="route-link" v-on:click="logout()">Logout</span>
        <router-link class="route-link" to="/impressum" tag="span"
          >Impressum</router-link
        >
        <router-link class="route-link" to="/datasecurity" tag="span"
          >Datenschutzerklärung</router-link
        >
        <router-link class="route-link" to="/cookies" tag="span"
          >Cookies</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    route: String,
  },
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  height: 60px;
  max-width: 100%;
  display: flex;
  padding: 10px;
  align-items: middle;
  -webkit-box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.25);
  -moz-box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.25);
  box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.25);
  position: relative;
  z-index: 1000;
}

.nav .container {
  align-items: center;
  display: flex;
}

.nav .menu {
  margin-left: auto;
  padding: 20px;
}

.nav .route {
  padding: 10px;
}

@media only screen and (min-width: 1024px) {
  .nav-container {
    .flyout {
      display: flex;
      flex-direction: column;
      width: 20%;
      height: calc(100% - 80px);
      position: absolute;
      right: 0;
      background-color: #219ed6;
      color: white;
      font-size: 24px;
    }
  }

  .flyout {
    .primary {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: auto;
      width: 80%;
    }
    .primary .route-link {
      display: flex;
      flex-direction: row;
      margin: 15px 0;
      text-align: left;
      width: 100%;
      align-items: baseline;
      cursor: pointer;

      .menu-title {
        margin-left: 18px;
      }
    }
    .misc-links {
      display: flex;
      flex-direction: column;
      text-align: left;
      width: 80%;
      margin: 0 auto;
      font-size: 18px;
      .route-link {
        cursor: pointer;
      }
    }
  }

  .left {
    align-items: baseline !important;
    h1 {
      text-align: left;
      padding: 15px;
    }
  }

  .right {
    align-items: end !important;
  }
}

@media only screen and (max-width: 1024px) {
  .nav .menu {
    display: none;
  }

  .nav-container {
    .flyout {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 70px;
      position: fixed;
      bottom: 0;
      background-color: grey;
      color: white;
    }
  }

  .flyout {
    .primary {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: auto;
      width: 100%;
    }
    .primary .route-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      align-items: center;
      cursor: pointer;

      .menu-title {
        font-size: 10px;
      }

      .menu-icon {
        font-size: 24px;
        filter: grayscale(1);
      }
    }
    .misc-links {
      display: none;
    }
  }

  .left {
    align-items: baseline !important;
  }

  .right {
    align-items: end !important;
  }
}
</style>
