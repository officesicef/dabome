<template>
    <div class="header">
        <div class="left-alignment">
            <router-link v-if="isDoctor" to="patient-list">
                <img src="../../assets/back-icon.svg" alt="back button">
            </router-link>
            <img class="title-and-logo" src="../../assets/diabet-track-logo.png" alt="title and logo">
        </div>
        <div class="right-alignment">
            <span>{{name}}</span>
            <button @click="logout()">Log out</button>
        </div>
    </div>
</template>

<script>
    import {logoutUser} from '../../services/auth.service'
    import router from '../../routes/routes'

    export default {
        props: ['name', 'isDoctor'],
        methods: {
            async logout() {
                await logoutUser()
                router.push('login')
            }
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: UniSans;
        src: url(../../../public/Uni-Sans-Heavy.otf);
    }

    a {
        padding: 0;
        padding-left: 0.2em;
        /*border: 1px solid black;*/
        width: 0.8em;
    }

    .title-and-logo {
        width: 30vw;
        height: 5vw;
        padding-left: 0.1vw;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        width: 100%;
    }

    .right-alignment, .left-alignment {
        display: flex;
        padding-right: 1em;
        flex-direction: row;
        align-items: center;
        font-family: UniSans;
        font-size: 1em;
    }

    span {
        padding-right: 1em;
    }

    button {
        padding: 10px 20px;
        background-color: white;
        border-radius: 12px;
        border-top: 3px solid #4fa0ca;
        border-left: 1px solid #4fa0ca;
        border-bottom: 3px solid #e0013f;
        border-right: 1px solid #e0013f;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: fit-content;
        text-transform: uppercase;
        color: #E0013F;
        font-family: UniSans;
        font-size: 1em;
        outline: none;
    }


</style>