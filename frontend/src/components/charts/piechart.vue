<script>
//import { Pie } from "vue-chartjs";

export default {
  data() {
    return {};
  },
  props: ["data", "options"],
  mounted() {
    this.renderChart(this.data, this.chartOptions);
  },
};
</script>

<style></style>
