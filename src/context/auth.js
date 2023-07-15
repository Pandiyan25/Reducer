import { createContext, useContext, useReducer } from "react";

const initialState ={auth:false}

const authContext = createContext(initialState);

export function reducer(state, action){
    switch(action.type){
        case "login":
            return {auth:true};
        case "logout":
            return {auth:false};    
        default:
            throw new Error()    
    }
}

export const AuthProvider = ({ children }) => {
    const [auth, dispatch] = useReducer(reducer,initialState);


    return (
        <authContext.Provider value={[auth, dispatch]}>
            {children}
        </authContext.Provider>
    )
}

export default function AuthConsumer(){
    return useContext(authContext);
}

