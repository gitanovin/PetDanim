import { usePetdanimStore } from "~/store/petdanimStore";
export default defineNuxtRouteMiddleware(async (to, from) => {
    
    if(process.client == true){
        const petdanimStore = usePetdanimStore();
        const result = await petdanimStore.isAuthUser()
        console.log(result)
        if(result == false) {
            return true
        }else {   
            return navigateTo('/')
        }
    }
  })