import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mobile = false
  searchMobile = false

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth < 900){
      this.mobile = true
    }
  }

  buscarMobile(){
    this.searchMobile = true
  }

}
