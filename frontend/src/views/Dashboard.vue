<template>
  <div class="dashboard">
    <div class="übersicht">
      <span>-110€</span>
    </div>
    <section class="content">
      <h1 class="section-header">Juli</h1>
      <finanzeintrag
        v-for="finanzeintrag in finanzeinträge"
        :id="finanzeintrag.id"
        :key="finanzeintrag.id"
        :user="finanzeintrag"
      />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import finanzeintrag from "@/components/finanzeintrag.vue";

export default {
  name: "About",
  components: {
    finanzeintrag,
  },
  data() {
    return {
      finanzeinträge: [
        {
          id: "ef5d2090-8a59-4746-b3asfas0-efbd2f7fe63e",
          name: "Liz",
          description: "Netto",
          betrag: 10.77,
          date: Date.now(),
        },
        {
          id: "ef5d2090-8a59-4746-b3safasdf0-efbd2f7fe63e",
          name: "Liz",
          description: "Netto",
          betrag: 10.77,
          date: Date.now(),
        },
        {
          id: "ef5d2090-8a59-4746-b3afdf0-efbd2f7fe63e",
          name: "Liz",
          description: "Netto",
          betrag: 10.77,
          date: Date.now(),
        },
      ],
    };
  },
  computed: {},
};
</script>
