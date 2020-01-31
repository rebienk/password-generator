import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pwLength = 0;
  password = '';
  letterCheck = false;
  numberCheck = false;
  symbolCheck = false;

    getPasswordLength(value: string){ 
      const parsedValue = parseInt(value)

      if (!isNaN(parsedValue)) {
        this.pwLength = parsedValue;
      }
    }

    includeLetters(){
      return this.letterCheck = !this.letterCheck;
    }

    includeNumber(){
      return this.numberCheck = !this.numberCheck;
    }

    includeSymbol(){
      return this.symbolCheck = !this.symbolCheck;
    }

    onButtonClicked(){
     const capitalLetters = 'ABCDEFGHIKLMNOPQRSTVXYZ';
     const randomLetters = capitalLetters.toLowerCase();
     const randomNumbers = '1234567890';
     const randomSymbols = '!@#$%^&*()';

     let validChars = '';

     if (this.includeLetters) {
        validChars += randomLetters;
      }

     if (this.includeNumber) {
        validChars += randomNumbers;
      }

     if (this.includeSymbol) {
        validChars += randomSymbols;
      }
      let generatedPassword = '';

      for (let i=0; i<this.pwLength; i++){
        const index = Math.floor(Math.random() * validChars.length);
        generatedPassword += validChars[index]
      }
      this.password = generatedPassword;
    }
}
