<script setup lang="ts">
const { status, data, signIn, signOut } = useAuth();
</script>

<template>
    <div class="login-div">
        <button v-if="status === 'authenticated'" class="login-button" @click="signOut({ callbackUrl: '/' })">
            <span>Logout</span>
        </button>
        <button v-else class="login-button" @click="signIn()">
            <span>Login</span>
        </button>
        <li v-if="status === 'authenticated' && data?.user?.email" class="user-info">
            <h1>{{ data?.user?.email }}</h1>
        </li>
    </div>
</template>

<style lang="css" scoped>
.login-div {
    @apply flex justify-between items-center;
}
.user-info {
    @apply block py-2 pr-4 pl-3 mx-2 rounded md:border-0 md:p-0 text-white md:hover:text-white hover:bg-gray-700 md:hover:bg-transparent;
}
.login-button {
    @apply block py-2 pr-4 pl-3 mx-2 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent;
}
</style>
