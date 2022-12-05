import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  img1:string
  img2:string
  img3:string
  img4:string
  Title1:string
  Title2:string
  Title3:string
  Title4:string
  Title5:string
  Title6:string
  Title7:string
  Title8:string
  constructor(){
    this.img1='../../../assets/images/2.jpeg'
    this.img2='../../../assets/images/1.jpeg'
    this.img3='../../../assets/images/3.jpg'
    this.img4='../../../assets/images/2.jpeg'
    this.Title1="chandra"
    this.Title2="chandra bhushan"
    this.Title3="chaudhary"
    this.Title4="gagan"
    this.Title5="dhanush"
    this.Title6="santosh"
    this.Title7="ravi "
    this.Title8="suraj"
  }
}
