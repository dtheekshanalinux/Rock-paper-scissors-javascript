const handoptions = {
  'rock' : 'assets/Rock.png',
  'paper' : 'assets/Paper.png',
  'scissors' : 'assets/Scissors.png',

}
let SCORE = 0;
const pickUserHand = (choice) =>{
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest")
  contest.style.display = "flex";

  document.getElementById('userPickImage').src = handoptions[choice];

  pickcomhand(choice)
};

const pickcomhand = (choice) =>{
  let hands = ["rock","paper","scissors"];
  let cphand = hands[Math.floor(Math.random() * hands.length)];

  document.getElementById("computerPickImage").src = handoptions[cphand];

  decision(choice,cphand)
};

const decision = (userhand,comhand) =>{
  if(userhand == "paper" && comhand == "rock"){
    setdecision("YOU LOSE!");
  }  
  if(userhand == "paper" && comhand == "paper"){
    setdecision("IT'S A TIE");
  }  
  if(userhand == "paper" && comhand == "scissors"){
    setdecision("YOU WIN!");
    setScore(SCORE + 1)
  }  
  if(userhand == "scissors" && comhand == "rock"){
    setdecision("YOU LOSE!");
  }  
  if(userhand == "scissors" && comhand == "paper"){
    setdecision("YOU WIN!");
    setScore(SCORE + 1)
  }  
  if(userhand == "scissors" && comhand == "scissors"){
    setdecision("IT'S A TIE");
  }  
  if(userhand == "rock" && comhand == "rock"){
    setdecision("IT'S A TIE");
  }  
  if(userhand == "rock" && comhand == "paper"){
    setdecision("YOU LOSE!");
  }  
  if(userhand == "rock" && comhand == "scissors"){
    setdecision("YOU WIN!");
    setScore(SCORE + 1)
  }  
}

const setdecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
}

const resgame = () => {
  let hands = document.querySelector(".hands");
  hands.style.display = "flex";

  let contest = document.querySelector(".contest")
  contest.style.display = "none";
} 

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score h1").innerText = newScore;
}