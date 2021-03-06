import { Component } from "@angular/core";

@Component({
    selector: 'user-info',
    template: `
        <div class="user-info">
            <div class="avatar">
                <img src="/assets/images/user2.jpg" alt="Jake Cornwall">
            </div>
            <div class="info">
                <span class="title">Jake<br>Cornwall</span>
                <span class="desc">instant money trasnfers to you relatives & friends.</span>
            </div>
            <span class="friends">
                <img src="/assets/images/user1.jpg" alt="Friend of Jake">
                <img src="/assets/images/user1.jpg" alt="Friend of Jake">
                <img src="/assets/images/user1.jpg" alt="Friend of Jake">
                <span class="more">+24</span>
            </span>
        </div>
    `,
    styleUrls: ['user-info.component.scss'],
})
export class UserInfoComponent {}