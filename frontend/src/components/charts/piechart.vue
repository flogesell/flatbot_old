<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
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
