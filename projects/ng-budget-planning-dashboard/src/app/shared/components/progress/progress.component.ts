import { Component, Input } from "@angular/core";

@Component({
    selector: 'progress-bar',
    template: `
        <div class="progress-bar">
            <div class="progress" [ngClass]="type" style="width: 80%"></div>
        </div>
    `,
    styleUrls: ['progress.component.scss']
})
export class ProgressComponent {
    @Input() type: 'success' | 'warning'
}