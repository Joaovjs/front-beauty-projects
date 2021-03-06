import { Component, Input } from "@angular/core";

@Component({
    selector: 'progress-radius',
    template: `
        <svg>
            <defs>
                <linearGradient [attr.id]="gradient_id" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" [attr.stop-color]="colorOne" />
                    <stop offset="100%" [attr.stop-color]="colorTwo" />
                </linearGradient>
            </defs>
            <circle 
                class="line"
                [attr.cx]="size" 
                [attr.cy]="size" 
                [attr.r]="size" 
                stroke-width="2"
            ></circle>
            <circle 
                class="chart" 
                [attr.cx]="size" 
                [attr.cy]="size" 
                [attr.r]="size" 
                [attr.stroke-dasharray]="dashArray" 
                [attr.stroke-dashoffset]="dashOffset" 
                [attr.stroke-width]="width"
                [attr.stroke]="'url(#'+gradient_id+')'"
            ></circle>
        </svg>
    `,
    styleUrls: ['progress-radius.component.scss']
})
export class ProgressRadiusComponent {
    gradient_id = `gradient-${this.constructor['ɵcmp'].id}-${window.crypto.getRandomValues(new Uint32Array(1))}`;

    @Input() size = 120;
    @Input() width = 10;
    @Input() type: 'success' | 'warning' = 'success';
    @Input() progress: number;

    circumference = this.size * 2 * Math.PI;
    dashArray = `${this.circumference} ${this.circumference}`;
    dashOffset = this.circumference;

    colorOne: string;
    colorTwo: string;

    public ngOnInit(): void {
        if (this.progress) {
            this.setProgress(this.progress);
        }

        this.size = this.size - 10;
        this.setStyle();
    }

    public setProgress(percent: number): void {
        const offset = this.circumference - percent / 100 * this.circumference;
        this.dashOffset = offset;
    }

    private setStyle() {
        const colors = {
            success: {
                one: '#45d9d0',
                two: '#4f8af9',
            },
            warning: {
                one: '#ff9184',
                two: '#ff5b80',
            }
        }

        this.colorOne = this.type === 'success' ? colors.success.one : colors.warning.one;
        this.colorTwo = this.type === 'success' ? colors.success.two : colors.warning.two;
    }
}