import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { starComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacePipe } from './convert-to-spaces.pipe';

@NgModule({
  declarations: [
    starComponent,
    ConvertToSpacePipe,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    starComponent,
    CommonModule,
    FormsModule,
    ConvertToSpacePipe,
  ]
})
export class SharedModule { }
