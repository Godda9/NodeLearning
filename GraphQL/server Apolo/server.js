const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');


const typeArrays = loadFilesSync('**/*', {
    extensions: ['graphql'],
});
const resolversArrays = loadFilesSync('**/*', {
    extensions: ['resolvers.js'],
});


async function startApolloServer() {
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs: typeArrays,
        resolvers: resolversArrays,
    });

    const server = new ApolloServer({
        schema: schema,
    });

    await server.start();
    server.applyMiddleware({ app, path: '/graphql' })

    app.listen(3000, () => {
        console.log(3000);
    })
}

startApolloServer();

