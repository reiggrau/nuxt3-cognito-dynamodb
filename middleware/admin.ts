export default defineNuxtRouteMiddleware((to, from) => {
    console.log("Middleware!");

    const { data } = useAuth();
    console.log(data.value);

    if (data.value?.user?.email !== "guillem.reig@on-promise.cloud") {
        return navigateTo("/");
    }
});
