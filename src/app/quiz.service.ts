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
      question: "Pick a circus accessory?",
      choices: [ 
        {
          answer: "A. Red Nose",
          value: 1, 
          selection: false
        },
        {
          answer: "B. Cristal Ball",
          value: 2, 
          selection: false
        },
        {
          answer: "C. Spiffy Hat",
          value: 3, 
          selection: false
        },
        {
          answer: "D. A whip ",
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
      question: "What is more important to you?",
      choices: [ 
        {
          answer: "A. Family",
          value: 1, 
          selection: false
        },
        {
          answer: "B. Friends",
          value: 2, 
          selection: false
        },
        {
          answer: "C. Education",
          value: 3, 
          selection: false
        },
        {
          answer: "D. Adventure",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 6
    // Insert a picture in choices
    {
      id: 6,
      question: "Where can you be found during the weekend?",
      choices: [ 
        {
          // Movies
          answer: "http://www.marcustheatres.com/media/images/theatre-small-images/136-majestic-cinema-of-brookfield-brookfield.jpg",
          value: 1, 
          selection: false
        },
        {
          // Netflix & Chill
          answer: "https://www.bellanaija.com/wp-content/uploads/2017/01/Buhari_Vacation_January-2017-300x300.jpg",
          value: 2, 
          selection: false
        },
        {
          // In the club
          answer: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fH4v93J1g8_YlH5CBf26lTvYZoRdUaLU6-r3Ng2-QnbfUZE0",
          value: 3, 
          selection: false
        },
        {
          // At the gym
          answer: "https://www.warriormafit.com/wp-content/uploads/2018/02/workout-partner-300x300.jpg",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 7
    {
      id: 7,
      question: "What will you do at the carnival?",
      choices: [ 
        {
          answer: "A. Get on the rides",
          value: 1, 
          selection: false
        },
        {
          answer: "B. Eat yummy food",
          value: 2, 
          selection: false
        },
        {
          answer: "C. Play Games",
          value: 3, 
          selection: false
        },
        {
          answer: "D. Visiit the fortune teller",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 8
    // Insert Picture in choices
    { 
      id: 8,
      question: "What is your favorite circus Animal?",
      choices: [ 
        {
          // LION
          answer: "http://www.maryellenmark.com/images/300px_s/401T-759-007.jpg",
          value: 1, 
          selection: false
        },
        {
          // ELEPHANT
          answer: "https://www.gannett-cdn.com/-mm-/9065941e142eb769bb76794c742e08d1e14ee558/r=300/http/www.gannett-cdn.com/-mm-/9065941e142eb769bb76794c742e08d1e14ee558/r=300/http/www.gannett-cdn.com/-mm-/68e5abe6d3f6150b2acd31f8c7ca37e00ab2771d/c=847-0-2849-2002/local/-/media/2016/04/29/USATODAY/USATODAY/635975265056381420-XXX-JJC4237.JPG",
          value: 2, 
          selection: false
        },
        {
          // ZEBRAS
          answer: "https://imgc.allpostersimages.com/img/posters/joanne-williams-black-white-of-zebra-and-plain-kenya_u-L-PZXX6Q0.jpg?src=gp&w=300&h=375",
          value: 3, 
          selection: false
        },
        {
          // PONY
          answer: "https://d3f49glnpfzr7k.cloudfront.net/medium/ecc71da7-a48d-44e5-9064-d1a6d2ee2384.jpg",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 9
    {
      id: 9,
      question: "What is your favorite circus act?",
      choices: [ 
        {
          answer: "A. Fire Eater",
          value: 1, 
          selection: false
        },
        {
          answer: "B. Lion Tamer",
          value: 2, 
          selection: false
        },
        {
          answer: "C. Trapeze",
          value: 3, 
          selection: false
        },
        {
          answer: "D. Clowns",
          value: 4, 
          selection: false
        }
      ],
    },
    // Question 10
    // Insert Picture in choices
    { 
      id: 10,
      question: "Choose a circus snack?",
      choices: [ 
        {
          // funnel cake
          answer: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxkjpuNC3o5gQpF5WLEYC165nOEu6tDAXAgTlyA6mcG6hbHHL",
          value: 1, 
          selection: false
        },
        {
          // popcorn
          answer: "http://lifemadesimplebakes.com/wp-content/uploads/2016/01/Black-Pepper-Parmesan-Popcorn-1-300x300.jpg",
          value: 2, 
          selection: false
        },
        {
          // cottoncandy
          answer: "https://stevejobko.com/wp-content/uploads/2016/01/cotton-candy-300x300.jpg",
          value: 3, 
          selection: false
        },
        {
          // onion blosom
          answer: "https://i.pinimg.com/originals/0d/2f/93/0d2f934002b583cb66886b71bdb7253a.jpg",
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
