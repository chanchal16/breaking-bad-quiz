var readlineSync = require('readline-sync');
var chalk = require('chalk');

// chalk styling
const error = chalk.bold.red;
const success = chalk.bold.green;
const warning = chalk.keyword('orange');

console.log(chalk.yellowBright.underline.bold('The Ultimate Breaking Bad Quiz'));

var score = 0;

var userName = readlineSync.question('Enter your name \n');
console.log(chalk.cyanBright('Welcome '+ chalk.white.bold(userName) + ' to THE UlTIMATE BREAKING BAD QUIZ'));

// quick tip
console.log(warning('Note: Total 10 questions,answer only by choosing one of the option.\n'));

function Quiz(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.blueBright('you answered: ', userAnswer));
    
    console.log(success('Right answer'));
    score++;
    console.log('----------------------');
  }else{
    console.log(chalk.blueBright('you answered: ', userAnswer));

    console.log(error('Wrong answer'));
    console.log("Right Answer was ", chalk.underline.green(answer) + "\n");

    console.log('----------------------');
  }
}

//array of objects for questions
var questions = [
   {
    ques:`1.What was Walter Whits's alias?
    a:Heisenberg
    b:Flynn
    c:Mr.Mayhew \n`,
    ans:'a'
  },
  {
    ques:`2.Where is Gus Fring from?
    a:Argentina
    b:Chile
    c:Italy \n`,
    ans:'b'
  },
  {
    ques:`3.What kind of R.V. do Walt and Jesse cook meth in?
    a:A Winnebago
    b:A Bounder
    c:A Dutchman \n`,
    ans:'b'
  },
  {
    ques:`4.What happened to the money in the crawlspace?
    a:Jesse burnt it
    b:Skyler burnt it
    c:Skyler gave it to Ted Benneke \n`,
    ans:'c'
  },
  {
    ques:`
  5.Who attempted to shoot and kill Hank Schrader in the carpark?
    a:The Cousins
    b:Jesse Pinkman
    c:An unnamed Fring's associate \n`,
    ans:'a'
  },
  {
    ques:`
  6.What was the chemical stolen by Walt, Jesse and Todd from a freight train?
    a:Methylamine
    b:Diourin
    c:Ammonia \n`,
    ans:'a'
  },
  {
    ques:`7.What does Los Pollos Hermanos mean in English?
    a:The chicken house
    b:The chicken brothers
    c:The aromatic chicken \n`,
    ans:'b'
  },
  {
    ques:`
  8.Who was the poet that triggered Hank Schrader's realisation about Walter?
    a:Woodrow Wilson
    b:T.S Eliot
    c:Walt Witman \n`,
    ans:'c'
  },
  {
    ques:`9.What primitive weapon do Tuco’s murderous cousins favor?
    a:Hammer
    b:Axe
    c:Sword \n`,
    ans:'b'
  },
  {
    ques:`10.When Walt retired from the meth game, how much money did he walk away with?
    a:$8 million
    b:$40 million
    c:$80 million \n`,
    ans:'c'
  },
 
]

//looping the questions
for(i=0; i< questions.length; i++){
  Quiz(questions[i].ques,questions[i].ans);
}

console.log(chalk.cyanBright('You scored: ',score));

var highScores = [
  {
    name:'Chanchal',
    score:10
  },
  {
    name:'Sukanya',
    score:9
  }
]

function checkScores(){
    if(highScores[i].score < score){
      console.log(chalk.magentaBright('Congratulations!! you broke the record'));
      console.log(chalk.hex('#FFFB33')('please send us the screenshot to update the score board!'));
    }else{
      // console.log(chalk.hex('#D4FF33')('You did well!'));
      return score;
    }
}

for(i=0; i< highScores.length; i++){
  checkScores(highScores[i].name, highScores[i].score);
}
console.log(chalk.hex('#7C51E5')('check out the score board'));
for(i=0; i<highScores.length; i++){
  console.log(highScores[i].name, highScores[i].score);
}