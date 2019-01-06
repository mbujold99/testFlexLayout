import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'g[app-device]',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  @Input() label: string = "Unknown";

  constructor() { }

  ngOnInit() {
  }

}
