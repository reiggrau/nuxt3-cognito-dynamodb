<!-- <script lang="ts" setup> -->
<script lang="ts">
definePageMeta({ auth: true, middleware: "admin" });

useHead({
    title: "OPC Nuxt | Admin",
});

export default {
    setup(props) {
        let count = ref(1); // Allows page update on variable change
        let obj = reactive({ number: count }); // Keeps a variable updated, and number linked to count
        let form = reactive({
            number: obj.number,
            obj: obj,
        }); // form.number gets defined at start, but not linked to obj.number
        return { form, count, obj };
    },
};
</script>

<template>
    <div class="text-center mt-10">
        <h1 class="text-2xl font-bold">This is the admin page</h1>
        <h3>Only 'admin' users are allowed to see the contents of this page.</h3>
        <h3>This page is protected by <span>~/middleware/admin.ts</span>.</h3>
        <!-- <button class="login-button" @click="consoleLog()">
            <span>Read Table</span>
        </button> -->
        <div class="buttonDiv">
            <button @click="count++">{{ count }}</button>
            <button @click="obj.number++">{{ obj }}</button>
            <button @click="form.number++">{{ form }}</button>
        </div>
    </div>
</template>

<style scoped>
span {
    @apply text-green-600 hover:text-green-500;
}
.buttonDiv {
    @apply flex flex-col items-center gap-2;
}

button {
    @apply bg-gray-300 rounded p-1 border-solid border-2 border-black;
}
</style>
