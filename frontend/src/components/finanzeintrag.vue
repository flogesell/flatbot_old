<template>
  <div :id="id" class="flatmate">
    <img class="profileimage" :src="image" />
    <div class="flex-col finanz-info">
      <span class="username">{{ user.description }}</span>
      <span class="useremail">{{
        user.name + " hat " + user.betrag + "€ gezahlt"
      }}</span>
    </div>
    <div class="flex-col finanz-date-price right">
      <span class="calculated">{{ (user.betrag / 2).toFixed(2) + " €" }}</span>
      <span class="date">{{ date() }}</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import userService from "@/services/user.service.js";

export default {
  name: "Home",
  props: ["user", "id"],
  components: {},
  data() {
    return {
      image: "",
    };
  },
  mounted() {},
  created: function () {
    this.getImage();
  },
  methods: {
    async getImage() {
      const response = await userService.getProfileImage();
      this.image = response;
    },
    date() {
      let date = new Date(this.user.date);
      date =
        date.getDate() +
        "." +
        (((date.getMonth() + 1) < 10) ?  ("0" + ( date.getMonth() + 1)) : (date.getMonth() + 1))  +
        "." +
        date.getFullYear().toString().substr(-2);
      return date;
    },
  },
  computed: {},
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
  font-size: 0.8em;
}

.profileimage {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin: 0 15px 0 0;
}

.icon {
  font-size: 20px;
  margin-left: auto;
  width: 50px;
}

.middle {
  margin-left: auto;
}

.right {
  text-align: right;
}

.finanz-info {
  text-align: left;
  flex-grow: 1;
}

.insg {
  align-self: auto;
  width: 160px;
}

.calculated {
  align-self: auto;
  margin-left: 30px;
  font-size: 1.2em;
  text-align: right;
  font-weight: 600;
}

.date {
  font-weight: 200;
}
</style>
