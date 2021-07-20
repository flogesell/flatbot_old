<template>
  <div class="settings">
    <section class="content">
      <h1 class="section-header">Allgemein</h1>

    </section>
    <section class="content">
      <h1 class="section-header">Account</h1>
      <span v-on:click="logout" class="text-action orange">Abmelden</span>
      <span class="text-action red">Account löschen</span>
      
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {},
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.text-action {
  text-align: left;
  cursor: pointer;
  margin-bottom: 15px;
}

.red {
  color: #E12D2D;
}

.orange {
  color: #E1752D;
}
</style>
