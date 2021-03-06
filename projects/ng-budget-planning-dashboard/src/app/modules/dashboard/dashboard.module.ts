import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BalanceInfoComponent } from './components/balance-info/balance-info.component';
import { BudgetBalanceCardComponent } from './components/budget-card-balance/budget-card-balance.component';
import { BudgetInfoComponent } from './components/budget-info/budget-info.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExpensesBoxComponent } from './components/exepenses-box/expenses-box.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
    declarations: [
        DashboardComponent,
        BalanceInfoComponent,
        BudgetBalanceCardComponent,
        BudgetInfoComponent,
        UserInfoComponent,
        ExpensesBoxComponent,
    ],
    imports: [CommonModule, DashboardRoutingModule, FormsModule, SharedModule, CarouselModule],
})
export class DashboardModule {}
