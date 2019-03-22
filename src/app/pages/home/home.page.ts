import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ComponentInterface } from 'src/app/components/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  components:  Observable<ComponentInterface[]>;

  constructor(  private menuController: MenuController,
                private dataService: DataService) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOpts();
  }

  toggleMenu(){
    this.menuController.toggle();
  }

}
