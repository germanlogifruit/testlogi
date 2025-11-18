import { Routes, CanActivateChildFn } from '@angular/router';
import { Login } from './components/login/login';
import { Layout } from './core/components/layout/layout';
import { Home } from './components/home/home';
import { LoginView } from './views/login-view/login-view';
import { AngularMaterial } from './views/angular-material/angular-material';
import { sessionGuard } from './core/guards/session.guard';

export const routes: Routes = [
    // PRIVADA
    {
        path: 'privado',
        component: Layout,
        canActivate: [sessionGuard],
        canActivateChild: [sessionGuard],
        children: [
            {
                path: 'home', 
                component: Home
            }
        ]
    },
    //PÚBLICA
    {
        path: 'publico',
        component: LoginView,
    },
    {
        path: 'angularMaterial',
        component: AngularMaterial
    },
    // Wildcard 
    { path: '**', redirectTo: '/publico' }

];
