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

  lowertoupper(){
    this.output = this.input.toUpperCase()
    this.input = '';
  }

  uppertolower(){
    this.input = this.output.toLowerCase();
    this.output = '';
  }
  
  
}

const firebaseConfig = {
  apiKey: "AIzaSyA2jSXj7Y1jk6qg8fLWCGGkjdBRB88gzV4",
  authDomain: "fromlowertoupper.firebaseapp.com",
  projectId: "fromlowertoupper",
  storageBucket: "fromlowertoupper.appspot.com",
  messagingSenderId: "485461348528",
  appId: "1:485461348528:web:2c030055c2984d874eab75"
};
const app = initializeApp(firebaseConfig);