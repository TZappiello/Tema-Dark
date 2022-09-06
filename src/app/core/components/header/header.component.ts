import { Component, OnInit } from '@angular/core';
import { EThema } from './enums/EThema.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  icon: string = EThema.ICON_MOON;
  textThema: string =EThema.TEXT_MOON

  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    const thema = document.body.classList.toggle('dark-thema');

    if(thema) {
      this.textThema = EThema.TEXT_SUN;
      return this.icon = EThema.ICON_SUN;
    }
    this.textThema = EThema.TEXT_MOON;
      return this.icon = EThema.ICON_MOON
  }
}
