const arrOfUsers:  {
      username : string
      email : string
      gender: string

    }[] = []  ;

export const mutation_resolver = {
    Mutation: {
                createUser:function(_:any,{username,email,gender}: {
          username : string
          email : string
          gender: string
    
        }) {
        arrOfUsers.push({username,email,gender}) ; 
        return arrOfUsers ;
        }
            }
}