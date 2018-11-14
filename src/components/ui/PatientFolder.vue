<template>
    <div class="patient-folder-wrapper">
        <div class="patient-folder-title-wrapper">
            <div class="patient-folder-title-pusher"></div>
            <div class="patient-folder-title">Patient</div>
            <div class="alert-div" v-if="alarm">
                <img src="../../../exclamation-mark.svg" />
            </div>
        </div>
        
        <div class="patient-folder-data">
            <table>
                <tr>
                    <td class="patient-folder-info-title">name</td>
                    <td class="patient-folder-info-data">{{name}}</td>
                </tr>
                <tr>
                    <td class="patient-folder-info-title">email</td>
                    <td class="patient-folder-info-data">{{email}}</td>
                </tr>
                <tr>
                    <td class="patient-folder-info-title">phone</td>
                    <td class="patient-folder-info-data">{{phone}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  props: ["name", "email", "phone", "alarm"]
};
</script>

<style>
@font-face {
  font-family: UniSans;
  src: url(../../../public/Uni-Sans-Heavy.otf);
}

.patient-folder-wrapper {
  display: flex;
  flex-direction: column;
  font-family: UniSans;
  font-size: 1.4em;
  letter-spacing: 0.1em;
}


.patient-folder-title-wrapper{
    display: flex;
    flex-direction: row;   
}

.patient-folder-title-pusher{
    flex-grow: 2;
}

.patient-folder-title {
    background-color: #e0013f;
    color: white;
    padding: 10px;
    border-radius: 16px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    text-align: center;
    flex-grow: 1;
}

.patient-folder-data {
    background-color: white;
    padding: 10px;
    border: 5px solid #e0013f;
    border-radius: 16px;
    border-top-right-radius: 0px;
    overflow: hidden;
}

.patient-folder-info-title {
    text-align: right;
    padding-right: 10px;
    color: #e0013f;
}

.patient-folder-info-data {
    text-align: left;
    color: #4fa0ca;
}

.alert-div {
    height: 2em;
    width: 2em;
}
</style>
