<script lang="ts" setup>
const { data, status } = useAuth();
</script>

<template>
    <nav class="nav">
        <div class="nav-div">
            <a href="/" class="flex items-center">
                <span class="nav-logo">On Promise Cloud</span>
            </a>
            <div class="w-full md:w-auto" id="navbar-default">
                <ul class="nav-ul">
                    <li>
                        <nuxt-link href="/" class="nav-link"> Home </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link href="/protected/user" class="nav-link"> User Page </nuxt-link>
                    </li>
                    <li v-if="status === 'authenticated' && data?.user?.email === 'guillem.reig@on-promise.cloud'">
                        <nuxt-link href="/protected/admin" class="nav-link"> Admin Page </nuxt-link>
                    </li>
                    <li class="hidden md:block border-l-2 border-gray-700" />
                    <LoginButton />
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="css" scoped>
.nav {
    @apply border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900;
}

.nav-div {
    @apply container flex flex-wrap justify-between items-center mx-auto;
}

.nav-logo {
    @apply self-center text-xl font-semibold whitespace-nowrap text-white;
}

.nav-ul {
    @apply flex flex-col md:p-4 mt-4 py-2 rounded-lg border md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700;
}
.nav-link {
    @apply block py-2 pr-4 pl-3 mx-2 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent;
}
</style>
