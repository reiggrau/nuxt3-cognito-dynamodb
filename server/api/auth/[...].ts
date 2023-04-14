import { NuxtAuthHandler } from "#auth";
import CognitoProvider from "next-auth/providers/cognito";

// // export default NuxtAuthHandler({
// //     secret: process.env.AUTH_SECRET,
// //     providers: [
// //         // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
// //         CognitoProvider.default({
// //             clientId: process.env.COGNITO_CLIENT_ID,
// //             clientSecret: process.env.COGNITO_CLIENT_SECRET,
// //             issuer: process.env.COGNITO_ISSUER,
// //         }),
// //     ],
// // });

// ///////

import { DynamoDB, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { DynamoDBAdapter } from "@next-auth/dynamodb-adapter";

const config: DynamoDBClientConfig = {
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
    },
    region: process.env.NEXT_AUTH_AWS_REGION,
};

const client = DynamoDBDocument.from(new DynamoDB(config), {
    marshallOptions: {
        convertEmptyValues: true,
        removeUndefinedValues: true,
        convertClassInstanceToMap: true,
    },
});

// export default NextAuth({
export default NuxtAuthHandler({
    // Configure one or more authentication providers
    secret: process.env.AUTH_SECRET,
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        CognitoProvider.default({
            clientId: process.env.COGNITO_CLIENT_ID,
            clientSecret: process.env.COGNITO_CLIENT_SECRET,
            issuer: process.env.COGNITO_ISSUER,
        }),
    ],
    adapter: DynamoDBAdapter(client, {
        tableName: "opc-test-table",
        partitionKey: "pk",
        sortKey: "sk",
        indexName: "GSI1",
        indexPartitionKey: "GSI1PK",
        indexSortKey: "GSI1SK",
    }),
});
