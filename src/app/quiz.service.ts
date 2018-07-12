import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  // Place all varibles here
  description = "I am working in the service!";
  
  result = 0;
  totalResult = 0;
  finalResult = "teacher";

  questions = [
    // Question 1
    {
      id: 1,
      name: "Which choice best describes you?",
      choices: [ 
        {
          name: "A. Teach",
          value: 1, 
          selection: false
        },
        {
          name: "B. Problem Solving",
          value: 2, 
          selection: false
        },
        {
          name: "C. Debate",
          value: 3, 
          selection: false
        },
        {
          name: "D. Help People",
          value: 4, 
          selection: false
        }
      ], 
    },
    // Question 2
    {
      id: 2,
      name: "What is your best quality?",
      choices: [ 
        {
          name: "A. Outgoing Personality",
          value: 1, 
          selection: false
        },
        {
          name: "B. Drive and Focus",
          value: 2, 
          selection: false
        },
        {
          name: "C. Good Looks",
          value: 3, 
          selection: false
        },
        {
          name: "D. Kindness",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 3
    {
      id: 3,
      name: "What kind of music do you like?",
      choices: [ 
        {
          name: "A. Country",
          value: 1, 
          selection: false
        },
        {
          name: "B. Metal",
          value: 2, 
          selection: false
        },
        {
          name: "C. Pop music",
          value: 3, 
          selection: false
        },
        {
          name: "D. Classical",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 4
    {
      id: 4,
      name: "Are you an introvert or an extrovert?",
      choices: [ 
        {
          name: "A. Introvert",
          value: 1, 
          selection: false
        },
        {
          name: "B. Exrovert",
          value: 2, 
          selection: false
        },
        {
          name: "C. Both",
          value: 3, 
          selection: false
        },
        {
          name: "D. I don't know",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 5
    {
      id: 5,
      name: "What is your favorite subject?",
      choices: [ 
        {
          name: "A. English",
          value: 1, 
          selection: false
        },
        {
          name: "B. Math",
          value: 2, 
          selection: false
        },
        {
          name: "C. Government",
          value: 3, 
          selection: false
        },
        {
          name: "D. Biology",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 6
    // Insert a picture in choices
    {
      id: 6,
      name: "Which vehicle do you like best",
      choices: [ 
        {
          name: "A. Ford Focus",
          value: 1, 
          selection: false
        },
        {
          name: "B. Challenger",
          value: 2, 
          selection: false
        },
        {
          name: "C. Mercedes",
          value: 3, 
          selection: false
        },
        {
          name: "D. Ferari",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 7
    {
      id: 7,
      name: "What can't you live without?",
      choices: [ 
        {
          name: "A. Books",
          value: 1, 
          selection: false
        },
        {
          name: "B. Computer",
          value: 2, 
          selection: false
        },
        {
          name: "C. Music",
          value: 3, 
          selection: false
        },
        {
          name: "D. Phone",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 8
    // Insert Picture in choices
    { 
      id: 8,
      name: "Which style suits you best?",
      choices: [ 
        {
          name: "A. slacks and tennis",
          value: 1, 
          selection: false
        },
        {
          name: "B. T-shirt and jeans",
          value: 2, 
          selection: false
        },
        {
          name: "C. Suit",
          value: 3, 
          selection: false
        },
        {
          name: "D. Hawaiian Shirt",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 9
    {
      id: 9,
      name: "Which activity do you like doing the most?",
      choices: [ 
        {
          name: "A. Arts and Crafts",
          value: 1, 
          selection: false
        },
        {
          name: "B. Skateboarding",
          value: 2, 
          selection: false
        },
        {
          name: "C. Golf",
          value: 3, 
          selection: false
        },
        {
          name: "D. Fishing",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 10
    // Insert Picture in choices
    { 
      id: 10,
      name: "Which meal do you like the most?",
      choices: [ 
        {
          name: "A. Tacos",
          value: 1, 
          selection: false
        },
        {
          name: "B. Pizza",
          value: 2, 
          selection: false
        },
        {
          name: "C. Goose",
          value: 3, 
          selection: false
        },
        {
          name: "D. Caviar",
          value: 4, 
          selection: false
        }
      ]
    }
  ]

  // getTotalResult Function which adds the totals throughout the quiz.
  getTotalResult(userInput) {
    this.totalResult = this.totalResult + userInput; 
  }

  // getResult Function which checks to see what is the final results.
  getResult(totalResult){
    if (totalResult <= 9) {
      return this.finalResult = "teacher";
    } else if (totalResult <= 19) {
      return this.finalResult = "engineer";
    } else if (totalResult <= 29) {
      return this.finalResult = "lawyer";
    } else if (totalResult <= 40) {
      return this.finalResult = "doctor";
    }
  }

  // restartQuiz Function to restarts the result value back to 0.
  restartQuiz(){
    this.result = 0;
  }

  constructor() { }
}
