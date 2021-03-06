import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    templateUrl: 'dashboard.component.html',
})
export class DashboardComponent {
    cardsList = ['pink', 'gray', 'dark'];

    carouselOptions: OwlOptions = {
        loop: false,
        mouseDrag: false,
        touchDrag: true,
        pullDrag: false,
        dots: true,
        nav: false,
        navSpeed: 700,
        items: 1,
    };
}
