import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import {} from "dotenv/config";
import models from "./models/index.js";
import graphQLConfig from "./graphQL/index.js";
import db from "./mongoDB.js";

const port = Number(process.env.PORT) || 3000;
console.log(graphQLConfig.resolvers);
const server = new ApolloServer(graphQLConfig);
const { url } = await startStandaloneServer(server, {
  listen: { port },
  context: async () => {
    return models;
  },
});

try {
  db.connect(process.env.DB_HOST_DEV);
  console.log("Connect Successfully");
} catch (error) {
  console.log(error.message);
}

console.log(`🚀  Server ready at: ${url}`);
