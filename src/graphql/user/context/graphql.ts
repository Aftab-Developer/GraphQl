import { ApolloServer } from "@apollo/server";
import { user } from "../index.js";

export async function getGraphQlServer() {
    return new ApolloServer({
        typeDefs:`  
        ${user.typeDefs}
         ${user.query} 
         ${user.mutation}
      
        
        ` ,
        resolvers:{ 
            Query : {
    ...user.resolvers.Query,
    
            } , 
    
            Mutation: {
                ...user.resolvers.Mutation
            }
            
          
    
        }
    }) 
    
}