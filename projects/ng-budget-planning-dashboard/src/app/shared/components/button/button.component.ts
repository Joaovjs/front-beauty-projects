import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'button[btn], a[btn]',
    template: `
        <ng-content></ng-content>
        <span class="more" *ngIf="btnMore !== false">
            <span class="material-icons">navigate_next</span>
        </span>
    `,
    styleUrls: ['button.component.scss'],
    host: {
		'[class.btn]': 'true',
        '[class.btn-more]': `btnMore !== false`,
        '[class.btn-primary]': `btnType === 'primary'`,
    },
    encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
    @Input() btnType: string;
    @Input() btnMore: boolean | string = false;
}