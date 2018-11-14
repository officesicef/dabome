<template>
  <div id="app">
    <router-view/>
    <!--<LineChart />-->
    <!--<NotifyButton :alerted="true" />-->
    <!--<NotifyButton :alerted="false" />-->
    <!--<CalendarInput :inputLabel="'hello'" :inputValue="'world'" :isPatient="false"/>-->
    <!--<LabeledInput :inputLabel="'hello'" :inputValue="'world'" :isPatient="false" :isAlert="true"/>-->
    <!--<PatientFolder :name="'Ime'" :surname="'prezime'" :email="'lele@leelelellelelleleeurfgSUIEFG78weuygfe.com'" :phone="'+381645347649'" />-->
  </div>
</template>

<script>
import LabeledInput from "./components/ui/LabeledInput.vue";
import NotifyButton from "./components/ui/NotifyButton.vue";
import CalendarInput from "./components/ui/CalendarInput.vue"
import PatientFolder from "./components/ui/PatientFolder.vue";
import LineChart from "./components/ui/LineChart.vue";
export default {
  name: "app",
  components: {
    // LabeledInput,
    // NotifyButton,
    // CalendarInput,
    // PatientFolder,
    // LineChart
  }
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  background-image: url("../background-pattern.svg");
  background-repeat: repeat;
}

#app > * {
  height: 100%;
  width: 100%;
  margin: 0;
}

.app {
  font-family: "Roboto", sans-serif;
  background-color: cornflowerblue;
}

.patient-folder-wrapper{
  width: 20em;
}
</style>
