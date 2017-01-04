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
  console.log(userName + ' answered ' + answer1 + ' to question 1.');
  document.write('<p>I\'ve been to Canada, Japan, S.Korea, Germany, Switzerland, Italy, and France!</p>');
  if (answer1 === 'Y' || answer1 === 'y') {
    alert('Great guess! \nI\'ve been to Canada, Japan, S.Korea, Germany, Switzerland, Italy, and France!');
    console.log(answer1 + ' is correct');
  } else {
    alert('Oops! I guess I forgot to tell you that I\'ve been to Canada, Japan, S.Korea, Germany, Switzerland, Italy, and France!');
    console.log(answer1 + ' is wrong');
  }
  var answer2 = prompt('Next question:\nY of N, did I grew up in Seattle, WA?');
  console.log(userName + ' answered ' + answer2 + ' to question 2.');
  document.write('<p>I was brought up in the Snoqualmie Valley, which is about 1 hour from Seattle.</p>');
  if (answer2 === 'Y' || answer2 === 'y') {
    alert('Close guess! I was brought up in the Snoqualmie Valley, which is about 1 hour from Seattle.');
    console.log(answer2 + ' is wrong');
  } else {
    alert('Correct! I grew up in the Snoqualmie Valley, which is about 1 hour from Seattle.');
    console.log(answer2 + ' is correct');
  }
  var answer3 = prompt('Let\'s try another one!\nY or N, am a student at CodeFellows?');
  console.log(userName + ' answered ' + answer3 + ' to question 3.');
  document.write('<p>I am currently in the 201 course at the CodeFellows Seattle Campus.</p>');
  if (answer3 === 'Y' || answer3 === 'y') {
    alert('Nice one! I am currently in the 201 course at the CodeFellows Seattle Campus.');
    console.log(answer3 + ' is correct.');
  } else {
    alert('Nice try. I am currently in the 201 course at the CodeFellows Seattle Campus.');
    console.log(answer3 + ' is wrong.');
  }
  var answer4 = prompt('Fourth question:\nY or N, have I gone skiing this winter?');
  console.log(userName + ' answered ' + answer4 + ' to question 4.');
  document.write('<p>I went skiing the last week of winter, and I hope to go again soon!</p>');
  if (answer3 === 'Y' || answer3 === 'y') {
    alert('Correct! I love skiing and hope to go again soon!');
    console.log(answer4 + ' is correct.');
  } else {
    alert('Wrong, I went during the last week of December.');
    console.log(answer4 + ' is wrong.');
  }
  var answer5 = prompt('Final question:\nY or N, is a 100 dollars today worth more than 100 dollars tomorrow?');
  console.log(userName + ' answered ' + answer5 + ' to question 5.');
  if (answer5 === 'Y' || answer5 === 'y') {
    alert('Right! I learned about the time-value of money when I studied Finance at Pacific Lutheran University in Tacoma, WA.');
    console.log(answer5 + 'is correct!');
  } else {
    alert('I don\t believe so. If you need convincing, I\'ll borrow money from you anytime! Why else would banks charge interest?');
    console.log(answer5 + 'is wrong');
  }
  alert('Thank you for playing my game! Hope you enjoy your stay!');
}
