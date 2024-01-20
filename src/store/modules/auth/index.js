import { FIREBASE_API_KEY } from '../../../config/firebase'
import axios from 'axios'

const state =  {
        userId: null,
        token: null,
}
const mutations = {
        setUser(state, payload) { 
            state.userId = payload.userId;
            state.token = payload.token
        },
    }
const actions = {
        auth(context, payload) {
            let url = "";
            if(payload.mode === "signin"){
                url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`
            } else if (payload.mode === "signup") {
               url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`
            } else {
                return;
            }
            const authDO = {
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            }
            return axios
            .post(url, authDO)
            .then((response) => {
                //save data in localstorage
                const expiresIn = Number(response.data.expiresIn ) * 1000 
                const expDate = new Date().getTime() + expiresIn;
                localStorage.setItem("token", response.data.idToken);
                localStorage.setItem("userId", response.data.localId);
                localStorage.setItem("expiresIn", expDate);

                context.commit("setUser", {
                userId: response.data.localId,
                token: response.data.idToken
            } )
        }).catch((error) => {
            const errorMessage = new Error(error.response.data.error.message || "UNKOWN_ERROR")
            throw errorMessage

        })
        },
        signup(context, payload) {
            const signupDO = {
                ...payload,
                mode: "signup",
            };
            return context.dispatch("auth", signupDO)
     
        },
        signin(context, payload) {
            const signInDO = {
                ...payload,
                mode: "signin"
            }
            return context.dispatch("auth", signInDO)
        },
    }


const getters = {}

const authModule = {
    state,
    mutations,
    actions,
    getters
}

export default authModule;