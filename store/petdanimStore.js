import api from '~/axios'
import { useCookies } from "vue3-cookies";
const cookies = process.client == true ? useCookies().cookies : null;


const state = () => ({
    authUser: null,
    globalLoading: false,
    postData: null
})

const actions = {
    async isAuthUser() {
        
        let token = cookies.get("_uToken") || "";
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

    // profile Section

    async getUserStatistics() {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.get("/mag/users/profile/statistics" , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    async userAddPost(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const formData = new FormData()
                formData.append("title" , data.title)
                formData.append("date"  , data.date)
                formData.append("descriptionContent" , data.descriptionContent)
                formData.append("indexPic" , data.indexPic)
                formData.append("tags" , data.tags)

                const result = await api.post("/mag/users/posts/add" , formData , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    async getUserPosts() {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.get("/mag/users/posts/get" , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    async deleteUserPost(postId) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.post("/mag/users/posts/remove" , {post_id: postId} , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    async deleteUserPosts(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.post("/mag/users/posts/g-remove" , {ids: data.ids} , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    async getUserPost(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.post("/mag/users/posts/get-detail" , data , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },
    
    async userEditPost(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const formData = new FormData()
                formData.append("id" , data.id)
                formData.append("title" , data.title)
                formData.append("date"  , data.date)
                formData.append("descriptionContent" , data.descriptionContent)
                if(data.indexPic != "" ) {
                    formData.append("indexPic" , data.indexPic)
                }
                formData.append("tags" , data.tags)

                const result = await api.post("/mag/users/posts/edit" , formData , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    async getUserFavorites() {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.get("/mag/users/favorites/get" , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    async getUserSaveds() {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.get("/mag/users/saveds/get" , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    async removeFavoritePost(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.post("/mag/users/favorites/delete" , data , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    async removeBookmarkPost(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.post("/mag/users/saveds/delete" , data , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    async getUserFollowings() {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.get("/mag/users/followings/get" , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    async getUserFollowers() {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.get("/mag/users/followers/get" , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    async removeUserFollowing(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.post("/mag/users/followings/remove" , data , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    async removeUserFollowers(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.post("/mag/users/followers/remove" , data , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    async editUserProfile(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            let formData = new FormData();
            if(data.profile_image != "") {
                formData.append("profile_image" , data.profile_image)
            }
            if(data.password != "") {
                formData.append("password" , data.password)
            }
            formData.append("name" , data.name)
            formData.append("username" , data.username)
            formData.append("biography" , data.biography)

            try {
                const result = await api.post("/mag/users/profile/edit" , formData , config)
                if(result.status == 200) {
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    async sendOtpVerifyEmailOrPhone(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };
        
            try {
                const result = await api.post("/mag/users/profile/send-otp" , data , config)
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
        }
    },

    async verifyUserEmailOrPhone(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.post("/mag/users/profile/verify" , data , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }
    },

    // home api
    async saveToBookmark(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.post("/mag/home/add-bookmark", data , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    async removeFromBookmark() {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.post("/mag/home/remove-bookmark", data , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    // send comment
    async submitComment(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.post("/mag/single/add-comment", data , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    async doLikePost(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.post("/mag/home/do-like", data , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    async doBookmarkPost(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.post("/mag/home/do-bookmark", data , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    async followUser(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                }
            };

            try {
                const result = await api.post("/mag/users/followings/add", data , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    },

    async add_to_visit_count(data) {
        try {
            const result = await api.post("/mag/home/add-visit", data)
            if(result.status == 200){
                return result.data
            }
        } catch(err) {
            return false
        }
    },

    async get_search_result(data) {
        let token = cookies.get("_uToken") || "";
        if(token != ""){
            let config = {
                headers: {
                    Authorization:`Bearer ${token}`
                },
                params: {
                    queryString: data.queryString
                }
            };

            try {
                const result = await api.get("/mag/home/search" , config)
                if(result.status == 200){
                    return result.data
                }
            }catch(err) {
                return false
            }
        }else {
            return false
        }
    }
}

const getters = {}

export const usePetdanimStore = defineStore('petdanim',{
    id: "petdanim-store",
    state: state,
    actions: actions,
    getters: getters
})