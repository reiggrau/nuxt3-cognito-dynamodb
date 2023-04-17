<script lang="ts" setup>
definePageMeta({ auth: false });
</script>

<template>
    <div class="text-center mt-10">
        <h1 class="text-2xl font-bold">This is the Home Page</h1>
        <h3>It is available to everyone.</h3>
        <img src="~/assets/Nuxt_logo.png" />
    </div>
</template>

<style scoped>
img {
    @apply m-auto pt-44 w-[50%];
}
</style>
