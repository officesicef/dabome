<template>
  <div class="line-chart-wrapper">
    <div class="line-chart-calendar">
      <span class="line-chart-calendar-control" @click="selectMonth(-1)">◄</span>
      <span class="line-chart-calendar-date">{{months[selectedMonth]}} {{selectedYear}}</span>
      <span class="line-chart-calendar-control" @click="selectMonth(1)">►</span>
    </div>
    <highcharts :options="getChartOptions()"></highcharts>
  </div>
    
</template>

<script>
import Highcharts from "highcharts";
import exportingInit from "highcharts/modules/exporting";
import { Chart } from "highcharts-vue";

exportingInit(Highcharts);
export default {
  components: {
    highcharts: Chart
  },
  props: ["patientData"],
  data() {
    return {
      selectedYear: new Date().getFullYear(),
      selectedMonth: new Date().getMonth(),
      months: [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december"
      ]
    };
  },
  methods: {
    selectMonth(factor) {
      this.selectedMonth += factor;
      if (this.selectedMonth < 0) {
        this.selectedMonth = 11;
        this.selectedYear += factor;
      }
      if (this.selectedMonth > 11) {
        this.selectedMonth = 0;
        this.selectedYear += factor;
      }
      console.log(this.patientData);
    },
    getChartOptions: function() {
      const lel = this.patientData;
      const lelYear = this.selectedYear;
      const lelMonth = this.selectedMonth;
      const options = {
        chart: {
          type: "line",
          borderRadius: 20
        },
        title: {
          text: null // "Monthly Average Temperature"
        },
        subtitle: {
          // text: "Source: WorldClimate.com"
        },
        xAxis: {
          type: "datetime"
        },
        yAxis: {
          title: {
            text: "Glucose (mmol/L)"
          }
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true
            }
          }
        },
        tooltip: {
          crosshairs: {
            color: "#2cf492", // green
            dashStyle: "solid"
          },
          shared: true,
          backgroundColor: "#ffffff"
        },
        series: [
          {
            name: "Patients glucose level",
            color: "#4fa0ca", // Blue
            data: Object.keys(lel)
              .filter(key => key != "dabosme")
              .map(key => lel[key])
              .map(data => [Date.parse(data.date), Number(data.measured)])
              .filter(entry => new Date(entry[0]).getMonth() == lelMonth && new Date(entry[0]).getFullYear() == lelYear)
          },
          {
            name: "Patients glucose threshold level",
            color: "#e0013f", // Red
            data: Object.keys(lel)
              .filter(key => key != "dabome")
              .map(key => lel[key])
              .map(data => [Date.parse(data.date), Number(data.threshold)])
              .filter(entry => new Date(entry[0]).getMonth() == lelMonth && new Date(entry[0]).getFullYear() == lelYear)
          }
        ]
      };
      return options;
    }
  }
};
</script>

<style>
@font-face {
  font-family: UniSans;
  src: url(../../../public/Uni-Sans-Heavy.otf);
}

.line-chart-wrapper {
  font-family: UniSans;
  font-size: 1.4em;
  user-select: none;
}

.line-chart-calendar {
  text-align: center;
  background-color: #e0013f;
  color: white;
  padding: 0.5em;
  border-radius: 20px;
  margin-bottom: 0.5em;
}

.line-chart-calendar-control {
  padding: 0 1.5em;
  cursor: pointer;
}
.line-chart-calendar-date {
}
</style>
