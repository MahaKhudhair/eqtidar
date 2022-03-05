import { TOKEN_KEY } from "../utils/Constants"

export function authHeader(){
    let user =JSON.parse(localStorage.getItem(TOKEN_KEY))
    if (user && user.token){
        return{Authorization:`Bearer ${user}`}
    } else {
        return{}
    }
}