import { initialState } from "../store";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, GET_USERPROFILE, EDIT_USERNAME } from "../actions/type.actions";

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                status: "CONNECTED",
                isConnected: true,
                token: action.payload,
                error: null
            }
        case GET_USERPROFILE:
            return {
                ...state,
                status: "SUCCEEDED",
                user: {
                    ...state.user,
                    firstname: action.payload.firstname,
                    lastname: action.payload.lastname,
                    username: action.payload.username
                }
            }
        case EDIT_USERNAME: 
            return {
                ...state,
                status: "MODIFIED",
                user: {
                    ...state.user,
                    username: action.payload.username
                }
            }           
        case LOGIN_FAIL: {
            return {
                ...state,
                status: "FAILED",
                isConnected: false,
                error: action.payload
            }
        }  
        case LOGOUT: {
            return initialState;
        }  
        default:
            return state;
    }
}