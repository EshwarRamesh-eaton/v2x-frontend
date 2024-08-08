import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { AuthService } from './demo/service/auth.service';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'core',
                canLoad: [AuthService],
                component: AppLayoutComponent,
                loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule),
            },
            { path: 'login', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { paramsInheritanceStrategy: 'always', scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', useHash: true },)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
