import { query } from "./query.js";
import { typeDefs } from "./typeDef.js";
import { queryResolver } from "./query_resolvers.js";
import { mutation_resolver } from "./mutation_resolvers.js";
import { mutation } from "./mutation.js";

export const user = {
    typeDefs ,
    query , 
    mutation ,
    resolvers: {
       ... queryResolver ,
        ...mutation_resolver
    }   

}

