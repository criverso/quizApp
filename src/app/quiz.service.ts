import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  // Gets the value from user and adds it to the total and moves to next question.
  goNextQuestion(result) {
    this.totalResult = this.totalResult + result;
    
    if (this.currentQuestion < 10 ) {
      this.currentQuestion++;

      this.router.navigate([`/question/${this.currentQuestion}`]);
      
    } else {
      this.getResult(this.totalResult);
      this.router.navigate([`/result`]);

    }

  }

  // This returns back depending a page.
  goPreviousQuestion(){
    if(this.currentQuestion > 0 ) {
      this.currentQuestion--;
      
      this.router.navigate([`question/${this.currentQuestion}`]);
    } else {
      this.router.navigate([`/`]);
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

  // restartQuiz Function to restarts the result value back to 0.
  restartQuiz(){
    this.result = 0;
    this.totalResult = 0;
    this.currentQuestion = 0;
    this.router.navigate([`question/${this.currentQuestion}`]);

  }

  // Place all varibles here
  currentQuestion = 0;
  result = 0;
  totalResult = 0;
  finalResult = "clown";

  // Array of questions
  questions = [
    // Question 1
    {
      id: 1,
      question: "Which choice best describes you?",
      choices: [ 
        {
          answer: "A. Teach",
          value: 1, 
          selection: false
        },
        {
          answer: "B. Problem Solving",
          value: 2, 
          selection: false
        },
        {
          answer: "C. Debate",
          value: 3, 
          selection: false
        },
        {
          answer: "D. Help People",
          value: 4, 
          selection: false
        }
      ], 
    },
    // Question 2
    {
      id: 2,
      question: "What is your best quality?",
      choices: [ 
        {
          answer: "A. Outgoing Personality",
          value: 1, 
          selection: false
        },
        {
          answer: "B. Drive and Focus",
          value: 2, 
          selection: false
        },
        {
          answer: "C. Good Looks",
          value: 3, 
          selection: false
        },
        {
          answer: "D. Kindness",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 3
    {
      id: 3,
      question: "What kind of music do you like?",
      choices: [ 
        {
          answer: "A. Country",
          value: 1, 
          selection: false
        },
        {
          answer: "B. Metal",
          value: 2, 
          selection: false
        },
        {
          answer: "C. Pop music",
          value: 3, 
          selection: false
        },
        {
          answer: "D. Classical",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 4
    {
      id: 4,
      question: "Are you an introvert or an extrovert?",
      choices: [ 
        {
          answer: "A. Introvert",
          value: 1, 
          selection: false
        },
        {
          answer: "B. Exrovert",
          value: 2, 
          selection: false
        },
        {
          answer: "C. Both",
          value: 3, 
          selection: false
        },
        {
          answer: "D. I don't know",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 5
    {
      id: 5,
      question: "What is your favorite subject?",
      choices: [ 
        {
          answer: "A. English",
          value: 1, 
          selection: false
        },
        {
          answer: "B. Math",
          value: 2, 
          selection: false
        },
        {
          answer: "C. Government",
          value: 3, 
          selection: false
        },
        {
          answer: "D. Biology",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 6
    // Insert a picture in choices
    {
      id: 6,
      question: "Which vehicle do you like best",
      choices: [ 
        {
          answer: "A. Ford Focus",
          value: 1, 
          selection: false
        },
        {
          answer: "B. Challenger",
          value: 2, 
          selection: false
        },
        {
          answer: "C. Mercedes",
          value: 3, 
          selection: false
        },
        {
          answer: "D. Ferari",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 7
    {
      id: 7,
      question: "What can't you live without?",
      choices: [ 
        {
          answer: "A. Books",
          value: 1, 
          selection: false
        },
        {
          answer: "B. Computer",
          value: 2, 
          selection: false
        },
        {
          answer: "C. Music",
          value: 3, 
          selection: false
        },
        {
          answer: "D. Phone",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 8
    // Insert Picture in choices
    { 
      id: 8,
      question: "Which style suits you best?",
      choices: [ 
        {
          answer: "A. slacks and tennis",
          value: 1, 
          selection: false
        },
        {
          answer: "B. T-shirt and jeans",
          value: 2, 
          selection: false
        },
        {
          answer: "C. Suit",
          value: 3, 
          selection: false
        },
        {
          answer: "D. Hawaiian Shirt",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 9
    {
      id: 9,
      question: "Which activity do you like doing the most?",
      choices: [ 
        {
          answer: "A. Arts and Crafts",
          value: 1, 
          selection: false
        },
        {
          answer: "B. Skateboarding",
          value: 2, 
          selection: false
        },
        {
          answer: "C. Golf",
          value: 3, 
          selection: false
        },
        {
          answer: "D. Fishing",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 10
    // Insert Picture in choices
    { 
      id: 10,
      question: "Which meal do you like the most?",
      choices: [ 
        {
          answer: "A. Tacos",
          value: 1, 
          selection: false
        },
        {
          answer: "B. Pizza",
          value: 2, 
          selection: false
        },
        {
          answer: "C. Goose",
          value: 3, 
          selection: false
        },
        {
          answer: "D. Caviar",
          value: 4, 
          selection: false
        }
      ]
    }
  ]

  constructor(private router: Router) {
    this.router = router;
   }
}
