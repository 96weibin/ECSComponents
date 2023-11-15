import axios from "axios";
const instance = axios.create({
})

instance.interceptors.response.use(res =>{
    if(res.data && res.data.code == 0) {
        return res.data.data
    } else{
        alert(res.data.msg)
        return null;
    }
})

export default instance;