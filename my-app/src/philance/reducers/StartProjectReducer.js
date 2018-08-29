import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    PASSWORD_EMPTY,
    EMAIL_EMPTY,
    FIELDS_EMPTY
} from '../actions/types'

const INITIAL_STATE = {
    email: '',
    password: '',
    token: null,
    isLoggedIn: false,
    error: 'LET\'s GO'
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMAIL_CHANGED: 
            return {...state, email: action.payload}
        case PASSWORD_CHANGED:
            return{...state, password: action.payload}
        case LOGIN_USER:
            return{...state, error: 'LET\'s GO'}
        case LOGIN_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.payload, error: 'LET\'s GO', isLoggedIn: true}
        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication Failed.'}
        case  FIELDS_EMPTY:
            return {...state, error: 'Both fields must filled.'}
        case PASSWORD_EMPTY:
            return {...state, error: 'Password Field can\'t be empty.'}
        case EMAIL_EMPTY:
            return {...state, error: 'Email Field can\'t be empty.'}  
        default:
        return state
    }
}