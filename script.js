/* Module 5 Project Script File 
var actors = [{},{question: "What actor played the role of captin America?", answer: "Chris Evans"},
                {question2: "What actor starred the lead role in Iron Man?", answer: "Robert Downey Jr"},
                {question3: "Who played the role of Clark Kent from the 2013 Superman?", answer: "Henry Cavill"},
             ]
var food =   [{},{question: "What dish did make Remy the rat make in the final scenes of Ratatouille", answer: "Ratatouille"},
                {question2: "What did the lady and the tramp eat when they had their dinner date?", answer: "Spaghetti"},
                {question3: "What pastry did Tiana make for the ball in The Princess and the Frog?", answer: "Beignets"},
             ]
var games =  [{},{question: "In what game does the detective Sebastan Castallanos get trapped in a nightmare after entering Becon Mental                                   Hospital?", answer: "The Evil Within"},
                {question2: "What is the name of the main character in Dead Space one, two, and three?", answer: "Isaac Clarke"},
                {question3: "Who is the creater of the classic video game Pong?", answer: "Nolan Bushnell"},
             ]*/

var actors = [

{},

{question: "What actor played the role of captin America?", answer: "Chris Evans" },

{question: "What actor starred the lead role in Iron Man?", answer: "Robert Downey Jr"}, 

{question: "Who played the role of Clark Kent from the 2013 Superman?", answer: "Henry Cavill"},  

]

 

var food = [

{},

{question: "What dish did make Remy the rat make in the final scenes of Ratatouille", answer: "Ratatouille"},

{question: "What did the lady and the tramp eat when they had their dinner date?", answer: "Spaghetti"}, 

{question: "What pastry did Tiana make for the ball in The Princess and the Frog?", answer: "Beignets"},  

]

 

var games = [

{},

{question: "In what game does the detective Sebastan Castallanos get trapped in a nightmare after entering Becon Mental                     Hospital?", answer: "The Evil Within"},

{question: "What is the name of the main character in Dead Space one, two, and three?", answer: "Isaac Clarke"}, 

{question: "Who is the creater of the classic video game Pong?", answer: "Nolan Bushnell"},  

]

 

var score= 0;

 

function showQuestion(topic, amount){

  var index= amount/ 100;

  var question=" ";

  var answer=" ";

  if(topic == "actors")

{

  question = actors[index].question;

answer = actors[index].answer;

}

 

else if (topic== "food") {

  question = food[index].question;

  answer = food[index].answer;

}

  else if (topic == "games") {

    question = games[index].question;

    answer = games[index].answer;

  }

 

var potentialAnswer = window.prompt(question)

if (potentialAnswer == answer) {

   score= score + amount;

   var scores = document.getElementsByClassName("_score");

   for (var i = 0; i < scores.length; i++)

   {

       scores[i].innerHTML = "Score: $" + score;

   }

   window.alert("You're Correct!");

}

 

else{

  window.alert("Wrong. Please Try Again.");

}

}