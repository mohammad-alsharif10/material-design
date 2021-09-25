import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;

  slideToggleChange($event: MatSlideToggleChange): void {
    console.log($event);
  }
}
