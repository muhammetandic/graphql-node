import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import typeDefs from "./src/graphql/typeDefs.js";
import resolvers from "./src/graphql/resolvers.js";

const app = express();

const server = new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers,
  formatError: (error) => {
    return error;
  },
  context: ({ req, res }) => {
    return { req, res };
  },
});

mongoose
  .connect("mongodb://localhost/Test", { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

const port = process.env.PORT || 8080;
await server.start();
server.applyMiddleware({ app, path: "/graphql" });

app.get("/", (req, res) => {
  res.send("Node is running...");
});

app.listen(port, () => console.log(`Node server is started: ${port}`));
