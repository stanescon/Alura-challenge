import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mobile = false

  galleryStarWars = [
    {
      name: "Produto XYZ",
      price: "R$ 60,00",
      image: "star-wars-1.png"
    },
    {
      name: "Produto XYZ",
      price: "R$ 60,00",
      image: "star-wars-2.png"
    },
    {
      name: "Produto XYZ",
      price: "R$ 60,00",
      image: "star-wars-3.png"
    },
    {
      name: "Produto XYZ",
      price: "R$ 60,00",
      image: "star-wars-4.png"
    },
    {
      name: "Produto XYZ",
      price: "R$ 60,00",
      image: "star-wars-5.png"
    },
    {
      name: "Produto XYZ",
      price: "R$ 60,00",
      image: "star-wars-6.png"
    }
  ]

  galleryConsoles = [
    {
      name: "Produto XYZ",
      price: "R$ 60,00",
      image: "consoles-1.png"
    },
    {
      name: "Produto XYZ",
      price: "R$ 60,00",
      image: "consoles-2.png"
    },
    {
      name: "Produto XYZ",
      price: "R$ 60,00",
      image: "consoles-3.png"
    },
    {
      name: "Produto XYZ",
      price: "R$ 60,00",
      image: "consoles-4.png"
    },
    {
      name: "Produto XYZ",
      price: "R$ 60,00",
      image: "consoles-5.png"
    },
    {
      name: "Produto XYZ",
      price: "R$ 60,00",
      image: "consoles-6.png"
    }
  ]

  galleryDiverse = [
    {
      name: "Produto XYZ",
      price: "R$ 60,00",
      image: "diversos-1.png"
    },
    {
      name: "Produto XYZ",
      price: "R$ 60,00",
      image: "diversos-2.png"
    },
    {
      name: "Produto XYZ",
      price: "R$ 60,00",
      image: "diversos-3.png"
    },
    {
      name: "Produto XYZ",
      price: "R$ 60,00",
      image: "diversos-4.png"
    },
    {
      name: "Produto XYZ",
      price: "R$ 60,00",
      image: "diversos-5.png"
    },
    {
      name: "Produto XYZ",
      price: "R$ 60,00",
      image: "diversos-6.png"
    }
  ]



  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth < 900){
      this.mobile = true
    }
  }

}
