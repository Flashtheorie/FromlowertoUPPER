import { Component, ElementRef } from '@angular/core';
import { initializeApp } from "firebase/app";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'From lower to UPPER';
  input: any | undefined
  output: any | undefined
  myNameElem: any
  inputRempli : any
  outputRempli : any
 checkIfInputRempli(){
   if (this.input !== '')
   {
    this.inputRempli = true;
   }
   else
   {
    this.inputRempli = false;
   }
 }

 checkIfOutputRempli(){
  if (this.output !== '')
  {
   this.outputRempli = true;
  }
  else
  {
   this.outputRempli = false;
  }
}
  lowertoupper(){
    this.output = this.input.toUpperCase()
    this.input = '';
    this.inputRempli = false;
    this.outputRempli = true;
  }


  uppertolower(){
    this.input = this.output.toLowerCase();
    this.output = '';
    this.outputRempli = false;
    this.inputRempli = true;
  }
  
  
}

