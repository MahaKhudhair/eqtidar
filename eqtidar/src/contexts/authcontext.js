import { createContext, useEffect, useReducer } from "react";
import { Navigate } from "react-router";
import axios from '../utils/axios'
import {TOKEN_KEY} from '../utils/Constants'
let initState = {
    isAuth:false,
    user:null,
    login:()=>{},
    signup:()=>{},
    logout: ()=>{}
}
let AuthContext = createContext(initState)

const reducer = (oldState,action)=>{
    switch(action.type)
    {
        case 'LOGIN':
            return {
                ...oldState,
                isAuth:true
            }
        case 'LOGOUT':
            return {
                ...oldState,
                isAuth:false
            }
        
    }
}


export const AuthProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer,initState)

        const logout = ()=>{
            localStorage.removeItem(TOKEN_KEY);
            console.log('logout event')
            dispatch({
                type:'LOGOUT'
            })
        }
        const login = (email, password)=>{
                axios.post('/api/signin',JSON.stringify(
                    {
                        email:email,
                        password:password
                    })
                    )
                    .then((response)=>{
                        console.log(response)
                        let token = response.data.token.access_token;
                        let data = response.data;
                        localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
                        dispatch({
                            type:'LOGIN'
                        })
                        .catch((err)=>{
                            
                        })
                        
                    })
    }
    const signup = (full_name , email,phone_number, password1 , password2)=>{

        axios.post('/api/signup',
        {
            full_name:full_name,
            phone_number:phone_number,
            email:email,
            password1:password1,
            password2:password2
        }
        )
        .then((response)=>{
            console.log(response)
            let token = response.data.token.access_token;
            let data = response.data;
            localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
            dispatch({
                type:'LOGIN'
            })
        })
        .catch((err)=>{
            console.log(err)
            
        })
    }
        useEffect(()=>{
            let data = JSON.parse(localStorage.getItem(TOKEN_KEY))
            console.log('use effect , data is : ',data)
            if(data)
            {
                dispatch({
                    type:'LOGIN'
                })
            }
        },[])
        return <AuthContext.Provider
        value={{
            ...state,
            login,
            signup,
            logout
        }}
        >
            {children}
        </AuthContext.Provider>
}
export default AuthContext;