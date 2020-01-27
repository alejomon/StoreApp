import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Buscar',
      url: '/home',
      icon: 'search'
    },
    {
      title: 'Home',
      url: '/list',
      icon: 'home'
    },
    {
      title: 'Tus Pedidos',
      url: '/TusPedidos',
      icon: 'logo-ionitron'
    },
    {
      title: 'Forma de Pago',
      url: '/forma-pago',
      icon: 'logo-usd'
    },
    {
      title: 'Chat',
      url: '/chat',
      icon: 'logo-twitch'
    },
    {
      title: 'Cuenta',
      url: '/cuenta',
      icon: 'logo-snapchat'
    },
    {
      title: 'Ayuda',
      url: '/ayuda',
      icon: 'help-circle'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
