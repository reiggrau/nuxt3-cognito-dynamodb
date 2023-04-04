# Source guides

-   [Nuxt 3](https://nuxt.com/docs/getting-started/installation)

-   [nuxt-auth](https://sidebase.io/nuxt-auth/getting-started/installation)

-   [Tailwind](https://tailwindcss.com/docs/guides/nuxtjs)

## Nuxt 3 setup

Nuxt is a free and open-source framework with an intuitive and extendable way to create type-safe, performant and production-grade full-stack web applications and websites with Vue.js.

-   [Nuxt 3](https://nuxt.com/docs/getting-started/installation) installation

### Installation

Open a terminal (if you're using Visual Studio Code, you can open an integrated terminal) and use the following command to create a new starter project:

Start a new Nuxt 3 project:

```bash
# npx
npx nuxi init <project-name>

# pnpm
pnpm dlx nuxi init <project-name>
```

Open your project folder in Visual Studio Code:

```bash
code <project-name>
```

Make sure to install the dependencies:

```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install
```

### Development Server

Start the development server on `http://localhost:3000`

```bash
# npm
npm run dev -- -o

# yarn
yarn dev -o

# pnpm
pnpm dev -o
```

<!-- ## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
# nuxt3-cognito-dynamodb -->

## nuxt-auth setup

nuxt-auth is a feature-packed, open-source authentication module for Nuxt 3 applications.

-   [nuxt-auth](https://sidebase.io/nuxt-auth/getting-started/installation)

### Installation

Open a terminal and use the following command:

```bash
# npm
npm i -D @sidebase/nuxt-auth

# yarn
yarn add --dev @sidebase/nuxt-auth

# pnpm
pnpm i -D @sidebase/nuxt-auth
```

nuxt-auth has next-auth as a peer-dependency. With all package managers except npm you must install the peer dependency alongside nuxt-auth:

```bash
# yarn
yarn add next-auth@4.21.1

# pnpm
pnpm i next-auth@4.21.1
```

### Quick Start

After installing the package, add the package to your nuxt.config.ts:

```sh
# file: ~/nuxt.config.ts
export default defineNuxtConfig({
   modules: ['@sidebase/nuxt-auth'],
})
```

Then create the authentication handler (NuxtAuthHandler) that will expose the API endpoints for handling all authentication-related requests and add at least one authentication provider:

```sh
# file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from "#auth";
import CognitoProvider from "next-auth/providers/cognito";

export default NuxtAuthHandler({
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        CognitoProvider.default({
            clientId: process.env.COGNITO_CLIENT_ID,
            clientSecret: process.env.COGNITO_CLIENT_SECRET,
            issuer: process.env.COGNITO_ISSUER,
        }),
    ],
});
```

NOTE: TypeScript might complain at this point ("cannot find name 'process'"). To fix it, run 'npm i --save-dev @types/node' on the console.

NOTE: TypeScript might be complaining about clientIt and clientSecret ("Type 'string | undefined' is not assignable to type 'string'."). To fix it, create a file named process.d.ts in the root folder of this project. Paste this code inside:

```sh
# file: ~/process.d.ts
declare namespace NodeJS {
    export interface ProcessEnv {
        COGNITO_CLIENT_ID: string;
        COGNITO_CLIENT_SECRET: string;
    }
}
```

This will tell TypeScript that our environment variables for COGNITO_CLIENT_ID and COGNITO_CLIENT_SECRET will never be undefined.

In the root folder, create a file named .env.local. Inside that file, you need to define the necessary variables:

```sh
COGNITO_CLIENT_ID = YOUR_CLIENT_ID
COGNITO_CLIENT_SECRET = YOUR_CLIENT_SECRET
COGNITO_ISSUER = https://cognito-idp.<REGION>.amazonaws.com/<USER_POOL_ID>
```

NOTE: If you don't have a cognito 'User Pool' and/or don't know how to get the Client ID, Client Secret and the Issuer, follow this tutorial to create one and get them: [Secure User Authentication with Next.js, NextAuth.js, and AWS Cognito](https://evoila.com/de/blog/2023/03/07/secure-user-authentication-with-next-js-nextauth-js-and-aws-cognito-2/)

Now you can now use all user-related functionality, for example:

```sh
# file: e.g ~/pages/login.vue
const { status, data, signIn, signOut } = useAuth()

status.value // Session status: `unauthenticated`, `loading`, `authenticated`
data.value // Session data, e.g., expiration, user.email, ...

await signIn() // Sign in the user
await signOut() // Sign out the user
```

Example component (with [Tailwind](https://tailwindcss.com/docs/guides/nuxtjs) installed):

<img src="public/nuxtAuth_01.gif">

```sh
# file: e.g ~/components/LoginButton.vue
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
```

NOTE: If you are trying to use tailwind syntax in the 'style' tag of your Vue component, you might encounter an annoying 'Unknown at rule @apply' warning (VS code). To fix it, open your VSCode Global 'settings.json' by pressing Cmd+Shift+P and then choosing "Preferences: Open User Settings (JSON)". Then add "scss.lint.unknownAtRules": "ignore" in the JSON object.
