import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  number1: number = 10;
  number2: number = 15;

  addNumbers() {
    return this.number1 + this.number2;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
