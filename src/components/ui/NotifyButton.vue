<template>
    <button v-if="alerted" class="notifyButton notify-button-alerted" @click="handleClick($event)">Notify doctor</button>
    <button v-else class="notifyButton notify-button-not-alerted" @click="handleClick($event)">Notify doctor</button>
</template>

<script>
export default {
  props: ["alerted"],
  methods: {
    handleClick() {
      this.$emit("click");
      alert("Doctor alerted.");
    }
  }
};
</script>

<style>
@font-face {
  font-family: UniSans;
  src: url(../../../public/Uni-Sans-Heavy.otf);
}

.notifyButton {
  padding: 25px;
  border-radius: 20px;
  outline: none;
  border: none;
  font-family: UniSans;
  font-size: 1.4em;
  letter-spacing: 0.1em;
  cursor: pointer;
}
.notify-button-alerted {
  background-color: #e0013f;
  color: white;
}
.notify-button-not-alerted {
  background-color: white;
  color: #e0013f;
  border-top: 3px solid #4fa0ca;
  border-left: 1px solid #4fa0ca;
  border-bottom: 3px solid #e0013f;
  border-right: 1px solid #e0013f;
}
</style>
