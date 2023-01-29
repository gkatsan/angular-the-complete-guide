import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails = false;
  logArray:Date[] = [];

  onToggleDetails () {
    this.displayDetails = !this.displayDetails;
    this.logArray.push(new Date());
  }
}
