import {CHANGE_LANGUAGE} from "./action-types"

export const changeLenguage = (language)=>{
    return({
        type: CHANGE_LANGUAGE,
        payload: language
    })
}