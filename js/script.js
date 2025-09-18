let question1 = document.getElementById('question');
let optionbtn1 = document.querySelector('.option-btn1');
let optionbtn2 = document.querySelector('.option-btn2');
let optionbtn3 = document.querySelector('.option-btn3');
let optionbtn4 = document.querySelector('.option-btn4');

let object = [
  {
    question: "Q1. Which planet is known as the Red Planet?",
    option1: "Earth",
    option2: "Mars",
    option3: "Venus",
    option4: "Jupiter",
    answer: "Mars"
  },
  {
    question: "Q2. Who is known as the Father of the Nation in India?",
    option1: "Mahatma Gandhi",
    option2: "Jawaharlal Nehru",
    option3: "Subhash Chandra Bose",
    option4: "Sardar Patel",
    answer: "Mahatma Gandhi"
  },
  {
    question: "Q3. Which is the largest ocean in the world?",
    option1: "Atlantic Ocean",
    option2: "Indian Ocean",
    option3: "Pacific Ocean",
    option4: "Arctic Ocean",
    answer: "Pacific Ocean"
  },
  {
    question: "Q4. Who invented the light bulb?",
    option1: "Nikola Tesla",
    option2: "Thomas Edison",
    option3: "Albert Einstein",
    option4: "Isaac Newton",
    answer: "Thomas Edison"
  },
  {
    question: "Q5. What is the capital city of Japan?",
    option1: "Beijing",
    option2: "Tokyo",
    option3: "Seoul",
    option4: "Bangkok",
    answer: "Tokyo"
  },
  {
    question: "Q6. Which gas do plants absorb during photosynthesis?",
    option1: "Oxygen",
    option2: "Carbon Dioxide",
    option3: "Nitrogen",
    option4: "Hydrogen",
    answer: "Carbon Dioxide"
  },
  {
    question: "Q7. Who wrote the National Anthem of India?",
    option1: "Rabindranath Tagore",
    option2: "Bankim Chandra Chatterjee",
    option3: "Sarojini Naidu",
    option4: "Subhash Chandra Bose",
    answer: "Rabindranath Tagore"
  },
  {
    question: "Q8. Which is the smallest continent in the world?",
    option1: "Europe",
    option2: "Australia",
    option3: "South America",
    option4: "Antarctica",
    answer: "Australia"
  },
  {
    question: "Q9. Which is the national fruit of India?",
    option1: "Apple",
    option2: "Banana",
    option3: "Mango",
    option4: "Orange",
    answer: "Mango"
  },
  {
    question: "Q10. Who was the first man to step on the Moon?",
    option1: "Neil Armstrong",
    option2: "Buzz Aldrin",
    option3: "Yuri Gagarin",
    option4: "Michael Collins",
    answer: "Neil Armstrong"
  },
];

let index = 0;
let score = 0;
let totaltime = 0;
let time = 10;
let countDown;

function startQuestion(i) {
  let q = object[i];
  question1.innerHTML = q.question;
  optionbtn1.innerHTML = q.option1;
  optionbtn2.innerHTML = q.option2;
  optionbtn3.innerHTML = q.option3;
  optionbtn4.innerHTML = q.option4;

  [optionbtn1, optionbtn2, optionbtn3, optionbtn4].forEach(btn => {
    btn.style.backgroundColor = "";
    btn.disabled = false;
  });

  resettime();
  startTime();
}

function displayTime() {
  let min = Math.floor(time / 60);
  let sec = time % 60;
  document.querySelector('.timer').innerHTML =
    `${min.toString().padStart(2, '0')} : ${sec.toString().padStart(2, '0')}`;

}

function startTime() {
  countDown = setInterval(() => {
    if (time > 0) {
      time--;
      displayTime();
    } else {
      clearInterval(countDown);
      nextque();
    }
  }, 1000);
}

function resettime() {
  clearInterval(countDown);
  time = 10;
  displayTime();
}

let buttons = document.querySelectorAll(".d-grid button");
let scoreDisplay = document.querySelector(".score");

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let q = object[index];

    buttons.forEach(b => b.disabled = true);

    if (btn.textContent === q.answer) {
      btn.style.backgroundColor = "green";
      score++;
    } else {
      btn.style.backgroundColor = "red";
      let correctBtn = [...buttons].find(b => b.textContent === q.answer);
      if (correctBtn) correctBtn.style.backgroundColor = "green";
    }

    scoreDisplay.innerHTML = "Score: " + score;
  });
});

let next = document.querySelector('.next');
let reset = document.querySelector('.reset');

reset.style.display = "none";

function nextque() {
  index++;
  if (index < object.length) {
    startQuestion(index);
  } else {
    clearInterval(countDown);
    question1.innerHTML = "Quiz Finished! 🎉";

    buttons.forEach(b => b.style.display = "none");
    next.style.display = "none";
    reset.style.display = "block";
    document.querySelector('.timer').style.display = 'none';
    document.getElementById('timer').style.display = "none";
  }
}

let startquiz = document.getElementById('start-quiz');
let quiz = document.querySelector('.quiz');
let quizcard = document.querySelector('.quiz-card');

quizcard.style.display = "none";

startquiz.addEventListener('click', function () {
  quiz.style.display = "none";
  quizcard.style.display = "block";
  startQuestion(index);
});

let currentQuestion = 0;

function resett(){
  currentQuestion = 0;
  score = 0;
  totaltime = 0;
  location.reload()
}
