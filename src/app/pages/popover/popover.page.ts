import { Component, OnInit } from '@angular/core';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  async showPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopinfoComponent,
      event: ev,
      mode: 'ios',
      backdropDismiss: false,
      translucent: false
    });
  
    await popover.present();

    const { data } = await popover.onDidDismiss();

    console.log('Father:', data);
  }
}
