import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'dashboard', component: DashboardComponent },
        { path: 'pages', loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule)}
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
