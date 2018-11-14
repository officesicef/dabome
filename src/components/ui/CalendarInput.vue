<template>
    <form class="calendarInput-wrapper">
        <label class="calendarInput-label">{{inputLabel}}</label>
        <input class="calendarInput-input" isPatient :value="inputValue" name="calendarInput" :disabled="!isPatient"/>
        <div class="calendarInput-last-element">
          <button v-if="isPatient" />
        </div>
    </form>
</template>

<script>
export default {
  props: ['inputLabel', 'inputValue', 'isPatient']
};
</script>

<style>
@font-face {
  font-family: UniSans;
  src: url(../../../public/Uni-Sans-Heavy.otf);
}

.calendarInput-wrapper {
  padding: 10px 20px;
  margin: 10px;
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
}

.calendarInput-label {
  margin-right: 10px;
  font-family: UniSans;
  text-transform: uppercase;
  font-weight: bolder;
  letter-spacing: 1px;
  color: #4fa0ca;
  font-size: 1.4em;
}

.calendarInput-input {
  border: none;
  height: 30px;
  border-radius: 10px;
  background-color: #e0013f;
  color: white;
  font-family: UniSans;
  letter-spacing: 1px;
  font-size: 1.4em;
  text-transform: uppercase;
  text-align: end;
  padding-right: 15px;
  margin-right: 10px;
  outline: none;
}

.calendarInput-last-element {
  height: 2.1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.calendarInput-last-element > img {
  height: 100%;
}

.calendarInput-last-element > button {
  outline: none;
  background: url("../../../Check Mark.svg");
  border: none;
  height: 2.1em;
  width: 2.1em;
  cursor: pointer;
}

</style>
