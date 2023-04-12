<script setup lang="ts">
useHead({
    title: "nuxt3-cognito-dynamodb",
});
</script>

<template>
    <div class="body">
        <Navbar />
        <div class="main">
            <!-- <AuthenticationStatus /> -->
        </div>
        <NuxtPage />
    </div>
</template>

<style>
.body {
    @apply min-h-screen h-full relative bg-gray-100 pb-20;
}

.main {
    @apply fixed bottom-0 w-full;
}
</style>
