<script>
import { Bar } from "vue-chartjs";

const options = {
  responsive: true,
  legend: {
    labels: {
      color: "blue",
      fontSize: 18,
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        position: "bottom",
        time: {
          displayFormats: {
            day: "MM/YY",
          },
          tooltipFormat: "DD/MM/YY",
          unit: "day",
        },
        // leave only one label per month
        afterTickToLabelConversion: function (data) {
          var xLabels = data.ticks;
          var oldLabel = "";
          xLabels.forEach(function (labels, i) {
            if (xLabels[i] == oldLabel) {
              xLabels[i] = "";
            } else {
              oldLabel = xLabels[i];
            }
          });
        },
      },
    ],
  },
};

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
