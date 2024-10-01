import { Action, createReducer, on } from "@ngrx/store"
import { loginFailure, loginSuccess } from "./auth.actions"

export interface State {                //First, we create the State form
    email: string,
    password: string,
    loginError?: string
}

export const initialState: State = {    //Then, we initialize it with values    
    email: '',                          // that we want to be shown                
    password: ''                        // in the initial case
}

const _authReducer = createReducer(     //Now, let's create the reducer
    initialState,                       //First, the initial state

    //If is a login Success
    on(loginSuccess, (state, { loginSuccessResponse }) => { //Then, the function on, with the acction to do, the state
        return {                                            //And the response we'll use to update it            
            ...state,                                       //It returns, a new state    
            user: loginSuccessResponse.user,                //Updates the user
            message: loginSuccessResponse.message           //And the message
        };
    }),

    //If is a login Failure
    on(loginFailure, (state, { error }) => {                //Then, the function on, with the acction to do, the state
        return {                                            //And the response we'll use to update it            
            ...state,                                       //It returns, a new state
            loginError: error,                              //Updates the error    
            user: '',                                       //The user
            message: ''                                     //And the message
        };
    })                              
);

export function authReducer(state: State | undefined, action: Action<string>) {
    return _authReducer(state,action);
}