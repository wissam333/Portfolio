<template>
  <div>
    <div
      id="chart"
      width="400"
      type="bar"
      :options="options"
      :series="series"
    ></div>
  </div>
</template>
<script>
import ApexCharts from "apexcharts";
export default {
  name: "apexLineChart",
  data: function () {
    return {
      options: {
        grid: {
          row: {
            colors: ["#1c1c1c"],
          },
          column: {
            colors: ["#1c1c1c"],
          },
        },
        series: [
          {
            data: [1000, 900, 850, 800, 800, 850, 900, 800],
          },
        ],
        chart: {
          foreColor: "#fff",
          type: "bar",
          width: "100%",
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
        title: {
          text: "My Skills",
          align: "center",
          floating: true,
        },
        dataLabels: {
          enabled: true,
          textAnchor: "start",
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
          },
        },
        colors: ["#69649c"],
        yaxis: {
          max: 1000,
          labels: {
            show: false,
          },
        },
        xaxis: {
          categories: [
            "HTML",
            "CSS",
            "JAVA SCRIPT",
            "SASS",
            "JQUERY",
            "BOOTSTRAP",
            "ANIMATION",
            "VUE",
          ],
        },
        tooltip: {
          theme: "light",
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function () {
                return "";
              },
            },
          },
        },
      },
    };
  },
  mounted() {
    var chart = new ApexCharts(document.querySelector("#chart"), this.options);
    chart.render();
  },
};
</script>
