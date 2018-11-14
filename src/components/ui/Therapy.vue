<template>
    <div class="therapy">
        <Paper class="paper">
            <p>therapy</p>
            <form @submit.prevent="updateTherapy($event)">
                <textarea v-if='!isDoctor' :value="therapyText" disabled/>
                <textarea v-else :value="therapyText" name="textarea"/>
            <button v-if="isDoctor" type="submit">submit</button>
            </form>
        </Paper>
    </div>
</template>

<script>
    import Paper from './Paper'
    import {fire} from '../../services/fire'
    export default {
        name: "Therapy",
        components: {
            Paper
        },
        props: {
            therapyText: {
                type: String,
            },
            isDoctor: {
                type: Boolean,
            }
        },
        methods: {
            updateTherapy(event){
                this.$emit('submitted', {value: event.target.textarea.value})
            }
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: UniSans;
        src: url(../../../public/Uni-Sans-Heavy.otf);
    }

    .paper {
        display: flex;
        flex-direction: column;
        padding: 2em;
        padding-top: 1em;
        box-sizing: border-box;
        height: 100%;
    }

    p {
        text-align: center;
        text-transform: uppercase;
        font-family: UniSans;
        font-size: 1.4em;
        margin-top: 1em;
        color: #E0013F;
    }

    div {
        overflow: auto;
    }

    form {
        flex-grow: 3;
        display: flex;
        flex-direction: column;
    }

    textarea {
        display: inline-block;
        margin: 0 auto;
        border: none;
        outline: none;
        resize: none;
        flex-grow: 3;
        height: 100%;
        width: 100%;
    }

    textarea[disabled] {
        background-color: #fff;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        margin-top: 1em;
        padding-top: 1em;
        padding-bottom: 1em;
        width: 24em;
        color: #fff;
        text-transform: uppercase;
        background-color:  #E0013F;
        border: none;
        outline: none;
        border-radius: 6px;
        font-family: UniSans;
    }

</style>