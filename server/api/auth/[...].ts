import { NuxtAuthHandler } from "#auth";
import CognitoProvider from "next-auth/providers/cognito";

export default NuxtAuthHandler({
    secret: process.env.AUTH_SECRET,
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        CognitoProvider.default({
            clientId: process.env.COGNITO_CLIENT_ID,
            clientSecret: process.env.COGNITO_CLIENT_SECRET,
            issuer: process.env.COGNITO_ISSUER,
        }),
    ],
});
