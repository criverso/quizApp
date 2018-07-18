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

    if (totalResult <= 15) {
      this.finalResult = "clown";
      this.finalPic = "clown.gif";
    } else if (totalResult <= 25) {
      this.finalResult = "beardedlady";
      this.finalPic = "beardedlady.gif";
    } else if (totalResult <= 30) {
      this.finalResult = "acrobat";
      this.finalPic = "acrobat.gif"
    } else if (totalResult <= 40) {
      this.finalResult = "ringmaster";
      this.finalPic = "ringmaster.gif";
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
  finalPic = "clown.gif";

  // Array of questions
  questions = [
    // Question 1
    {
      question: "Pick a circus accessory?",
      selectedAnswer: null,
      choices: [ 
        {
          answer: "A. Red Nose",
          image: "",
          value: 1, 
        },
        {
          answer: "B. Cristal Ball",
          image: "",
          value: 2, 
        },
        {
          answer: "C. Spiffy Hat",
          image: "",
          value: 3, 
        },
        {
          answer: "D. A whip ",
          image: "",
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
          image: "",
          value: 1, 
        },
        {
          answer: "B. Drive and Focus",
          image: "",
          value: 2, 
        },
        {
          answer: "C. Good Looks",
          image: "",
          value: 3, 
        },
        {
          answer: "D. Kindness",
          image: "",
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
          image: "",
          value: 1, 
        },
        {
          answer: "B. Metal",
          image: "",
          value: 2, 
        },
        {
          answer: "C. Pop music",
          image: "",
          value: 3, 
        },
        {
          answer: "D. Classical",
          image: "",
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
          image: "",
          value: 1, 
        },
        {
          answer: "B. Exrovert",
          image: "",
          value: 2, 
        },
        {
          answer: "C. Both",
          image: "",
          value: 3, 
        },
        {
          answer: "D. I don't know",
          image: "",
          value: 4, 
        }
      ],
    },
    // Question 5
    {
      question: "What is more important to you?",
      selectedAnswer: null,
      choices: [ 
        {
          answer: "A. Family",
          image: "",
          value: 1, 
        },
        {
          answer: "B. Friends",
          image: "",
          value: 2, 
        },
        {
          answer: "C. Education",
          image: "",
          value: 3, 
        },
        {
          answer: "D. Adventure",
          image: "",
          value: 4, 
        }
      ],
    },
    // Question 6
    // Insert a picture in choices
    {
      question: "Where can you be found during the weekend?",
      selectedAnswer: null,
      choices: [ 
        {
          // Movies
          answer: "",
          image: "http://www.marcustheatres.com/media/images/theatre-small-images/136-majestic-cinema-of-brookfield-brookfield.jpg",
          value: 1, 
        },
        {
          // Netflix & Chill
          answer:"",
          image: "https://www.bellanaija.com/wp-content/uploads/2017/01/Buhari_Vacation_January-2017-300x300.jpg",
          value: 2, 
        },
        {
          // In the club
          answer: "",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fH4v93J1g8_YlH5CBf26lTvYZoRdUaLU6-r3Ng2-QnbfUZE0",
          value: 3, 
        },
        {
          // At the gym
          answer: "",
          image: "https://www.warriormafit.com/wp-content/uploads/2018/02/workout-partner-300x300.jpg",
          value: 4, 
        }
      ],
    },
    // Question 7
    {
      question: "What will you do at the carnival?",
      selectedAnswer: null,
      choices: [ 
        {
          answer: "A. Get on the rides",
          image: "",
          value: 1, 
        },
        {
          answer: "B. Eat yummy food",
          image: "",
          value: 2, 
        },
        {
          answer: "C. Play Games",
          image: "",
          value: 3, 
        },
        {
          answer: "D. Visiit the fortune teller",
          image: "",
          value: 4, 
        }
      ],
    },
    // Question 8
    // Insert Picture in choices
    { 
      question: "What is your favorite circus Animal?",
      selectedAnswer: null,
      choices: [ 
        {
          // LION
          answer: "",
          image: "http://www.maryellenmark.com/images/300px_s/401T-759-007.jpg",
          value: 1, 
        },
        {
          // ELEPHANT
          answer: "",
          image: "https://www.gannett-cdn.com/-mm-/9065941e142eb769bb76794c742e08d1e14ee558/r=300/http/www.gannett-cdn.com/-mm-/9065941e142eb769bb76794c742e08d1e14ee558/r=300/http/www.gannett-cdn.com/-mm-/68e5abe6d3f6150b2acd31f8c7ca37e00ab2771d/c=847-0-2849-2002/local/-/media/2016/04/29/USATODAY/USATODAY/635975265056381420-XXX-JJC4237.JPG",
          value: 2, 
        },
        {
          // ZEBRAS
          answer: "",
          image: "https://imgc.allpostersimages.com/img/posters/joanne-williams-black-white-of-zebra-and-plain-kenya_u-L-PZXX6Q0.jpg?src=gp&w=300&h=375",
          value: 3, 
        },
        {
          // PONY
          answer: "",
          image: "https://d3f49glnpfzr7k.cloudfront.net/medium/ecc71da7-a48d-44e5-9064-d1a6d2ee2384.jpg",
          value: 4, 
        }
      ],
    },
    // Question 9
    {
      question: "What is your favorite circus act?",
      selectedAnswer: null,
      choices: [ 
        {
          answer: "A. Fire Eater",
          image: "",
          value: 1, 
        },
        {
          answer: "B. Lion Tamer",
          image: "",
          value: 2, 
        },
        {
          answer: "C. Trapeze",
          image: "",
          value: 3, 
        },
        {
          answer: "D. Clowns",
          image: "",
          value: 4, 
        }
      ],
    },
    // Question 10
    // Insert Picture in choices
    { 
      question: "Choose a circus snack?",
      selectedAnswer: null,
      choices: [ 
        {
          // funnel cake
          answer: "",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxkjpuNC3o5gQpF5WLEYC165nOEu6tDAXAgTlyA6mcG6hbHHL",
          value: 1, 
        },
        {
          // popcorn
          answer: "",
          image: "http://lifemadesimplebakes.com/wp-content/uploads/2016/01/Black-Pepper-Parmesan-Popcorn-1-300x300.jpg",
          value: 2, 
        },
        {
          // cottoncandy
          answer: "",
          image: "https://stevejobko.com/wp-content/uploads/2016/01/cotton-candy-300x300.jpg",
          value: 3, 
        },
        {
          // onion blosom
          answer: "",
          image: "https://i.pinimg.com/originals/0d/2f/93/0d2f934002b583cb66886b71bdb7253a.jpg",
          value: 4, 
        }
      ]
    }
  ]

  constructor(private router: Router) {
    this.router = router;

   }
}
