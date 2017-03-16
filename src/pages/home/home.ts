import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

declare var google;

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController) {
     this.ionViewLoaded(); 
  }
    ionViewLoaded(){
    this.loadMap();
}

 loadMap(){
    Geolocation.getCurrentPosition().then((position) => { 
	  let latLng = new google.maps.LatLng(15.1457, 120.5948);
      let mapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
	  
	  var marker = new google.maps.Marker({
      position: latLng,
	  animation: google.maps.Animation.DROP,
      map: this.map,
      title: 'This site...'
  });
  });
  }
  }
  
  