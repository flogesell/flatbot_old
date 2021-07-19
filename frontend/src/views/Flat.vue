<template>
  <div class="flat">
    <section class="content">
      <h1 class="section-header">Deine Flat</h1>
      <h2 class="section-header">Name</h2>
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

export default {
  name: "Flat",
  components: {
    Flatmate,
  },
  data() {
    return {
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
