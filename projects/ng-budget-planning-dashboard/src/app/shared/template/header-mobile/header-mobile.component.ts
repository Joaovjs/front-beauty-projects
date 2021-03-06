import { Component } from "@angular/core";

@Component({
    selector: 'header-mobile-component',
    templateUrl: 'header-mobile.component.html',
    styleUrls: ['header-mobile.component.scss'],
})
export class HeaderMobileComponent {
    openMenuMobile: boolean;
}