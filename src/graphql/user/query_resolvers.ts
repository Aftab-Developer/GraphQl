

export const queryResolver = {
   Query: {
              sayHello:function(_:any,{name}:{name:string}):string {
                  return `Hello ${name || "World"}` ;
              }  ,
              user:async () => {
                  
              }
          } , 
} 
