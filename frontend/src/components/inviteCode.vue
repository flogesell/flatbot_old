<template>
  <!--<qrcode-vue :value="this.inviteId()" :foreground="foreground" :size="size" level="H" />-->
  <div></div>
</template>
<script>
  //import QrcodeVue from 'vue-qrcode'

  export default {
    props: ["code","type"],
    data() {
      return {
        baseURL: "http://localhost:8080",
        size: 200,
        foreground: "#219ed6",
      }
    },
    methods: {
      inviteId() {
            return this.baseURL + "/invite/" + this.type + "/" + this.code;
        }
    },
    components: {
      //QrcodeVue,
    },
  }
</script>
