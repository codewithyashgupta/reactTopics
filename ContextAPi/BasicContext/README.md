Steps for Create Context:-
1. Create Folder name "Context".
2. create a file remind it gonna be .js file means pure js file not be jsx file and name whatEver context you wanna make like :-
UserContext , LoginContext , PasswordContext etc.
3. Follow these three steps:- 
    -import React from "react.
    -const UserContext = new createContext;.
    -export default UserContext.
4. Make a UserContext Provider this file gonna be .jsx file. and here a step for initialization code.
    -import React from "react
    -import UserContext from "./userContext
    -const UserContextProvider = ({childern}) => {
        const [user,setUser] = React.userState(null)
        return (
            <UserContext.Provider value = {{user , setUser}}>
                {childern}
            </UserContext.Provider>
        )
    }
    -export default UserContextProvider
