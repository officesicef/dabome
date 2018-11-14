<template>
    <div class="login-page">
        <Paper class="login-page-paper">
            <img src="../../../logo-and-title.png" alt="title and logo">
            <form @submit.prevent="loginUserData($event)" class="input-container">
                <label>
                    <span> Email </span>
                    <input placeholder="user@example.com" name="email"/>
                </label>

                <label>
                    <span> Password </span>
                    <input placeholder="password123" name="password" type="password"/>
                </label>
                <span class="flex-wrapper">
            <button>login</button>
                     </span>
            </form>

            <span class="register-span">
                Don't have an account yet?
                <!-- TODO replace <a> with <router-link> -->
                <router-link to="/register"> Sign up free</router-link>
            </span>

        </Paper>
    </div>
</template>

<script>
    import Paper from '../ui/Paper'
    import {loginUser} from '../../services/auth.service'
    import router from '../../routes/routes'
    import {fire} from '../../services/fire'

    export default {
        components: {
            Paper
        },
        data() {
            return {
                isDoctor: 'patient'
            }
        },
        methods: {
            changeType() {
                this.isDoctor = this.isDoctor == 'patient' ? 'doctor' : 'patient'
            },
            async loginUserData(event) {
                await loginUser(event.target.email.value, event.target.password.value)
                .then(res => {
                    if (res) {
                        router.push('patient-list')
                    } else {
                        router.push('patients')
                    }
                })
                .catch(error => {alert(error)}) 
            }
        }

    }
</script>

<style scoped>
    @font-face {
        font-family: UniSans;
        src: url(../../../public/Uni-Sans-Heavy.otf);
    }

    .login-page {
        height: 100%;
        width: 100%;
        margin-top: 12vh;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .login-page-paper {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 30em;
        height: 34em;
        padding: 2em;
        box-sizing: border-box;
        justify-content: space-evenly;
    }

    .input-container {
        margin: 0 auto;
        /*border: 1px solid green;*/
    }

    img {
        display: inline-block;
        margin: 0 auto;
        width: 15em;
        /*border: 1px solid red;*/
    }

    label {
        display: flex;
        /*border: 1px solid red;*/
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        margin-top: 0.5em;
    }

    label > span {
        margin-bottom: 0.5em;
        margin-right: 0.5em;
        margin-top: 0.5em;
        width: 4em;
        font: inherit;
    }

    button {
        margin-top: 1em;
        width: 100%;
        font: inherit;
        color: #fff;
        background-color: #E0013F;
        height: 2.5em;
        border: none;
        border-radius: 4px;
        text-transform: uppercase;
        font-family: UniSans;
    }

    input {
        font: inherit;
        padding: 0.5em;
        width: 17em;
        font: inherit;

    }

    .doctor-check {
        margin: auto;
        padding-top: 0.8em;
        display: flex;
        align-items: center;
        align-content: flex-start;
        /*border: 1px solid blue;*/
        width: 10em;
    }

    .doctor-check > input {
        width: 1em;
    }

    .register-span {
        margin-top: 1em;
        align-self: center;
    }

    .doctor {
        pointer-events: none;
        border: 1px solid black;
    }

    a {
        color: #E0013F;
        text-decoration: none;
    }

</style>


