import { Component, Input } from "@angular/core";

@Component({
    selector: 'budget-balance-card',
    template: `
        <div class="budget-card-balance" [ngClass]="{'card-dark': type === 'dark', 'card-pink': type === 'pink' }">
            <div class="card">
                <span class="numbers">**** 1234</span>
                <span class="name">Payoneer</span>
            </div>
            <div class="balance">
                <span class="small">BALANCE</span>
                <span class="price">
                    <strong>11,939.07</strong> USD
                </span>
            </div>
            <div class="comparative">
                <div class="value">
                    <span class="small"> Received </span>
                    <span class="price"> +480$ </span>
                    <progress-bar type="success"></progress-bar>
                </div>
                <div class="value">
                    <span class="small"> Spent </span>
                    <span class="price"> -180$ </span>
                    <progress-bar type="warning"></progress-bar>
                </div>
            </div>
            <button class="see-more">
                <span class="material-icons">expand_more</span>
            </button>
        </div>
    `,
    styleUrls: ['budget-card-balance.component.scss']
})
export class BudgetBalanceCardComponent {
    @Input() type: 'gray' | 'dark' | 'pink';
}