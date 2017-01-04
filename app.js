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
  var answer1 = prompt('Thanks ' + userName + '! First question is easy:\nTell me Y or N, have I traveled to more than 5 countries?');
  console.log(userName + ' answered ' + answer1 + ' to question 1.');
  document.write('<p id="gameResults">Game Results</p>')
  document.write('<p>Q1. Have I traveled to more than 5 countries?</p>');
  if (answer1 === 'Y' || answer1 === 'y') {
    alert('Great guess! \nI\'ve been to Canada, Japan, S.Korea, Germany, Switzerland, Italy, and France!');
    console.log(answer1 + ' is correct');
    document.write('<p>A1: (Y) Great guess! \nI\'ve been to Canada, Japan, S.Korea, Germany, Switzerland, Italy, and France! </p>');
  } else {
    alert('Oops! I guess I forgot to tell you that I\'ve been to Canada, Japan, S.Korea, Germany, Switzerland, Italy, and France!');
    console.log(answer1 + ' is wrong');
    document.write('<p>A1: (N) Oops! I guess I forgot to tell you that I\'ve been to Canada, Japan, S.Korea, Germany, Switzerland, Italy, and France!</p>');
  }
  var answer2 = prompt('Next question:\nY of N, did I grew up in Seattle, WA?');
  console.log(userName + ' answered ' + answer2 + ' to question 2.');
  document.write('<p>Q2. Y of N, did I grew up in Seattle, WA?</p>');
  if (answer2 === 'Y' || answer2 === 'y') {
    alert('Close guess! I was brought up in the Snoqualmie Valley, which is about 1 hour from Seattle.');
    console.log(answer2 + ' is wrong');
    document.write('<p>A2: (Y) Close guess! I was brought up in the Snoqualmie Valley, which is about 1 hour from Seattle.</p>');
  } else {
    alert('Correct! I grew up in the Snoqualmie Valley, which is about 1 hour from Seattle.');
    console.log(answer2 + ' is correct');
    document.write('<p>A2: (N) Correct! I grew up in the Snoqualmie Valley, which is about 1 hour from Seattle.</p>');
  }
  var answer3 = prompt('Let\'s try another one!\nY or N, am a student at CodeFellows?');
  console.log(userName + ' answered ' + answer3 + ' to question 3.');
  document.write('<p>Q3. Y or N, am a student at CodeFellows?</p>');
  if (answer3 === 'Y' || answer3 === 'y') {
    alert('Nice one! I am currently in the 201 course at the CodeFellows Seattle Campus.');
    console.log(answer3 + ' is correct.');
    document.write('<p>A3: (Y) Nice one! I am currently in the 201 course at the CodeFellows Seattle Campus.</p>');
  } else {
    alert('Nice try. I am currently in the 201 course at the CodeFellows Seattle Campus.');
    console.log(answer3 + ' is wrong.');
    document.write('<p>A3: (N) Nice try. I am currently in the 201 course at the CodeFellows Seattle Campus.</p>');
  }
  var answer4 = prompt('Fourth question:\nY or N, have I gone skiing this winter?');
  console.log(userName + ' answered ' + answer4 + ' to question 4.');
  document.write('<p>Q4. Y or N, have I gone skiing this winter?</p>');
  if (answer4 === 'Y' || answer4 === 'y') {
    alert('Correct! I love skiing and hope to go again soon!');
    console.log(answer4 + ' is correct.');
    document.write('<p>A4: (Y) Correct! I love skiing and hope to go again soon!</p>');
  } else {
    alert('Wrong, I went during the last week of December.');
    console.log(answer4 + ' is wrong.');
    document.write('<p>A4: (N) Wrong, I went during the last week of December.</p>');
  }
  var answer5 = prompt('Final question:\nY or N, is a 100 dollars today worth more than 100 dollars tomorrow?');
  console.log(userName + ' answered ' + answer5 + ' to question 5.');
  document.write('<p>Q5. Y or N, is a 100 dollars today worth more than 100 dollars tomorrow?</p>');
  if (answer5 === 'Y' || answer5 === 'y') {
    alert('Right! I learned about the time-value of money when I studied Finance at Pacific Lutheran University in Tacoma, WA.');
    console.log(answer5 + 'is correct!');
    document.write('<p>A5: (Y) Right! I learned about the time-value of money when I studied Finance at Pacific Lutheran University in Tacoma, WA.</p>');
  } else {
    alert('I don\'t believe so. If you need convincing, I\'ll borrow money from you anytime! Why else would banks charge interest?');
    console.log(answer5 + 'is wrong');
    document.write('<p>A5: (N) I don\'t believe so. If you need convincing, I\'ll borrow money from you anytime! Why else would banks charge interest?</p>');
  }
  alert('Thank you for playing my game! Hope you enjoy your stay!');
}
