import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input() serverName="";
  serverStatus="offline";
  signalStrength = 0.0;

  constructor() {
    setInterval(()=>{
      this.getServerStatus();
    },1000);
  }

  getServerStatus(){
    this.signalStrength = parseFloat(Math.random().toFixed(3));
    if(this.signalStrength>0.5){
      this.serverStatus = "online";
    } else {
      this.serverStatus = "offline";
    }
  }

  ngOnInit(): void {
  }

}
