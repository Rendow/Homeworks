import axios from "axios";




type CommonType = {
        errorText:string
}

export const RequestAPI = {
Post(status:boolean){
    return axios.post<CommonType>(`https://neko-cafe-back.herokuapp.com/auth/test`,  {success: status})
        .then(res => res.data)
},
}