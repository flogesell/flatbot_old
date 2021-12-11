<template>
  <div class="about">
    <span>Invite ID: {{inviteId}}</span>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Invite",
  components: {
  },
  data() {
      return {
        inviteId: this.$route.params.invite_id,
      }
  },
  created() {
  }
};
</script>
