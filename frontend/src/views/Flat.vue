<template>
  <div class="flat">
    <section class="content">
      <h1 class="section-header">Deine Flat</h1>
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
    <section class="content">
      <h1 class="section-header">Deine Flatmates</h1>
      <Flatmate
        v-for="flatmate in flatmates"
        :key="flatmate.id"
        :user="flatmate"
      />
      
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Flatmate from "@/components/flatmate.vue";
import inviteCode from '@/components/inviteCode.vue'

export default {
  name: "Flat",
  components: {
    Flatmate,
    inviteCode,
  },
  data() {
    return {
      invitecode: "0bba4745",
      flatmates: [
        {
          id: "0bba4745-9830-4d39-a686-74312bcfc936",
          firstName: "Florian",
          lastName: "Gesell",
          email: "gesell@example.com",
          owner: true,
        },
        {
          id: "ef5d2090-8a59-4746-b3a0-efbd2f7fe63e",
          firstName: "Elisabeth",
          lastName: "Franke",
          email: "elli@example.com",
        },
        {
          id: "f3752d8c-4702-446a-84f4-110c76607c7b",
          firstName: "Luis",
          lastName: "Schweigard",
          email: "loisl@example.com",
        },
      ],
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.flat-info:not(.flat-info:first-child) {
  margin-top: 15px;
}

.flat-label {
  font-family: 'Montserrat SemiBold';
}

.flat-value {
  font-family: 'Montserrat';
  font-size: 18px;
}

.invitecode {
  margin-top: 15px;
  font-family: 'Montserrat';
  font-size: 22px;
}

</style>
