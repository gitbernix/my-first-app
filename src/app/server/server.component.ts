import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }

  number1: number = 10;
  number2: number = 15;

  addNumbers() {
    return this.number1 + this.number2;
  }
}
