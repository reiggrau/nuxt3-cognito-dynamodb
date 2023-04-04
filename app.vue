<script setup lang="ts">
useHead({
    title: "nuxt3-cognito-dynamodb",
});
</script>

<template>
    <!-- <div class="min-h-screen h-full relative bg-gray-100 pb-20"> -->
    <div class="body">
        <Navbar />
        <!-- <div class="fixed bottom-0 w-full"> -->
        <div class="main">
            <!-- <AuthenticationStatus /> -->
        </div>
        <!-- <Welcome /> -->
        <!-- <NuxtPage /> -->
    </div>
</template>

<style>
body {
    margin: 0;
}

.body {
    box-sizing: border-box;
    min-height: 100vh;
    height: 100%;
    position: relative;
    background-color: #f3f4f6;
    padding-bottom: 5rem;
}

.main {
    position: fixed;
    bottom: 0;
    width: 100vw;
}
</style>
