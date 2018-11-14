<template>
    <div>
        <p>Hello, A!</p>
        <Therapy :therapy-text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit'"
        isDoctor></Therapy>
        <p>Header je dole</p>
        <GlukoseInput/>

    </div>
</template>

<script>
    import Therapy from "../ui/Therapy";
    import Header from "../ui/Header";
    import GlukoseInput from "../ui/GlucoseInput";

    export default {
        components: {GlukoseInput, Header, Therapy}
    }
</script>

<style scoped>
    p {
        color: #fff;
        border: 1px solid black;
    }
</style>