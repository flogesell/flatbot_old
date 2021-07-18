<template>
  <div class="profile" >
    <section class="content">
    <img class="profileimage" :src="image">
    <span class="username">{{user.firstName + " " + user.lastName}}</span>
    <span class="useremail">{{user.email}}</span>
    </section>
    <section class="content">
      <h1 class="section-header">Allgemein</h1>
      <h2 class="section-header">Beschreibungen</h2>
    </section>
  </div>
</template>

<script>
import user from '@/services/user.service.js';


export default {
  name: "Profile",
  components: {
  },
  data() {
    return {
      image: ''
    };
  },
  created: function(){
        this.getImage();
  },
  methods: {
    async getImage() {
      const response = await user.getProfileImage();
      this.image = response;
    }
  },
  computed: {
    user() {
      return this.$store.getters.StateUser;
    }
  }
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

</style>
