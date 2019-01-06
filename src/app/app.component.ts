import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testFlexLayout';
  dragged: boolean = false;

  mouseMove(event: MouseEvent) {
    console.log("mouseMove");
  }
  
  startDrag(event: DragEvent): void {
    console.log("startDrag");
    event.dataTransfer.setData("name", event.srcElement.innerHTML);
  }
}
