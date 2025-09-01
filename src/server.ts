import express from "express" ;  
import type { Request } from "express";
import cors from "cors" 
import {expressMiddleware} from "@apollo/server/express4";
import { getGraphQlServer } from "./graphql/user/context/graphql.js";



async function init() {  

const app = express();    
const apolloServer = await getGraphQlServer() ;
app.use(express.json());
app.use(cors()) 


await apolloServer.start();


 app.use("/graphql",expressMiddleware(apolloServer, {
    context: async ({req}:{req:Request}) => ({

      /* 
      Todo we will do that later ....
       01 .extract the autorization header 
       02 .extract the token fron Bearer 
       03 .verify the token get payload 
       04 .return the payload info  
       05 .check the user is already here using context in the resolvers
      */
    }),
  }));




app.listen(8080,() => console.log(`Server started on port 8080`)); 


} 

init();