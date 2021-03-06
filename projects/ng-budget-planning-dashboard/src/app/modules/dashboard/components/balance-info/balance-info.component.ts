import { Component } from "@angular/core";

@Component({
    selector: 'balance-info',
    template: `
        <div class="balance-info">
            <div class="value">
                <span>$</span>
                23,685.94
            </div>
            <div class="extra-info">
                <span>Deposit</span>
                $98,000
            </div>
        </div>
    `,
    styleUrls: ['balance-info.component.scss'],
})
export class BalanceInfoComponent {}