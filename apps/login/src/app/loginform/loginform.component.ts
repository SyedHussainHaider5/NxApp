import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'newproject-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent {
  constructor(private router: Router) {}
username: any;
  password: any;
  onButtonClick(){

  }

}
