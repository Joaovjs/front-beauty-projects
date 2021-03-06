import { Component } from "@angular/core";

@Component({
    selector: 'budget-info',
    template: `
        <div class="budget-info">
            <button class="budget-info-options">
                <span class="material-icons">settings</span>
            </button>
            <div class="budget-info-chart">
                <progress-radius [size]="130" [width]="12" [progress]="70"></progress-radius>
            </div>
            <div class="budget-info-chart-min">
                <progress-radius [size]="106" [width]="12" [progress]="60" type="warning"></progress-radius>
            </div>
            <div class="budget-info-value">
                <span>Budget</span> 60%
            </div>
        </div>
    `,
    styleUrls: ['budget-info.component.scss'],
})
export class BudgetInfoComponent {
}