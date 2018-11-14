import {fire} from './fire'

export async function registerUser(name, email, password, contact, isDr, drMail) {
    const res = await fire.auth().createUserWithEmailAndPassword(email, password).catch(error => {
        alert(error.message)
    })

    if (isDr) {
        const doctorId = res.user.uid
        await fire.database().ref('doctors/' + doctorId).set({
            name,
            email,
            contact
        })
    } else {
        const patientId = res.user.uid
        await fire.database().ref('patients/' + patientId).set({
            name,
            email,
            contact,
            entries: {
                dabome: 'dabome'
            },
            doctor: drMail
        })
    }
    return isDr
}

export async function loginUser(email, password) {
   const res = await fire.auth().signInWithEmailAndPassword(email, password)
   .catch(error => {
        return Promise.reject(error)
    })
    const userFromDbRes = await fire.database().ref('/doctors/' + res.user.uid).once('value')
    const userFromDb = await userFromDbRes.val()
    if (userFromDb) {
        return true
    } else {
        return false
    }
}

export async function logoutUser() {
    await fire.auth().signOut().catch(error => {
        return Promise.reject(error)
    })
}