
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
    declarations: [],
    imports: [
        MatSidenavModule,
        MatIconModule,
        MatRadioModule,
        MatMenuModule,
        MatSelectModule,
        MatFormFieldModule,
        MatStepperModule,
        MatCardModule,
        MatListModule,
        MatInputModule,
        MatToolbarModule,
        MatTabsModule,
        MatChipsModule,
        MatSnackBarModule,
        MatButtonModule,
        MatGridListModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatSidenavModule,
        MatIconModule,
        MatRadioModule,
        MatMenuModule,
        MatSelectModule,
        MatFormFieldModule,
        MatStepperModule,
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        MatTabsModule,
        MatChipsModule,
        MatSnackBarModule,
        MatInputModule,
        MatButtonModule,
        MatGridListModule,
        MatProgressSpinnerModule
    ],
    providers: [],
    bootstrap: []
})
export class MaterialModule { }
