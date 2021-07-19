<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
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
