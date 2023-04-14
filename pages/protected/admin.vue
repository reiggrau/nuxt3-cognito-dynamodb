<!-- <script lang="ts" setup> -->
<script lang="ts">
// definePageMeta({ auth: true });

export default {
    setup(props) {
        let count = ref(1);
        let obj = reactive({ count });
        let form = reactive({
            count: obj.count,
            obj: obj,
        });
        return { form, count, obj };
    },
};
</script>

<template>
    <div class="text-center mt-10">
        <h1 class="text-2xl font-bold">Unauthorised user detected!</h1>
        <h3>Only 'admin' users are allowed to see the contents of this page.</h3>
        <!-- <button class="login-button" @click="consoleLog()">
            <span>Read Table</span>
        </button> -->
        <div class="buttonDiv">
            <button @click="count++">{{ count }}</button>
            <button @click="obj.count++">{{ obj }}</button>
            <button @click="form.count++">{{ form }}</button>
        </div>
    </div>
</template>

<style scoped>
.buttonDiv {
    @apply flex flex-col items-center gap-2;
}

button {
    @apply bg-gray-300 rounded p-1 border-solid border-2 border-black;
}
</style>
