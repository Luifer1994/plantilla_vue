<template>
  <apexchart
    type="radialBar"
    width="350"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  name: "CharMarket",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [44, 55, 67, 83],
      chartOptions: {
        chart: {
          height: 250,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: "22px",
              },
              value: {
                fontSize: "16px",
              },
              total: {
                show: true,
                label: "Total",
                formatter: function () {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 249;
                },
              },
            },
          },
        },
        labels: ["Samsung", "Huawei", "Xiaomi", "Sony"],
      },
    };
  },
};
</script>