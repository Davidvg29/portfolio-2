import {CHANGE_LANGUAGE, ALERT_MESSAGE} from "./action-types"

export const changeLanguage = (language)=>{
    return({
        type: CHANGE_LANGUAGE,
        payload: language
    })
}
export const alertMessage = (active, status, message)=>{
    return {
        type: ALERT_MESSAGE,
        payload: {active: active, status:status, message: message}
    }
}