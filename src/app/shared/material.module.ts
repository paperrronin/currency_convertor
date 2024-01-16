import { NgModule } from "@angular/core";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'



const materialModules = [
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatSelectModule,
    MatIconModule
    
];

@NgModule({
  declarations: [],
  imports: [materialModules],
  exports: [materialModules],
})
export class MaterialModule {}
