<template>
  <div class="dashboard">
    <div class="quick-view">
      <div class="flex-row center full-height flex-container">
        <div class="flex-col grow" style="width: 50%; padding: 15px;"><span class="dashboard-desc">Du schuldest</span><span class="dashboard-money">- 40,33€</span></div>
        <div class="flex-col grow" style="width: 50%; padding: 15px;"><span class="dashboard-desc">Gesamte Ausgaben</span><span class="dashboard-money">40,33€</span></div>
      </div>
      <div class="addBill">+</div>
    </div>
    <section class="content">
      <div class="header-hr"><h1 style="margin-bottom: 0px;" class="section-header">Juli</h1><hr></div>
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
          id: "ef5d2090-8a59-4746-b3afdf0-easfasd2f7fe63e",
          name: "Liz",
          description: "Netto",
          betrag: 10.77,
          date: Date.now(),
        },
        {
          id: "ef5d2090-8asdfasd-4746-b3sdgsdfgf0-efbd2f7fe63e",
          name: "Liz",
          description: "Netto",
          betrag: 10.77,
          date: Date.now(),
        },
        {
          id: "efsdfgsdfg90-8a59-4746-b3afdf0-efbd2f7fe63e",
          name: "Liz",
          description: "Netto",
          betrag: 10.77,
          date: Date.now(),
        },
        {
          id: "ef5d2090-8a59-4746-b3afdf0-efbsdgdsfg63e",
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
        {
          id: "ef5d2090-8afasdfasd9-4746-b3afdf0-efbd2f7fe63e",
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

<style lang="scss" scoped>
.quick-view {
  background: #219ed6;
  height: 200px;
  position: relative;

  .flex-container {
    width: 30%;
    margin: 0 auto;
  }
}

.addBill {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background: white;
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translate(-50%);
  -webkit-box-shadow: 0px 0px 10px 10pxrgba(0,0,0,0.15);
  box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 200;
  cursor: pointer;
}

.header-hr {
  display: flex;
  align-items:center;
  margin-bottom: 15px;

  h1 {
    min-width: 54px;
  }

  hr {
    flex-grow: 1;
    align-items: center;
    margin-left: 15px;
    border: 2px solid #219ed6;
  }
}

.dashboard-desc {
  font-size: 32px;
  color: white;
}

.dashboard-money {
  font-size: 2em;
  color: white;
}



@media only screen and (max-width: 1024px) {
  .quick-view {
    width: 100%;

    .flex-container {
    width: 100%;
    margin: 0 auto;
  }
  }
}

</style>
