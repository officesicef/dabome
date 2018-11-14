<template>
    <form  @submit.prevent="addGlukoseLevel($event)">
            <input placeholder="Glucose level" type="number" min="0" name="level"/>
            <input type="date" name="date">
        <button>submit</button>
    </form>
</template>

<script>
    export default {
        name: "GlucoseInput",
        methods: {
            addGlukoseLevel(event){
                this.$emit('addedLevel', {level: parseInt(event.target.level.value), date: event.target.date.value})
            }
        }
    }
</script>

<style scoped>

    form {
        background-color: #fff;
        width: 100%;
        height: 6em;
        border-radius: 9px;
    }

    .glucoze-label {
        display: flex;
        justify-content: space-between;
    }
    input{
        border: none;
        padding: 1em;
        border-radius: 9px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        margin-top: 1em;
        margin-bottom: 1em;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
        width: 10em;
        color: #fff;
        text-transform: uppercase;
        background-color:  #E0013F;
        border: none;
        outline: none;
        border-radius: 6px;
        font-family: UniSans;
    }
</style>