<template>
  <div class="flatmate">
    <img class="profileimage" :src="image">
    <div class="flex-col flatmate-text">
      <span class="username">{{user.firstName + " " + user.lastName}}</span>
      <span class="useremail">{{user.email}}</span>
    </div>
    <span class="remove icon" v-if="!user.owner">🗑️</span>
    <span class="owner icon" v-if="user.owner">👑</span>
  
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import userService from '@/services/user.service.js';

export default {
  name: "Home",
  props: ['user'],
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
      const response = await userService.getProfileImage();
      this.image = response;
    }
  },
  computed: {
  }
};
</script>

<style lang="scss" scoped>

.flatmate {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.flatmate-text {
  text-align: left;
}

.username {
  font-weight: 600;
}

.useremail {
  font-weight: 100;
}

.profileimage {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin:  0 15px 0 0;
}

.icon {
  font-size: 20px;
  margin-left: auto;
  width: 50px;
}

</style>

