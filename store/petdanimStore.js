import api from '~/axios'
import { useCookies } from "vue3-cookies";
const cookies = process.client == true ? useCookies().cookies : null;


const state = () => ({
    authUser: null,
    globalLoading: false
})

const actions = {
    async isAuthUser() {
        
        let token = cookies.get("_uToken") || "";
        console.log(token)
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.get("/mag/users/currentuser" , config)
                if(result.status == 200){
                    this.authUser = result.data
                    return result.data
                }
            }catch(err) {
                if(err.response.status == 401){
                    cookies.remove("_uToken" , {path: "/"})
                }
                return false
            }

        }else{
            return false
        }
        
    },

    async doSendOtpCode(data) {
        try {
            const result = await api.post("/mag/users/send_code" , data)
            if(result.status == 200){
                return result.data
            }
        }catch(err) {
            if(err.response.status == 429) {
                return {
                    status: 429,
                    message: "تعداد درخواست شما بیش از حد مجاز است"
                }
            }else {
                return false
            }
        }
    },

    async doSignUpUser(data) {
        try {
            const result = await api.post("/mag/users/create_user" , data)
            if(result.status == 200){
                return result.data
            }
        }catch(err) {
            return false
        }
    },

    async doSignInUser(data) {
        try {
            const result = await api.post("/mag/users/login_user" , data)
            if(result.status == 200){
                return result.data
            }
        }catch(err) {
            return false
        }
    },

    async logoutUser() {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.post("/mag/users/signout" , {} , config)
                if(result.status == 200){
                    cookies.remove("_uToken" , { path: "/" })
                    this.authUser = null
                    return result.data
                }
            }catch(err) {
                cookies.remove("_uToken" , {path: "/"})
                this.authUser = null
            }
        }else{
            this.authUser = null
        }
    },
}

const getters = {}

export const usePetdanimStore = defineStore({
    id: "petdanim-store",
    state: state,
    actions: actions,
    getters: getters
})