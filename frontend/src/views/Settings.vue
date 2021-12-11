<template>
  <div class="settings">
    <section class="content">
      <h1 class="section-header">Dein Account</h1>
      <section class="content">
      <img class="profileimage" :src="image">
      <span class="username">{{user.firstName + " " + user.lastName}}</span>
      <span class="useremail">{{user.email}}</span>
      <span v-on:click="logout" class="text-action orange">Abmelden</span>
      <span class="text-action red">Account löschen</span>
    </section>
    <section class="content">
      <h1 class="section-header">Allgemein</h1>

    </section>
      
      
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import user from '@/services/user.service.js';

export default {
  name: "Home",
  components: {},
  data() {
    return {
      image: null,
      user: new Object,
    }
  },
  mounted() {
    this.getImage();
    this.user = this.$store.getters.StateUser;
  },
  computed: {

  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
    async getImage() {
      const response = await user.getProfileImage();
      this.image = response;
    }
  },
  
};
</script>

<style lang="scss" scoped>
.username {
  margin-top: 10px;
  font-weight: 600;
}

.useremail {
  margin-top: 10px;
  font-weight: 400;
}

.profileimage {
  width: 180px;
  height: 180px;
  object-fit: cover;
}

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
