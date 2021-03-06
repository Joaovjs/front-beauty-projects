import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayout } from './layouts/common-layout/common-layout.component';

const routes: Routes = [
    {
        path: '',
        component: CommonLayout,
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
