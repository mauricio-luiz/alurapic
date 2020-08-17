import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignUpComponent } from './signup/signup.componet';

@NgModule({
    declarations: [ 
        SignInComponent,
        SignUpComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule
    ]
})
export class HomeModule {}