# Source guides

-   [Nuxt 3](https://nuxt.com/docs/getting-started/installation) installation

-   [nuxt-auth](https://sidebase.io/nuxt-auth/getting-started/installation) authentification module

## Nuxt 3 setup

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
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

### Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
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

## nuxt-auth

nuxt-auth is a feature-packed, open-source authentication module for Nuxt 3 applications.

### Installation

Open a terminal and use the following command:

```bash
npm i -D @sidebase/nuxt-auth
```
