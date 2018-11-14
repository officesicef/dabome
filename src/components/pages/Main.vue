<template>
    <div class="main-wrapper">
        <Header :isDoctor="isDoctor" :name="currentUser.email"></Header>
        <div class="flex-container">
            <div class="right-alignment">
                <LineChart :patientData="patient.entries"/>
                <GlucoseInput class="glucose-input" @addedLevel="submitGlucoseLevelData($event)" v-if="!isDoctor"></GlucoseInput>
            </div>
            <div class="left-alignment">
                <LabeledInput :inputLabel="'Threshold'" v-model="patient.threshold" class="threshold" :isAlert="isThresholdPassed()" :isPatient="!isDoctor" @submitted="thresholdSubmitted($event)"></LabeledInput>
                <LabeledInput :inputLabel="'End date'" inputType="date" v-model="patient.endDate" :isAlert="hasDatePassed()" :isPatient="!isDoctor" @submitted="endDateSubmitted($event)" ></LabeledInput>
                <NotifyButton class="notify" @click="notifyDoctorData()" v-if="!isDoctor" :alerted="isAlert"/>
                <Therapy :therapyText="patient.therapy" :isDoctor="isDoctor" @submitted="therapySubmitted($event)"></Therapy>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../ui/Header";
    import LineChart from "../ui/LineChart";
    import GlucoseInput from "../ui/GlucoseInput";
    import LabeledInput from "../ui/LabeledInput";
    import NotifyButton from "../ui/NotifyButton";
    import Therapy from "../ui/Therapy";
    import {submitGlucozeLevel, notifyDoctor} from '../../services/patient.service'
    import {updateThreshold, updateEndDate, updateTherapy} from '../../services/doctor.service'
    import {fire} from '../../services/fire'
    import router from '../../routes/routes'

    export default {
        components: {
            Therapy,
            NotifyButton,
            LabeledInput,
            GlucoseInput,
            LineChart,
            Header,
        },
        data() {
            return {
                patient: {},
                isDoctor: true,
                patientId: ''
            }
        },
        methods: {
            async submitGlucoseLevelData(event) {
                if (this.patient && this.patient.threshold) {
                    await submitGlucozeLevel(event.level, event.date, this.patient.threshold)
                } else {
                    alert(`Your doctor didn't set a threshold!`)
                }
                
            },
            async notifyDoctorData() {
                await notifyDoctor()
            },
            async endDateSubmitted(event) {
                await updateEndDate(this.patientId, event.value)
            },
            async thresholdSubmitted(event) {
                await updateThreshold(this.patientId, parseInt(event.value))
            },
            async therapySubmitted(event) {
                await updateTherapy(this.patientId, event.value)
            },
            hasDatePassed() {
                if (this.isDoctor) {
                    return false
                } else if (this.patient.endDate){
                    if (Date.parse(this.patient.endDate) < Date.parse(new Date())) {
                        return true
                    } else {
                        return false
                    }
                } else {
                    return false
                }
            },
            isThresholdPassed() {
                const threshold = this.patient.threshold
                const entries = this.patient.entries
                if (this.isDoctor) {
                    return false
                } else if (threshold && entries) {
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
            }

        },
        computed: {
            currentUser: function() {
                return fire.auth().currentUser
                },
            isAlert: function() {
                return this.isThresholdPassed() || this.hasDatePassed()
            }
        },
        async created() {
            if (!fire.auth().currentUser) {
                router.push('login')
            }

            if (this.$route.params.id) {
                const userRef = fire.database().ref('/patients/' + this.$route.params.id)
                userRef.on('value', (snapshot) => {
                    this.patient = snapshot.val()
                    console.log(this.patient)
                })
                this.patientId = this.$route.params.id
                await fire.database().ref('/patients/' + this.$route.params.id + '/notification').set(false)
                this.isDoctor = true
            } else {
                const currentUser = fire.auth().currentUser
                const userRef = fire.database().ref('/patients/' + currentUser.uid)
                userRef.on('value', (snapshot) => {
                    this.patient = snapshot.val()
                })
                this.isDoctor = false
            }
        }
    }
</script>

<style scoped>

    .main-wrapper {
        display: flex;
        flex-direction: column;
    }

    .flex-container {
        display: flex;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        padding: 2em;
    }

    .right-alignment {
        width: 100%;
        box-sizing: border-box;
    }

    .left-alignment > *{
        margin-top: 10px;
    }


    .left-alignment {
        display: flex;
        flex-direction: column;
        padding-left: 2em;
    }

    .glucose-input {
        margin: 0 auto;
        margin-top: 1.5em;
        width: 30vw;
    }

    .threshold {
        margin-top: 0;
    }

    .therapy{
        flex-grow: 3;
        height: 100%;
    }
</style>





