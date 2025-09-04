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
    //  first  
    /*  
      we should check the headers -> Authorization -> Bearer Token
      extract token 
    
    
    */
      
    }),
  }));




app.listen(8080,() => console.log(`Server started on port 8080`)); 


} 

init();