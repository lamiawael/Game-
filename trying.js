window.addEventListener('load', init);
// To change level
const currentLevel = 7;
let time = currentLevel;
let score = 0;
let isPlaying;
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words =['doll' , 'heavenly', 'head' , 'steam',' gorgeous', 'ticket', 'doubt', 'depressed', 'chilly', 'actor', 'multiply', 'pump', 'cultured', 'jelly','combative', 'skillful',
'sin,spray', 'love', 'materialistic', 'extra', 'tranqui', 'adaptable', 'chalk', 'view', 'funny', 'camp', 'company', 'pack', 'suck', 'scared',
'profit,activity',  'ambiguous',  'join' , 'anger', 'reply' ,'adventurous' , 'marble' , 'grotesque' ,'empty' ,'tense', 'ants', 'poke',
'coal', 'chicken', 'pedal', 'horn', 'dysfunctional' ,'meek',  'fall', 'fuzzy', 'stamp', 'point', 'outstanding', 'rebel', 'soft', 'little',
'godly', 'curvy',  'drown', 'frantic', 'industry', 'hang', 'steep', 'oil', 'awesome', 'geese', 'scold', 'boiling', 'chess' , 'macho','range',
'race', 'excite',  'girls',  'wonderful','hate', 'competition' ,'clammy' ,'acoustics' ,'steadfast' ,'argue' ,'shame' ,'pass' ,'van' ,
 'spotless' ,'straw' , 'bewildered' , 'destroy' , 'psychotic' , 'card ',' well' ,  'alcoholic' ,'spiffy' , 'pizzas' , 'uptight' , 'like' ,'loss' ,'warlike'];

function init() {
  seconds.innerHTML = currentLevel;
  showWord(words);
  wordInput.addEventListener('input', startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}
function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}
function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!';
    score = -1;
  }
}
