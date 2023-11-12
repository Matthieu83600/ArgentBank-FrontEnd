import { GET_USERPROFILE, EDIT_USERNAME } from "./type.actions";

/* User data recovery action */
export const userProfile = (firstname, lastname, username) => {
    return {
        type: GET_USERPROFILE,
        payload: {firstname, lastname, username},
    }
}

/* Username update action */
export const updateUsername = (username) => {
    return {
        type: EDIT_USERNAME,
        payload: username,
    }
}