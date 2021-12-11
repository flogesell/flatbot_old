<template>
  <div class="party">
    <section class="content">
      <h1 class="section-header">Deine Partys</h1>
      <div class="flex-row flat-info">
        <span class="flat-label">Name</span>
        <span class="flat-value right">Flos Wohnung</span>
      </div>
      <div class="flex-row flat-info">
        <span class="flat-label">Währung</span>
        <span class="flat-value right">€ Euro</span>
      </div>
    </section>

    <section class="content">
      <h1 class="section-header">Deine Invitecode</h1>
      <inviteCode :code="invitecode" type="flat" />
      <span class="invitecode">{{invitecode}}</span>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import inviteCode from '@/components/inviteCode.vue'

export default {
  name: "Party",
  data() {
    return {
      invitecode: "0bba4745",
    }
  },
  components: {
    inviteCode
  },
};
</script>
