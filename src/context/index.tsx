import React ,{createContext, FC, useState} from 'react'
import { User } from '../Models/User'

export class UserContextType{
  user:User 
  save: (user : User) => Promise<unknown>
}

export const UserContext = createContext(new UserContextType)



const UserProvider : FC<React.ReactNode> = ({children}) => {

const [user, setUser] = useState<User>()

  const save = async (user : User) => 
    new Promise((resolve, reject) => {
      setTimeout(() => {
        setUser(user)
          resolve(user);
      }, 3000);
    });
 
  return (
    <UserContext.Provider value={{user, save}}>
                {children}
    </UserContext.Provider>
  );
}

export default UserProvider;