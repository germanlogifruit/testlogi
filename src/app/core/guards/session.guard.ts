import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';


const CHECK_URL = 'http://localhost:3000/api/session/check';

export const sessionGuard: CanActivateFn = () => {
    
  const http = inject(HttpClient);
  const router = inject(Router);

  return http.get<boolean>(CHECK_URL, { withCredentials: true }).pipe(
    map((ok) => {
      // Si devuelve true, permite la navegación.
      if (ok) return true;
      // Si false, redirige a /publico
      return router.createUrlTree(['/publico']);
    }),
    // Si hay error en la llamada, deniega acceso y redirige.
    catchError(() => of(router.createUrlTree(['/publico'])))
  );
};
