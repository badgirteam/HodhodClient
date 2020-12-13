import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'داشبورد',
      url: '/folder/Dashboard',
      icon: 'home',
    },
    {
      title: 'اینستاگرام',
      url: '/folder/Instagram',
      icon: 'logo-instagram',
    },
    {
      title: 'توئیتر',
      url: '/folder/Twitter',
      icon: 'logo-twitter',
    },
    {
      title: 'تلگرام',
      url: '/folder/Telegram',
      icon: 'navigate-circle-outline',
    },
    {
      title: 'یوتیوب',
      url: '/folder/Youtube',
      icon: 'logo-youtube',
    },
    {
      title: 'آپارات',
      url: '/folder/Aparat',
      icon: 'videocam-outline',
    },
    {
      title: 'افزودن شبکه ی اجتماعی جدید',
      url: '/folder/Add',
      icon: 'add-circle-outline',
    },
  ];
  public labels = ['حساب کاربری', 'تنظیمات برنامه', 'تماس با ما', 'درباره'];

  constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
