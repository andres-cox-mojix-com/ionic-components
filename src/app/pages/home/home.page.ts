import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  components: ComponentInt[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'appstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Buttons and Router',
      redirectTo: '/buttons'
    },
    {
      icon: 'card',
      name: 'Cards',
      redirectTo: '/card'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
interface ComponentInt {
   icon: string;
   name: string;
   redirectTo: string;
 }