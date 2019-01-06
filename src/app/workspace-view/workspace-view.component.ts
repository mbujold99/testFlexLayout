import { Component, OnInit } from '@angular/core';
import { DeviceComponent } from '../device/device.component';

@Component({
  selector: 'app-workspace-view',
  templateUrl: './workspace-view.component.html',
  styleUrls: ['./workspace-view.component.css']
})
export class WorkspaceViewComponent implements OnInit {

  public devices: Array<[string, number, number]> = [];

  constructor() { }

  ngOnInit() {
  }

  public allowDrop(ev: DragEvent): void {
    ev.preventDefault();
    console.log("x = " + ev.pageX + " y = " + ev.pageY);
  }

  public onDrop(ev: DragEvent): void {
    console.log("onDrop() ->" + ev.dataTransfer.getData("name"));
    

    let rect: ClientRect = ev.srcElement.getBoundingClientRect();
    console.log("x = " + rect.left + " y = " + rect.top);

    //var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'app-device'); 
    let x = ev.clientX - rect.left;
    let y = ev.clientY - rect.top;
    let device: [string, number, number] = ["test", x, y];
    this.devices.push(device);
    //newElement.setAttribute("app-device","");
    // newElement.setAttribute("x", x + "px");
    // newElement.setAttribute("y", y + "px");
    // newElement.setAttribute("width", "80");
    // newElement.setAttribute("height", "30");
    // newElement.setAttribute("fill", "#AAA");

    //event.srcElement.appendChild(newElement);

  }
}
