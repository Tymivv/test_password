import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [ `
            .colorText{color:Red;}
            .colorPasIsEasy{color:Red;}
            .colorPasIsMedium{color:Yellow;}
            .colorPasIsStrong{color:Blue;}
          `]
  
})
export class AppComponent {
  title = 'test_password';
  password = '';
  textColorByLength = false;
  letters = 0;
  digits = 0;
  symbols = 0;
  safePassword = 0
  pasIsEasy = false;
  pasIsMedium = false;
  pasIsStrong = false;

  Reset (){
    this.pasIsEasy = false;
    this.pasIsMedium = false;
    this.pasIsStrong = false;
    this.letters = 0;
    this.digits = 0;
    this.symbols = 0;
    this.safePassword = 0;
  }

  onTitleChange(){
    this.textColorByLength = false;
    for (let index = 0; index < this.password.length; index++) {
      if(/^[a-zA-Z]+$/.test(this.password[index])){
        this.letters = 1;
      }
      else if(/^[0-9]+$/.test(this.password[index])){
        this.digits = 1;
      }
      else {
        this.symbols = 1;
      }
    }
    this.safePassword = this.letters + this.digits +this.symbols
    if(this.password.length>0 && this.password.length<8){
      this.Reset ()
      this.textColorByLength = true;
    } else if (this.safePassword === 3) {
      this.Reset ()
      this.pasIsStrong = true;
    } else if (this.safePassword === 2 ) {
      this.Reset ()
      this.pasIsMedium = true;
    } else if (this.safePassword === 1){
      this.Reset ()
      this.pasIsEasy = true;
    }
  }
}
