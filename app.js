'use strict';

var answerReady = confirm('My name is Steven Johnson. \nDo you want to play a quick game to learn about me?');

if (answerReady) {
  console.log('User is ready');
} else {
  console.log('User not ready');
}

var userName = prompt('First, what is your name?');

console.log('userName = ' + userName);

if (userName === null) {
  console.log('User does not want to play game');
} else {
  var answer1 = prompt('Thanks ' + userName + '! First question is easy:\nTell me Y or N, Have I traveled to more than 5 countries?');
  console.log(userName + ' answered ' + answer1 + ' to question 1. The correct answer is Y');
  if (answer1 === 'Y' || answer1 === 'y') {
    alert('Great guess! \nI\'ve been to Canada, Japan, S.Korea, Germany, Switzerland, Italy, and France!');
  } else {
    alert('Oops! I guess I forgot to tell you that I\'ve been to Canada, Japan, S.Korea, Germany, Switzerland, Italy, and France!');
  }
  var answer2 = prompt('Next question:\nY of N, I grew up in Seattle, WA?');
  console.log(userName + ' answered ' + answer2 + ' to question 2. The correct answer is N');
  if (answer2 === 'Y' || answer2 === 'y') {
    alert('Close guess! I was brought up in the Snoqualmie Valley, which is about 1 hour from Seattle.');
  } else {
    alert('Correct! I grew up in the Snoqualmie Valley, which is about 1 hour from Seattle.');
  }
  var answer3 = prompt('Let\'s try another one!\nY or N, ####');
  console.log(userName + ' answered ' + answer3 + ' to question 3. The correct answer is ###');
  if (answer3 === 'Y' || answer3 === 'y') {
    alert('');
  } else {
    alert('');
  }
  var answer4 = prompt('Second to last question:\nY or N, ####');
  console.log(userName + ' answered ' + answer4 + ' to question 4. The correct answer is ###');
  if (answer3 === 'Y' || answer3 === 'y') {
    alert('');
  } else {
    alert('');
  }
  var answer5 = prompt('Final question:\nY or N, ####');
  console.log(userName + ' answered ' + answer5 + ' to question 5. The correct answer is ###')
}
