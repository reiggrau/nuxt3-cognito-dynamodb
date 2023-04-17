<script lang="ts" setup>
definePageMeta({ auth: true }); // This checks if user is authenticated

useHead({
    title: "OPC Nuxt | User",
});

const { data, status, getCsrfToken, getProviders } = useAuth();

const providers = await getProviders();
const csrfToken = await getCsrfToken();
</script>

<template>
    <div class="max-w-5xl mx-auto mt-5 px-5">
        <div class="text-center mt-10">
            <h1 class="text-2xl font-bold">This is the user profile</h1>
            <h3>My protection works via a <span>middleware</span>.</h3>
        </div>
        <pre v-if="status"><span>Status:</span> {{ status }}</pre>
        <pre v-if="data"><span>Data:</span> {{ data }}</pre>
        <pre v-if="csrfToken"><span>CSRF Token:</span> {{ csrfToken }}</pre>
        <pre v-if="providers"><span>Providers:</span> {{ providers }}</pre>
    </div>
</template>

<style scoped>
span {
    @apply text-green-600 hover:text-green-500;
}
pre {
    @apply bg-gray-800 text-white p-3 my-3 rounded shadow overflow-x-auto;
}
pre span {
    @apply text-green-400;
}
</style>
