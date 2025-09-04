import mongoose from "mongoose" ; 

type Connection = {
    isConnected:number | null
}

 const connectionObj:Connection = {
        isConnected: null
       } ;
export async function dbConnect():Promise<void> { 
    try {
      
        
      if(connectionObj.isConnected == null) {  
        console.log(connectionObj)
        await mongoose.connect('mongodb://localhost:27017/graphQLDemo');  
        connectionObj.isConnected = mongoose.connections[0]?.readyState as number ; 
        console.log("db Connected")
      }else { 
        console.log(connectionObj)
  console.log("already connected to the data")
      }
        
    } catch (error) {
        console.log("dbConnection failed");
        
    }
    
}
