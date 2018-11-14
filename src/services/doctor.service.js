import {fire} from './fire'

export async function getPatients() {
    const email = fire.auth().currentUser.email
    const patientsRes = await fire.database().ref('/patients/').orderByChild('doctor').equalTo(email).once('value')
    const patients = patientsRes.val()

    let patientsList = []

    for (const patientKey in patients) {
        if (patients.hasOwnProperty(patientKey)) {
           patientsList.push({...patients[patientKey], id: patientKey})
        }
     }
     console.log(patientsList)
     return patientsList
}

export async function updateThreshold(patientId, threshold) {
    await fire.database().ref('/patients/' + patientId + '/threshold').set(threshold)
}

export async function updateEndDate(patientId, endDate) {
    await fire.database().ref('/patients/' + patientId + '/endDate').set(endDate)
}

export async function updateTherapy(patientId, therapy) {
    await fire.database().ref('/patients/' + patientId + '/therapy').set(therapy)
}