import mongoose, {Schema,model} from "mongoose" 
import type { User } from "../types/userType.js"

const userSchema = new Schema<User>({
   username:{
    type:String ,
    required:true
   } ,
    email:{
    type:String ,
    required:true
   } ,
    password:{
    type:String ,
    required:true
   }
}) ; 


export const UserModel = model<User>("UserModel",userSchema) ;