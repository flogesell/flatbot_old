<template>
  <div class="nav">
    <img class="flatbot-quad-logo" src="@/assets/flatbot_smallLogo.png">
    <div class="container route">
      <h1>{{ route }}</h1>
    </div>
    <div class="container menu">
      <img class="icon icon-menu" src="@/assets/icons/menu.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    route: String,
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
  -webkit-box-shadow: 0px 0px 9px 3px rgba(41,41,41,.25);
  -moz-box-shadow: 0px 0px 9px 3px rgba(41,41,41,.25);
  box-shadow: 0px 0px 9px 3px rgba(41,41,41,.25);
}

.nav .container{
  align-items: center;
  display: flex;
}

.nav .menu{
  margin-left: auto;
  padding: 20px;
}

.nav .route{
  padding: 10px;
}


</style>
