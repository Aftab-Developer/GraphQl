import { UserService } from "../../services/UserSerice.js";
import type { User } from "../../types/userType.js";


export const mutation_resolver = {
    Mutation: {
             createUser:async  (_:any ,user:User):Promise<string> =>
             {
             return await UserService.createUser(user) ; 
            
             }  

            }
}