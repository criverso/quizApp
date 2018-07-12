import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  // Place all varibles here
  description = "I am working in the service!";
  
  result = 0;
  finalResult = "teacher";

  // getResult Function which checks to see what is the final results.
  getResult(result){
    if (result <= 9) {
      return this.finalResult = "teacher";
    } else if (result <= 19) {
      return this.finalResult = "engineer";
    } else if (result <= 29) {
      return this.finalResult = "lawyer";
    } else if (result <= 40) {
      return this.finalResult = "doctor";
    }
  }

  // restartQuiz Function to restarts the result value back to 0.
  restartQuiz(){
    this.result = 0;
  }

  constructor() { }
}
