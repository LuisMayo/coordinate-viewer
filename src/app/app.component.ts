import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  width: string;
  height: string;
  coordinates: string;
  coordinateMap = new Map<string, string[]>();
  displayType = 'rowFirst';

  changeCoordinates(): void {
    const coordinates = this.coordinates.split(';');
    for (const coordinate of coordinates) {
      let [x, y, z] = coordinate.split(',');
      if (this.displayType === 'colFirst') {
        [x, y, z] = [y, x, z];
      }
      this.coordinateMap.get(x + ',' + y).push(z);
    }
  }

  initMap(): void {
    this.coordinateMap.clear();
    for (let i = 0; i < +this.height; i++) {
      for (let j = 0; j < +this.width; j++) {
        this.coordinateMap.set(i + ',' + j, []);
      }
    }
    this.changeCoordinates();
  }
}
