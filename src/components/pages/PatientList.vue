<template>
    <div>
        <Header :isDoctor="false" :name="doctor"/>

        <div class="patient-list">
                <li v-for="patient of patients" :key="patient.id" @click="selectPatient(patient.id)">
                    <PatientFolder :id="patient.id"
                                   :name="patient.name"
                                   :email="patient.email"
                                   :phone="patient.contact"
                                   :alarm="patient.notification"
                                   @click="selectPatient(patient.id)"/>
                </li>
            </div>
        </div>

</template>

<script>
    import Header from "../ui/Header";
    import PatientFolder from "../ui/PatientFolder";
    import {getPatients} from '../../services/doctor.service'
    import {fire} from '../../services/fire'
    import router from '../../routes/routes'

    export default {
        components: {
            PatientFolder,
            Header,
        },
        data() {
            return {
                doctor: '',
                patients: []
            }
        },
        methods: {
            selectPatient(id) {
                router.push({name: 'Patients', params: {id: id}})
            },
            isThresholdPassed(patient) {
                const threshold = patient.threshold
                const entries = patient.entries
                if (threshold && entries) {
                    for (const entryKey in entries) {
                        console.log(Date.parse(entries[entryKey].date),  (new Date().setUTCHours(0,0,0,0)))
                        if (entries.hasOwnProperty(entryKey) && (Date.parse(entries[entryKey].date) == (new Date().setUTCHours(0,0,0,0)))) {
                            if (entries[entryKey].measured > threshold) {
                                return true
                            }
                        }
                    }
                } else {
                    return false
                }
            },
            hasDatePassed(patient) {
                if (patient.endDate){
                    if (Date.parse(this.patient.endDate) < Date.parse(new Date())) {
                        return true
                    } else {
                        return false
                    }
                } else {
                    return false
                }
            },
        },
        async created() {
            this.patients = await getPatients()
            this.doctor = fire.auth().currentUser.email
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: UniSans;
        src: url(../../../public/Uni-Sans-Heavy.otf);
    }

    .alert-note {
        margin: 0 auto;
        text-align: center;
        margin-top: 1em;
        padding: 2em;
        width: 15em;
        background-color: #fff;
        font-family: UniSans;
        color: #4FA0CA;
        border-radius: 8px;
        box-shadow: 4px 4px #E0013F;

    }

    .patient-list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    li {
        display: inline;
        list-style-type: none;
        box-sizing: border-box;
        padding: 2em;
    }



</style>