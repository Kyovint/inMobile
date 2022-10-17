import { writable } from "svelte/store";

const authStore = () =>{

    const loggedUser = {
        name: undefined,
        email: undefined,
        IsLoggedIn: undefined,
        lastSingIn: undefined,
    }

    const {subscribe, set, update} = writable(loggedUser)

    const methods = {
        resetUser(){
            update(loggedUser =>{
                loggedUser.name= undefined
                loggedUser.email= undefined
                loggedUser.IsLoggedIn= undefined
                loggedUser.lastSingIn= undefined
                return loggedUser
            })
        },

        saveUser(data){
            update(loggedUser =>{
                loggedUser.name = data.displayName
                loggedUser.email = data.email
                loggedUser.IsLoggedIn = true
                loggedUser.lastSingIn = data.lastSignInTime

                return loggedUser
            })
        }

    }

    return{
        subscribe,
        set,
        update,
        ...methods
    }

}

export default authStore();