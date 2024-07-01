import { usePetdanimStore } from "~/store/petdanimStore.js";
export default defineNuxtRouteMiddleware(async (to, from) => {
    
    if(process.client == true){
        const petdanimStore = usePetdanimStore();
        const result = await petdanimStore.isAuthUser()
        if(result == false) {
            return navigateTo('/')
        }else {
            return true
        }
    }
  })