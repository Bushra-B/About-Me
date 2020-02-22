'use strict';
var userName = prompt('Hello, Welcome To My Website!\nMy Name Is Bushra.\n\
You Can Get To Know Me Better By Playing A Guess Game And Reading About Me In This Website.\nSo What is your name?');
alert('Welcome '+userName+'!\nSo Let Us Start The Guess Game :)\nI Will Ask You 7 Questions About Me '+userName+', \
For The First 5 Questions Make a Yes (Y) or No (N) Answer.\nHave Fun!');
var q1, q2, q3, q4, q5, q6, q7 = '';
var score = 0;
var i;
function cofeeLover() {q1 = prompt('Q.1: Is Coffe My Favourite Drink?').toLowerCase();
  switch(q1) {
  case 'yes':
  case 'y':
    alert('Correct!\nI love coffe! it is not just a favourite drink, it is one my favourite things in life!');
    score ++;
    break;
  case 'no':
  case 'n':
    alert('Nope! Actually coffe is one my favourite things in life!\nI hope you love coffe too, '+userName+'.');
    break;
  }
}
cofeeLover();
function readingLover() {q2 = prompt('Q.2: Do I love Reading?').toLowerCase();
  switch(q2) {
  case 'yes':
  case 'y':
    alert('Right Guess!\nI love reading so much\nReading novels and literature is a hobby of mine.\nAnd I like reading\
in general, whether it is articles, blogs or study materials.');
    score ++;
    break;
  case 'no':
  case 'n':
    alert('Not a right guess, '+userName+'! Reading is actually my favourite hobby!\nI like reading novels and literature,\
articles, blogs and even study materials.');
    break;
  }
}
readingLover();
function colorFav() {q3 = prompt('Q.3: Is Blue My Favourite Color?').toLowerCase();
  switch(q3) {
  case 'yes':
  case 'y':
    alert('Hahaha Blue is my least favourite color.\nI know it is a VERY popular color, but I never really\
  liked it much.');
    break;
  case 'no':
  case 'n':
    alert('Right, I am not a fan of this color and I do not like it that much.\n\
My BEST color of all is Grean!\nI mean, how can one not LOVE Grean!');
    score ++;
    break;
  } 
}
colorFav();
function langSpeaker() {q4 = prompt('Q.4: Do You Think I Speak A Foreign Language - Other Than English - ?').toLowerCase();
  switch(q4) {
  case 'yes':
  case 'y':
    alert('Corretto! Io parlo un po l\'italiano, e mi piacciono le lingue in generale - I speak a little Italian,\
 and I like languages in general.');
    score ++;
    break;
  case 'no':
  case 'n':
    alert('In realtà, parlo un po l\'italiano, e mi piacciono le lingue in generale\
   - Actually, I speak a little Italian, and I like languages in general.');
    break;
  }
}
langSpeaker();
function coderSkills() {q5 = prompt('Q.5: Am I Good At Coding?').toLowerCase();
  switch(q5) {
  case 'yes':
  case 'y':
    alert('Thank you for your good opinion in me, '+userName+'! I am still a beginner learning to code\
and I really hope I get to be very good at it.');
    score ++;
    break;
  case 'no':
  case 'n':
    alert('Well, I am still a beginner so I can not claim to be so good right now,\
but I am working on becoming skilled at it.');
    break;
  }
}
coderSkills();
function sistersNumber() {var correctAnswer = false;
  for (i=1; i < 5; i++) {
    q6 = Number(prompt('Q.6: Guess how many sisters do I have?\
    \nNote: I will give you 4 attempts to answer this question.\nThis is attempt\
   number '+i));
    if (q6 === 0) {
      alert('Right Guess! I have no sisters.\nBut I do have two amazing brothers!');
      score ++;
      correctAnswer = true;
      break;
    }
    else if (q6 > 0 && q6 <= 3) {
      alert('Not the correct answer, but you are close!');
    }
    else if (q6 >= 4 && q6 <= 6) {
      alert('Not the correct answer, you\'r a little too far');
    }
    else if (q6 >= 7) {
      alert('Not the correct answer, you\'r too far!');
    }
  }
  if (correctAnswer === false) {
    alert('Sorry you have used all your attempts.\nThe correct answer is zero!\nI don\'t have any sisters :p');
  }
}
sistersNumber();
function mounMy() {var myMonth = ['mar', 'Mar', 'march', 'March', '3'];
  var correctAnswer = false;
  forLoop:
  for (i=1; i < 7; i++) {
    q7 = prompt('Q.7: Which month was I born in?\nNote: You have 6 attempts to answer this question \nThis is attempt\
 number '+i);
    switch(q7){
    case myMonth[0]:
    case myMonth[1]:
    case myMonth[2]:
    case myMonth[3]:
    case myMonth[4]:
      alert('Correct! I was born in March 29th');
      score ++;
      correctAnswer = true;
      break forLoop;
    default:
      alert('Not the right answer, try again!');
    }
  }
  if (correctAnswer === false) {
    alert('Sorry you have used all your attempts.\nThe correct\ answer is March!\nI was born in March 29th');}  
}
mounMy();
alert('Thank You For Playing This Game '+userName+', your final score is: '+score+' / 7\
    \nI Hope You Enjoyed It And Knowed A Little Bit About Me!.');
