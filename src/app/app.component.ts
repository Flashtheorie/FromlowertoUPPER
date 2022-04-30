import { Component, ElementRef } from '@angular/core';
import { initializeApp } from "firebase/app";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'from lower to UPPER';
  input: any | undefined
  output: any | undefined
  

  lowertoupper(){
    this.output = this.input.toUpperCase()
    //this.input = '';

  }


  uppertolower(){
    this.input = this.output.toLowerCase();
    //this.output = '';
   
  }
  
  
}

