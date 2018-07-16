import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  // Gets the value from user and adds it to the total and moves to next question.
  goNextQuestion() {
    
    if (this.currentQuestion < 9 ) {

      this.currentQuestion++;
      this.router.navigate([`/question/${this.currentQuestion}`]);
      
    } else {

      this.calculateResult();
      this.getResult(this.totalResult);
      this.router.navigate([`/result`]);

    }

  }

  // This returns back a page depending where the user is at.
  goPreviousQuestion(){

    if(this.currentQuestion > 0 ) {

      this.currentQuestion--;
      this.router.navigate([`question/${this.currentQuestion}`]);

    } else {

      this.resetValues();
      this.router.navigate([`/`]);
    }

  }

  // Adds the results to totalResult to determine when the user gets at the end.
  calculateResult() {

    for(let i = 0; i < this.questions.length; i++) {
      this.totalResult += this.questions[i].selectedAnswer;

    }

  }
  // Checks to see what is the final results and display the results.
  getResult(totalResult){

    if (totalResult <= 9) {
      return this.finalResult = "clown";
    } else if (totalResult <= 19) {
      return this.finalResult = "beardedlady";
    } else if (totalResult <= 29) {
      return this.finalResult = "acrobat";
    } else if (totalResult <= 40) {
      return this.finalResult = "ringmaster";
    }

  }

  // Resets all the values back to default.
  resetValues() {

    this.result = 0;
    this.totalResult = 0;
    this.currentQuestion = 0;
    
    for(let x = 0; x <= 9; x++) {
      this.questions[x].selectedAnswer = null;
    }
    
  }

  // Restarts all values back to default and returns to the beginning of the quiz.
  restartQuiz(){
    
    this.resetValues();
    this.router.navigate([`question/${this.currentQuestion}`]);

  }

  // Global varibles
  currentQuestion = 0;
  result = 0;
  totalResult = 0;
  finalResult = "clown";

  // Array of questions
  questions = [
    // Question 1
    {
      question: "Which choice best describes you?",
      selectedAnswer: null,
      choices: [ 
        {
          answer: "A. Teach",
          value: 1, 
        },
        {
          answer: "B. Problem Solving",
          value: 2, 
        },
        {
          answer: "C. Debate",
          value: 3, 
        },
        {
          answer: "D. Help People",
          value: 4, 
        }
      ], 
    },
    // Question 2
    {
      question: "What is your best quality?",
      selectedAnswer: null,
      choices: [ 
        {
          answer: "A. Outgoing Personality",
          value: 1, 
        },
        {
          answer: "B. Drive and Focus",
          value: 2, 
        },
        {
          answer: "C. Good Looks",
          value: 3, 
        },
        {
          answer: "D. Kindness",
          value: 4, 
        }
      ],
    },
    // Question 3
    {
      question: "What kind of music do you like?",
      selectedAnswer: null,
      choices: [ 
        {
          answer: "A. Country",
          value: 1, 
        },
        {
          answer: "B. Metal",
          value: 2, 
        },
        {
          answer: "C. Pop music",
          value: 3, 
        },
        {
          answer: "D. Classical",
          value: 4, 
        }
      ],
    },
    // Question 4
    {
      question: "Are you an introvert or an extrovert?",
      selectedAnswer: null,
      choices: [ 
        {
          answer: "A. Introvert",
          value: 1, 
        },
        {
          answer: "B. Exrovert",
          value: 2, 
        },
        {
          answer: "C. Both",
          value: 3, 
        },
        {
          answer: "D. I don't know",
          value: 4, 
        }
      ],
    },
    // Question 5
    {
      question: "What is your favorite subject?",
      selectedAnswer: null,
      choices: [ 
        {
          answer: "A. English",
          value: 1, 
        },
        {
          answer: "B. Math",
          value: 2, 
        },
        {
          answer: "C. Government",
          value: 3, 
        },
        {
          answer: "D. Biology",
          value: 4, 
        }
      ],
    },
    // Question 6
    // Insert a picture in choices
    {
      question: "Which vehicle do you like best",
      selectedAnswer: null,
      choices: [ 
        {
          answer: "A. Ford Focus",
          value: 1, 
        },
        {
          answer: "B. Challenger",
          value: 2, 
        },
        {
          answer: "C. Mercedes",
          value: 3, 
        },
        {
          answer: "D. Ferari",
          value: 4, 
        }
      ],
    },
    // Question 7
    {
      question: "What can't you live without?",
      selectedAnswer: null,
      choices: [ 
        {
          answer: "A. Books",
          value: 1, 
        },
        {
          answer: "B. Computer",
          value: 2, 
        },
        {
          answer: "C. Music",
          value: 3, 
        },
        {
          answer: "D. Phone",
          value: 4, 
        }
      ],
    },
    // Question 8
    // Insert Picture in choices
    { 
      question: "Which style suits you best?",
      selectedAnswer: null,
      choices: [ 
        {
          answer: "A. slacks and tennis",
          value: 1, 
        },
        {
          answer: "B. T-shirt and jeans",
          value: 2, 
        },
        {
          answer: "C. Suit",
          value: 3, 
        },
        {
          answer: "D. Hawaiian Shirt",
          value: 4, 
        }
      ],
    },
    // Question 9
    {
      question: "Which activity do you like doing the most?",
      selectedAnswer: null,
      choices: [ 
        {
          answer: "A. Arts and Crafts",
          value: 1, 
        },
        {
          answer: "B. Skateboarding",
          value: 2, 
        },
        {
          answer: "C. Golf",
          value: 3, 
        },
        {
          answer: "D. Fishing",
          value: 4, 
        }
      ],
    },
    // Question 10
    // Insert Picture in choices
    { 
      question: "Which meal do you like the most?",
      selectedAnswer: null,
      choices: [ 
        {
          answer: "A. Tacos",
          value: 1, 
        },
        {
          answer: "B. Pizza",
          value: 2, 
        },
        {
          answer: "C. Goose",
          value: 3, 
        },
        {
          answer: "D. Caviar",
          value: 4, 
        }
      ]
    }
  ]

  constructor(private router: Router) {
    this.router = router;
   }
}
