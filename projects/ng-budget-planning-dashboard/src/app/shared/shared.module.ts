import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './template/header/header.component';
import { RouterModule } from '@angular/router';
import { ProgressComponent } from './components/progress/progress.component';
import { ButtonComponent } from './components/button/button.component';
import { ProgressRadiusComponent } from './components/progress-radius/progress-radius.component';
import { HeaderMobileComponent } from './template/header-mobile/header-mobile.component';

const declarationsAndExports = [
    HeaderComponent,
    HeaderMobileComponent,
    ButtonComponent,
    ProgressComponent,
    ProgressRadiusComponent,
]

@NgModule({
    declarations: [...declarationsAndExports],
    exports: [...declarationsAndExports],
    imports: [CommonModule, FormsModule, RouterModule],
})
export class SharedModule {}
