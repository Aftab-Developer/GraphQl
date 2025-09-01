

export const queryResolver = {
   Query: {
              sayHello:function(_:any,{name}:{name:string}):string {
                  return `Hello ${name || "World"}` ;
              }  ,
              user:() => {
                  return {
                      username:"Aftab" ,
                      email:"aftab785ahmed@gmail.com" ,
                      gender:"male"
                  }
              }
          } , 
} 
