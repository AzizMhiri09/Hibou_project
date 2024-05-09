import {jwtDecode} from 'jwt-decode'

export const decode_token = (token) =>{

    if(token){
try{
    const decoded_token= jwtDecode(token)
    const exp = new Date(decoded_token.exp*1000)
if(new Date() > exp){
    localStorage.removeItem('token')
    return ""
}else{
    return decoded_token
}
}catch(erreur){

}
    }else{
        return ""
    }
}