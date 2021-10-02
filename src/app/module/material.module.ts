import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';


const materialComponent = [
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatCardModule,
  MatDividerModule,
  MatListModule
]

@NgModule({
  declarations: [],
  imports: [materialComponent],
  exports: [materialComponent]
})
export class MaterialModule {
}
