import type { User } from "../types/userType.js";
import jwt from "jsonwebtoken" ; 
import { UserModel } from "../model/UserMode.js";
import { user } from "../graphql/user/index.js";
import bcrypt from "bcrypt"
import { dbConnect } from "../config/dbContext.js";
export  class UserService {
  
    public static async createUser(user:User) {
        try { 
            await dbConnect() ;
            const gettingUser:User | null = await UserModel.findOne({email:user.email}) ; 
            if(gettingUser) {
                throw new Error(`${user.username} already exsists`); 
            }  
            const hashedPass = await bcrypt.hash(user.password , 10)
            await new UserModel({...user,password:hashedPass}).save();  
            return `${user.username } your account created !!!`
            
        } catch (error) {
            throw new Error(`Interval Server Error`); 
        }
    }
    

    

} 