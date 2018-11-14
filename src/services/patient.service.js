import {fire} from './fire'

export async function submitGlucozeLevel(level, date, threshold) {
    const user = fire.auth().currentUser
    await fire.database().ref().child('/patients/' + user.uid + '/entries').push({
        measured: level,
        date,
        threshold
    }).key
}

export async function notifyDoctor() {
    const user = fire.auth().currentUser
    await fire.database().ref('/patients/' + user.uid + '/notification').set(true)
}
