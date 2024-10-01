import { createAction, props } from "@ngrx/store";

export const loginRequest = createAction(                           // Action to login request
    '[Auth] Login Request ',                                        // [] type and then the name
    props<{ credentials: { email: string; password: string} }>()    // Properties that will be sended     
);

export const loginSuccess = createAction(                           // Action if the login was success
    '[Auth] Login Success ',                                        // [] type and then the name
    props<{ loginSuccessResponse: {user: string; message: string} }>()            // Properties that will be sended     
);

export const loginFailure = createAction(                           // Action if login wasn't success
    '[Auth] Login Failure ',                                        // [] type and then the name
    props<{ error: string }>()                                      // Properties that will be sended     
);