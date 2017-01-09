'use strict';

var answerReady = confirm('My name is Steven Johnson. \nDo you want to play a quick game to learn about me?');
var counter = 0;

if (answerReady) {
  console.log('User is ready');

  //user name prompt
  var userName = prompt('First, what is your name?');
  console.log('userName = ' + userName);

  var questions = ['Thanks ' + userName + '! First question is easy:\nTell me Y or N, have I traveled to more than 5 countries?',
    'Next question:\nY of N, did I grow up in Seattle, WA?',
    'Let\'s try another one!\nY or N, am I a student at CodeFellows?',
    'Fourth question:\nY or N, have I gone skiing this winter?',
    'Fifth question:\nY or N, is a 100 dollars today worth more than 100 dollars tomorrow?'];

  document.getElementById('game-readout').innerHTML = '<p id="gameResults">Game Results for ' + userName + '</p>';

//Question1-5 for-loop call
  for (var qCount = 0; qCount < questions.length; qCount++) {
    console.log('for loop fire - qCount =' + qCount);

    questFunc(qCount);
  }

//Question6 call
  quest6func();

//Question7 call
  quest7func();

  alert('Thank you for playing my game, ' + userName + '! You got ' + counter + ' out of 7 correct!');
  console.log(userName + ' got ' + counter + ' out of 7 correct');

} else { //used to cancel popups
  console.log('User not ready');
}

//Questions1-5
function questFunc(index) {
  var userAnswer = prompt(questions[index]).toLowerCase();
  var answers = [['y', 'yes'],['n', 'no'],['y', 'yes'],['y', 'yes'],['y', 'yes']];//if all responses are reorder (correct, wrong) -> we only need one [y, yes]
  var responses = [['Great guess! \nI\'ve been to Canada, Japan, S.Korea, Germany, Switzerland, Italy, and France!',
    'Oops! I guess I forgot to tell you that I\'ve been to Canada, Japan, S.Korea, Germany, Switzerland, Italy, and France!'],['Correct! I grew up in the Snoqualmie Valley, which is about 1 hour from Seattle.', 'Close guess! I was brought up in the Snoqualmie Valley, which is about 1 hour from Seattle.'],['Nice one! I am currently in the 201 course at the CodeFellows Seattle Campus.', 'Nice try. I am currently in the 201 course at the CodeFellows Seattle Campus.'],['Correct! I love skiing and hope to go again soon!', 'Wrong, I went during the last week of December.'],['Right! I learned about the time-value of money when I studied Finance at Pacific Lutheran University in Tacoma, WA.', 'I don\'t believe so. If you need convincing, I\'ll borrow money from you anytime! Why else would banks charge interest?']];
  console.log(userName + ' answered ' + userAnswer + ' to question' + (index + 1) + '.');
  document.getElementById('game-readout').innerHTML += '<p class="gameQuestion">Q' + (index + 1) + '. ' + questions[index] + '</p>';

  if (answers[index].includes(userAnswer)) {
    alert(responses[index][0]);
    console.log( userAnswer + ' is correct');
    document.getElementById('game-readout').innerHTML += '<p class="gameAnswer">A' + (index + 1) + ': (' + userAnswer + ')' + responses[index][0] + '</p>';
    counter++;
  } else {
    alert(responses[index][1]);
    console.log(userAnswer + ' is wrong');
    document.getElementById('game-readout').innerHTML += '<p class="gameAnswer">A' + (index + 1) + ': (' + userAnswer + ')' + responses[index][1] + '</p>';
  }
}

//Question6
function quest6func() {
  for (var index = 0; index < 4; index++) {
    console.log('start for loop');
    var tryCount = 4 - (index + 1);
    var answer6try = parseInt(prompt('Question 6: How old do you think I am?'));
    var answer6 = 30; //correct answer guesses will be compared to
    console.log(userName + ' thinks I\'m', answer6try + ' years old');

    if (answer6try === answer6) {
      alert('Right answer! Great guess! I am 30 years old!');
      counter++;
      break; //Need code to quit loop after correct answer
      console.log(index);
    } else if (answer6try > answer6) {
      alert('Too high!\nYou have ' + tryCount + ' tries left.');
      console.log('too high. i=' + index);//this helped me to understand loops
    } else if (answer6try < answer6) {
      alert('Too low!\nYou have ' + tryCount + ' tries left.');
      console.log('too low. i=' + index);
    } else {
      alert('Try typing a number, do NOT write out the number.\nYou have ' + tryCount + ' tries left.');
      console.log('wrong type entered. i =' + index);
    }
  }
}

//Question7
function quest7func() {
  var answer7 = ['canada', 'japan', 'south korea', 'germany', 'switzerland', 'italy', 'france'];

  for (var index = 0; index < 6; index++) {
    console.log('6try for-loop fires');
    var answer7try = prompt('Question 7:\nFrom Q1, name a country that I\'ve traveled to').toLowerCase();
    console.log(userName + ' thinks I\'ve been to ' + answer7try);

    if (answer7.includes(answer7try) === true) {
      console.log(answer7try + ' matches ' + answer7);
      alert('Good Memory! Correct answers were: ' + answer7);
      counter++;
      break;
    } else {
      console.log(answer7try + ' is wrong.');
      alert('Guess again!');
    }
  }
}
