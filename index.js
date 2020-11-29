var readlineSync=require("readline-sync")
var userName=readlineSync.question("What's your name? ")

console.log("Welcome "+userName+" !! to DO YOU KNOW Tark?")

var score=0;

// high score's data
var highScores=[
  {
    name:"Tark",
    score:10
  },
  {
    name:"Priya",
    score:9
  },
]


function play(question,answer)
{
  var userAnswer=readlineSync.question(question)
  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    score=score+1;
    console.log("correct")
  }
  else{
    console.log("wrong")
  }
  console.log("current score: "+score)
  console.log("----------------")
}

var questionList=[
  questionOne={
    question:"Where do I live? ",
    answer: "Punjab"
  },
  questionTwo={
    question:"My favorite snacks are? ",
    answer: "Panipuri"
  },
  questionThree={
    question:"Where do I study? ",
    answer: "Thapar"
  }
  ];


for(i=0;i<questionList.length;i++)
{
  play(questionList[i].question,questionList[i].answer)
}

console.log("Your Total score : "+score)

console.log("Check out high-scores here : ")
for(i=0;i<highScores.length;i++)
{
  console.log((i+1)+" Name : "+highScores[i].name + ", Score : "+highScores[i].score)
}
