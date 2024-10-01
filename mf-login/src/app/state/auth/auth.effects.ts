import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) { }

    loginRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.loginRequest),
            exhaustMap((action) => this.authService.login(action.credentials.email, action.credentials.password).pipe(
                map(response => {
                    if (response.token) {
                        // Despacha la acción de éxito si hay un token en la respuesta
                        return AuthActions.loginSuccess({ loginSuccessResponse: response });
                    } else {
                        // Despacha la acción de fallo si no hay token en la respuesta
                        return AuthActions.loginFailure({ error: 'Login failed, no token received' });
                    }
                }),
                catchError((error) =>
                    // Dispatch the action loginFailure in case of error
                    of(AuthActions.loginFailure({error: error.message}))
                )
            )
            )
        ),
        { dispatch: false } // Cambia a true si necesitas que el efecto despache acciones
    );

    loginSuccess$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(AuthActions.loginSuccess),
            tap(({ loginSuccessResponse }) => {
              this.router.navigateByUrl('/');
              alert(
                'Login Successful! ' +
                  'Welcome, ' +
                  loginSuccessResponse.user
              );
            })
          ),
        { dispatch: false }
      );

      loginFailure$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(AuthActions.loginFailure),
            tap(({ error }) => {
              alert(
                'Login Failed: ' +
                  error
              );
            })
          ),
        { dispatch: false }
      );
}
