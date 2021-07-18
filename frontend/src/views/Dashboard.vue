<template>
  <div class="dashboard">
    <span>DASHBOARD</span>
    <img :src="image">
    <button v-on:click="logout">LOGOUT</button>

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import user from '@/services/user.service.js';

export default {
  name: "About",
  components: {
  },
  data() {
    return {
      image: '',
      test: ''
    };
  },
  created: function(){
        this.getImage();
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
    async getImage() {
      const response = await user.getProfileImage();
      this.image = response;
    }
  },
  computed: {
  }
};
</script>
