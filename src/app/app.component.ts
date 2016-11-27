import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  color = 'green';
  fontSize = 12;

  showSection = false;

  lists = [
      'BD',
      'US',
      'UK'
  ];

  mark = 90;

  toggleValue(){
    this.showSection = !this.showSection;
  }

  updateCountryList(){
    this.lists.pop();
  }

  setMark(number){
    this.mark = number;
  }
}
