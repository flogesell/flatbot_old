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
          <span class="menu-icon"><i class="fas fa-home"></i></span>
          <span class="menu-title">Dashboard</span>
        </router-link>
        <router-link class="route-link" to="/statistics" tag="div">
          <span class="menu-icon"><i class="fas fa-chart-pie"></i></span>
          <span class="menu-title">Statistiken</span>
        </router-link>
        <router-link class="route-link" to="/party" tag="div">
          <span class="menu-icon"><i class="fas fa-calendar"></i></span>
          <span class="menu-title">Partys</span>
        </router-link>
        <router-link class="route-link" to="/flat" tag="div">
          <span class="menu-icon"><i class="fas fa-house-user"></i></span>
          <span class="menu-title">Deine Flat</span>
        </router-link>
        <router-link class="route-link" to="/settings" tag="div">
          <span class="menu-icon"><i class="fas fa-cog"></i></span>
          <span class="menu-title">Einstellungen</span>
        </router-link>
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

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.nav {
  position: sticky;
  top: 0px;
  height: 60px;
  max-width: 100%;
  display: flex;
  padding: 10px;
  align-items: middle;
  -webkit-box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.25);
  -moz-box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.25);
  box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.25);
  z-index: 1000;
}

.nav .container {
  align-items: center;
  display: flex;
}

.nav .menu {
  margin-left: auto;
  padding: 20px;
  display: none;
}

.nav .route {
  padding: 10px;
  h1 {
    margin: 0;
  }
}

@media only screen and (min-width: 1024px) {
  .nav-container {
    .flyout {
      display: flex;
      flex-direction: row;
      width: 100%;
      position: fixed;
      bottom: 0;
      background-color: #219ed6;
      color: white;
      font-size: 24px;
    }
  }

  .flyout {
    .primary {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: auto;
      width: 60%;
    }
    .primary .route-link {
      display: flex;
      flex-direction: column;
      margin: 15px 0;
      text-align: left;
      width: 100%;
      align-items: center;
      cursor: pointer;

      .menu-title {
        margin-top: 6px;
        font-size: 16px;
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
      border-radius: 10px 10px 0 0;
      background-color: white;
      -webkit-box-shadow: 0px 2px 30px 5px #333333; 
      box-shadow: 0px 2px 30px 5px #333333;
      color: white;
    }
  }

  .flyout {
    .primary {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      height: 100%;
    }
    .primary .route-link {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      .menu-title {
        font-size: 10px;
        display: none;
      }

      .menu-icon {
        font-size: 24px;
        color: $ui-grey;
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
