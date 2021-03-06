import { Component } from "@angular/core";

@Component({
    selector: 'expenses-box',
    template: `
        <div class="expenses-box">
            <div class="expenses-box-header">
                <span>Monthly Expenses</span>
            </div>
            <div class="expenses-box-chart">
                <li class="item" *ngFor="let item of expensesList">
                    <span class="spend">$ {{ item.value }}</span>
                    <div class="progress">
                        <div class="progress-bar" [ngStyle]="{'height': item.height}">
                            <div class="bar one" [ngStyle]="{'height': item.percent[0] }"></div>
                            <div class="bar two" [ngStyle]="{'height': item.percent[1] }"></div>
                            <div class="bar three" [ngStyle]="{'height': item.percent[2] }"></div>
                        </div>
                    </div>
                    <span class="month">{{ item.month }}</span>
                </li>
            </div>
        </div>
    `,
    styleUrls: ['expenses-box.component.scss'],
})
export class ExpensesBoxComponent {
    biggestValue = 2920;
    expensesList = [
        {
            month: 'jul',
            value: 2900,
            height: `${(2900 * 100) / this.biggestValue}%`,
            percent: ['30%', '0%', '70%'],
        },
        {
            month: 'aug',
            value: 2920,
            height: `${(2920 * 100) / this.biggestValue}%`,
            percent: ['30%', '35%', '35%'],
        },
        {
            month: 'sep',
            value: 2750,
            height: `${(2750 * 100) / this.biggestValue}%`,
            percent: ['0%', '35%', '75%'],
        },
        {
            month: 'oct',
            value: 2802,
            height: `${(2802 * 100) / this.biggestValue}%`,
            percent: ['25%', '75%', '0%'],
        },
        {
            month: 'nov',
            value: 2561,
            height: `${(2561 * 100) / this.biggestValue}%`,
            percent: ['30%', '30%', '40%'],
        },
        {
            month: 'dec',
            value: 2703,
            height: `${(2703 * 100) / this.biggestValue}%`,
            percent: ['70%', '0%', '30%'],
        },
    ];
}