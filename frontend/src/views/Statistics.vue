<template>
  <div class="statistics">
    <section class="content">
      <h1 class="section-header">Ausgaben dieses Monats</h1>
      <monthlyBills class="chart" :data="piedata" />
      <piechart class="chart" :data="piedata" :options="options"/>
    </section>
  </div>
</template>

<script>
import Piechart from '../components/charts/piechart.vue';
import monthlyBills from '../components/charts/monthlyBills.vue';

export default {
  name: "Statistics",
  data() {
    return {
    options: {
      responsive: true,
      legend: {
        labels: {
            fontColor: "white",
            fontSize: 18
        }
      },
    },
    piedata: {
      labels: ['Flo', 'Liz', 'Luis'],
        datasets: [{
            label: '€ ausgegeben',
            data: [12, 19, 3],
            backgroundColor: [
                '#2ecc71',
                '#e74c3c',
                '#2c3e50',
            ],
            borderWidth: 1
        }]
    },
     bardata: {
      labels: ['Flo', 'Liz', 'Luis'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                '#2ecc71',
                '#e74c3c',
                '#2c3e50',
            ],
            borderWidth: 1
        }]
    },
  }
  },
  components: {
<<<<<<< HEAD
    Piechart,
    monthlyBills
=======
    //Piechart,
    //monthlyBills
>>>>>>> backend
  },
};
</script>
