<template>
    <div>
      <b-container fluid>
        <h3>{{ title }}</h3>
        <h6>{{ subtitle }}</h6>
  
        <b-row>
          <b-col>
            <b-form-select v-model="selectedYear" :options="yearOptions"></b-form-select>
          </b-col>
        </b-row>
  
        <b-row>
          <b-col md="8">
            <MapComponent :data="filteredData" />
          </b-col>
          <b-col md="4">
            <BarChartComponent :data="filteredData" />
          </b-col>
        </b-row>
  
        <b-row>
          <b-col md="8">
            <LineChartComponent :data="filteredData" />
          </b-col>
          <b-col md="4">
            <PieChartComponent :data="filteredData" />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </template>
  
  <script>
  import MapComponent from "./MapComponent.vue";
  import LineChartComponent from "./LineChartComponent.vue";
  import BarChartComponent from "./BarChartComponent.vue";
  import PieChartComponent from "./PieChartComponent.vue";
  
  export default {
    components: {
      MapComponent,
      LineChartComponent,
      BarChartComponent,
      PieChartComponent,
    },
    data() {
      return {
        title: "Indonesia Active Fires Dashboard",
        subtitle: "This dashboard shows active fires...",
        main_df: null, // Load your data here
        selectedYear: 2020,
        yearOptions: [2020, 2021],
      };
    },
    computed: {
      filteredData() {
        // Apply filtering based on the selected year
        // and return the filtered data for the charts
      },
    },
    created() {
      // Load data, apply preprocessing and store it in main_df
    },
  };
  </script>  