<template>
    <div>
      <canvas ref="chart"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from "chart.js";
  
  export default {
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    mounted() {
      const chartData = this.countActiveFiresByProvince();
      this.renderChart(chartData);
    },
    methods: {
      countActiveFiresByProvince() {
        const provinceCounts = {};
  
        // Loop through the data and count the number of active fires by province
        Object.values(this.data).forEach((fire) => {
          if (
            fire.type === 0 &&
            fire.confidence === "h" &&
            fire.province.includes("Kalimantan") &&
            fire.acq_date.startsWith("2021")
          ) {
            const province = fire.province;
            provinceCounts[province] = (provinceCounts[province] || 0) + 1;
          }
        });
  
        // Return the province counts as an array of objects
        return Object.entries(provinceCounts).map(([province, count]) => ({
          province,
          count,
        }));
      },
      renderChart(data) {
        const ctx = this.$refs.chart.getContext("2d");
  
        const chart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: data.map((item) => item.province),
            datasets: [
              {
                label: "Active Fires by Province in Kalimantan (2021)",
                data: data.map((item) => item.count),
                backgroundColor: "#ff6384",
              },
            ],
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          },
        });
      },
    },
  };
  </script>
  