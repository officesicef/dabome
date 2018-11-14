<template>
    <form class="labeledInput-wrapper" @submit.prevent="emitSubmit($event)">
        <label class="labeledInput-label">{{inputLabel}}</label>
        <input class="labeledInput-input" :type="inputType" :value="inputValue" name="labeledInput"
               :disabled="isPatient"/>
        <div class="labeledInput-last-element">
            <img src="../../../exclamation-mark.svg" v-if="isAlert && isPatient"/>
            <button v-if="!isPatient"/>
        </div>
    </form>
</template>

<script>
    export default {
        props: ['inputLabel', 'inputType', 'inputValue', 'isPatient', 'isAlert'],
        model: {
            prop: 'inputValue',
            event:'input'
        },
        methods: {
          emitSubmit(event) {
            this.$emit('submitted', {value: event.target.labeledInput.value})
          }
        }
    };
</script>

<style>
    @font-face {
        font-family: UniSans;
        src: url(../../../public/Uni-Sans-Heavy.otf);
    }

    .labeledInput-wrapper {
        padding: 10px 20px;
        box-sizing: border-box;
        background-color: white;
        border-radius: 12px;
        border-top: 3px solid #4fa0ca;
        border-left: 1px solid #4fa0ca;
        border-bottom: 3px solid #e0013f;
        border-right: 1px solid #e0013f;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        justify-content: flex-end;
    }

    .labeledInput-label {
        margin-right: 10px;
        font-family: UniSans;
        text-transform: uppercase;
        font-weight: bolder;
        letter-spacing: 1px;
        color: #4fa0ca;
        font-size: 1em;

    }

    .labeledInput-input {
        border: none;
        height: 30px;
        border-radius: 10px;
        background-color: #e0013f;
        color: white;
        font-family: UniSans;
        letter-spacing: 1px;
        font-size: 1em;
        text-transform: uppercase;
        text-align: end;
        padding-right: 15px;
        margin-right: 10px;
        outline: none;
    }

    .labeledInput-last-element {
        height: 1.5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .labeledInput-last-element > img {
        height: 100%;
    }

    .labeledInput-last-element > button {
        outline: none;
        background: url("../../../Check Mark.svg");
        border: none;
        height: 1.5em;
        width: 1.5em;
        cursor: pointer;
    }

</style>
