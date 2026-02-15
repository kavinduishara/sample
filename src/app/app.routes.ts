import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Posts } from './pages/posts/posts';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { authGuard } from './guard/auth-guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'',
        component:Layout,
        canActivate:[authGuard],
        children:[
            {
                path:'home',
                component:Home
            },
            {
                path:'posts',
                component:Posts
            }
        ]
    },
    
];
