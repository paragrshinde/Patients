import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RoutingServiceService {
  data: any;
  constructor(private navCtrl: NavController) {
  }

  push(url: string, data: any = '') {
    this.data = data;
    this.navCtrl.navigateForward(`/${url}`);
  }

  pop(url: string, data: any = '') {
    if (data) {
      this.data = data;
    }
    this.navCtrl.navigateBack(`/${url}`);
  }

  get(key: string) {
    return this.data[key];
  }

  setRoot(url: string, data: any = '') {
    if (data) {
      this.data = data;
    }
    this.navCtrl.navigateRoot(`/${url}`);
  }

}


