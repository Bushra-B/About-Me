'use strict';
var userName = prompt('Hello, Welcome To My Website!\nMy Name Is Bushra.\n\
You Can Get To Know Me Better By Playing A Guess Game And Reading About Me In This Website.\nSo What is your name?');
alert('Welcome '+userName+'!\nSo Let Us Start The Guess Game :)\nI Will Ask You Some Questions About Me '+userName+', \
And You Make a Yes (Y) or No (N) Guess.\nHave Fun!');
var q1, q2, q3, q4, q5 = '';
//var responseValidation = [q1, q2, q3, q4, q5];
//responseValidation.toLowerCase();
q1 = prompt('Is Coffe My Favourite Drink?').toLowerCase();
//console.log('q1 user response is: ' + q1);
switch(q1) {
case 'yes':
  alert('Correct!\nI love coffe! it is not just a favourite drink, it is one my favourite things in life!');
  break;
case 'y':
  alert('Correct!\nI love coffe! it is not just a favourite drink, it is one my favourite things in life!');
  break;
case 'no':
  alert('Nope! Actually coffe is one my favourite things in life!\nI hope you love coffe too, '+userName+'.');
  break;
case 'n':
  alert('Nope! Actually coffe is one my favourite things in life!\nI hope you love coffe too, '+userName+'.');
  break;
}
q2 = prompt('Do I love Reading?').toLowerCase();
//console.log('q2 user response is: ' + q2);
switch(q2) {
case 'yes':
  alert('Right Guess!\nI love reading so much\nReading novels and literature is a hobby of mine.\nAnd I like reading\
in general, whether it is articles, blogs or study materials.');
  break;
case 'y':
  alert('Right Guess!\nI love reading so much\nReading novels and literature is a hobby of mine.\nAnd I like reading\
in general, whether it is articles, blogs or study materials.');
  break;
case 'no':
  alert('Not a right guess, '+userName+'! Reading is actually my favourite hobby!\nI like reading novels and literature,\
articles, blogs and even study materials.');
  break;
case 'n':
  alert('Not a right guess, '+userName+'! Reading is actually my favourite hobby!\nI like reading novels and literature,\
articles, blogs and even study materials.');
  break;
}
q3 = prompt('Is Blue My Favourite Color?').toLowerCase();
//console.log('q3 user response is: ' + q3);
switch(q3) {
case 'yes':
  alert('Hahaha Blue is my least favourite color.\nI know it is a VERY popular color, but I never really\
  liked it much.');
  break;
case 'y':
  alert('Hahaha Blue is my least favourite color.\nI know it is a VERY popular color, but I never really\
    liked it much.');
  break;
case 'no':
  alert('Right, I am not a fan of this color and I do not like it that much.\n\
My BEST color of all is Grean!\nI mean, how can one not LOVE Grean!');
  break;
case 'n':
  alert('Right, I am not a fan of this color and I do not like it that much.\n\
My BEST color of all is Grean!\nI mean, how can one not LOVE Grean!');
  break;
}
q4 = prompt('Do You Think I Speak A Foreign Language - Other Than English - ?').toLowerCase();
//console.log('q4 user response is: ' + q4);
switch(q4) {
case 'yes':
  // eslint-disable-next-line quotes
  alert("Corretto! Io parlo un po l'italiano, e mi piacciono le lingue in generale - I speak a little Italian,\
 and I like languages in general.");
  break;
case 'y':
  // eslint-disable-next-line quotes
  alert("Corretto! Io parlo un po l'italiano, e mi piacciono le lingue in generale - I speak a little Italian,\
  and I like languages in general.");
  break;
case 'no':
  // eslint-disable-next-line quotes
  alert("In realtà, parlo un po l'italiano, e mi piacciono le lingue in generale\
   - Actually, I speak a little Italian, and I like languages in general.");
  break;
case 'n':
  // eslint-disable-next-line quotes
  alert("In realtà, parlo un po l'italiano, e mi piacciono le lingue in generale\
 - Actually, I speak a little Italian, and I like languages in general.");
  break;
}
q5 = prompt('Am I Good At Coding?').toLowerCase();
//console.log('q5 user response is: ' + q5);
switch(q5) {
case 'yes':
  alert('Thank you for your good opinion in me, '+userName+'! I am still a beginner learning to code\
and I really hope I get to be very good at it.');
  break;
case 'y':
  alert('Thank you for your good opinion in me, '+userName+'! I am still a beginner learning to code\
and I really hope I get to be very good at it.');
  break;
case 'no':
  alert('Well, I am still a beginner so I can not claim to be so good right now,\
but I am working on becoming skilled at it.');
  break;
case 'n':
  alert('Well, I am still a beginner so I can not claim to be so good right now,\
but I am working on becoming skilled at it.');
  break;
}
alert('Thank You For Playing This Game '+userName+', I Hope You Enjoyed It And Knowed A Little Bit About Me!.')
