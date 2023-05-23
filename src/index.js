import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServerPluginLandingPageDisabled } from "@apollo/server/plugin/disabled";
import {} from "dotenv/config";
import jwt from "jsonwebtoken";
import models from "./models/index.js";
import graphQLConfig from "./graphQL/index.js";
import db from "./mongoDB.js";

const getUser = (token) => {
  if (token) {
    console.log("token", token);
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      throw new Error("توکن معتبر نمی باشد");
    }
  }
};

const port = Number(process.env.PORT) || 3000;
const server = new ApolloServer(graphQLConfig);
const { url } = await startStandaloneServer(server, {
  listen: { port },
  context: ({ req, res }) => {
    console.log("oprName", req.body.operationName);
    const user = getUser(req.headers.authorization);
    console.log("userName", user);
    // if (res.getHeaders()) {
    //   console.log("2", user, res.getHeaders());
    //   res.setHeader("authorization", "user");
    // }
    return { user, models };
  },
});

try {
  db.connect(process.env.DB_HOST_DEV);
  console.log("Connect Successfully");
} catch (error) {
  console.log(error.message);
}

console.log(`🚀  Server ready at: ${url}`);
