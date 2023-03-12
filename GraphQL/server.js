const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');



const app = express();


const typeArrays = loadFilesSync('**/*', {
    extensions: ['graphql'],
});
const resolversArrays = loadFilesSync('**/*', {
    extensions: ['resolvers.js'],
});

const schema = makeExecutableSchema({
    typeDefs: typeArrays,
    resolvers: resolversArrays,
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));


app.listen(3000, () => {
    console.log(3000);
})