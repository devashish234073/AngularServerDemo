import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'udemycrce';

  currServer = "";
  servers=["server981","server209","server332"];

  constructor() { }

  ngOnInit(): void {
  }

  getTxtColor(){
    return (this.currServer==""?"gray":"green");
  }

  addServer(){
    if(this.servers.indexOf(this.currServer)>-1){
      alert("server '"+this.currServer+"' already exists.");
      this.currServer = "";
      return;
    }
    this.servers.push(this.currServer);
    this.currServer='';
  }
}
