'use strict';

//Guess the movie game source code

// Selecting all the DOM elements

//Players scores
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

//Movie images
const moviesEl = document.querySelector('.movies');

//Buttons
const btnNew = document.querySelector('.btn--new');
const btnA = document.querySelector('.btn--A');
const btnB = document.querySelector('.btn--B');
const btnC = document.querySelector('.btn--C');
const btnD = document.querySelector('.btn--D');

//Title
const title = document.querySelector('.movie');

//Win/Loss messages
const p1win = document.querySelector('.player1win');
const p2win = document.querySelector('.player2win');

const p1loss = document.querySelector('.player1loss');
const p2loss = document.querySelector('.player2loss');

//Declaring the necessaries variables
let scores, activePlayer, playing, movie, lastmovie;

// Setting the starting conditions
const init = function () {
  scores = [0, 0];
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;

  moviesEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

// Switch to the other player
const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const buttonsInfo = function () {
  // Set the movie random number

  // movie = Math.trunc(Math.random() * 6) + 1;

  // Check if the last movie is the same of the current movie
  movie = Math.trunc(Math.random() * 6) + 1;

  if (movie === lastmovie) {
    movie = Math.trunc(Math.random() * 6) + 1;
    if (movie === lastmovie) {
      movie = Math.trunc(Math.random() * 6) + 1;
      if (movie === lastmovie) {
        movie = Math.trunc(Math.random() * 6) + 1;
      }
    }
  }

  lastmovie = movie;

  // Show the images of each movie
  moviesEl.classList.remove('hidden');
  moviesEl.src = `movies-${movie}.png`;

  // Set all the information of all buttons base on the random movie number variable
  switch (movie) {
    case 1:
      btnA.innerHTML = 'The Godfather';
      btnB.innerHTML = 'Tomorrowland';
      btnC.innerHTML = 'Hellboy';
      btnD.innerHTML = 'Spiderman';
      break;
    case 2:
      btnA.innerHTML = 'Harry Potter';
      btnB.innerHTML = 'The Pianist';
      btnC.innerHTML = 'Sonic';
      btnD.innerHTML = 'Titanic';

      break;

    case 3:
      btnA.innerHTML = 'Matrix';
      btnB.innerHTML = 'Pulp Fiction';
      btnC.innerHTML = 'Forrest Gump';
      btnD.innerHTML = 'Jaws';

      break;

    case 4:
      btnA.innerHTML = 'Fight Club';
      btnB.innerHTML = 'The Shining';
      btnC.innerHTML = 'Alita';
      btnD.innerHTML = 'Blade Runner';

      break;

    case 5:
      btnA.innerHTML = 'Fast and Furious';
      btnB.innerHTML = 'Toy Story';
      btnC.innerHTML = 'Avatar';
      btnD.innerHTML = 'Star Wars';

      break;

    case 6:
      btnA.innerHTML = 'Inception';
      btnB.innerHTML = 'Memento';
      btnC.innerHTML = 'American Beauty';
      btnD.innerHTML = 'Titanic';

      break;

    default:
      break;
  }
};

// Add the score to the current player
function addScore() {
  scores[activePlayer] += 1;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
}

// Hide the option buttons
function hideButtons() {
  btnA.classList.add('hidden');
  btnB.classList.add('hidden');
  btnC.classList.add('hidden');
  btnD.classList.add('hidden');
}

function moviesRandom() {
  // If the score is reached then finish the game
  if (scores[activePlayer] >= 2) {
    btnNew.classList.remove('hidden');
    playing = false;
    moviesEl.style.opacity = '0';
    title.style.opacity = '0';
    hideButtons();

    if (activePlayer === 0) {
      p1win.style.opacity = '1';

      p2loss.style.opacity = '1';
    } else if (activePlayer === 1) {
      p2win.style.opacity = '1';
      p1loss.style.opacity = '1';
    }

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  }

  // Else keep displaying the options
  buttonsInfo();
}

hideButtons();

// Start a new game
btnNew.addEventListener('click', function () {
  btnNew.classList.add('hidden');
  init();
  title.style.opacity = '1';
  moviesEl.style.opacity = '1';

  // Hide all win and lose messages
  p1win.style.opacity = '0';
  p2win.style.opacity = '0';
  p1loss.style.opacity = '0';
  p2loss.style.opacity = '0';

  // Shows the buttons
  btnA.classList.remove('hidden');
  btnB.classList.remove('hidden');
  btnC.classList.remove('hidden');
  btnD.classList.remove('hidden');

  if (playing) {
    moviesRandom();

    // Check the answer of each button in order to add a point or to switch to the other player
    btnA.onclick = function () {
      if (btnA.innerHTML === 'Harry Potter' && playing) {
        moviesRandom();
        addScore();
        switchPlayer();
      } else if (btnA.innerHTML === 'Matrix' && playing) {
        moviesRandom();
        addScore();
        switchPlayer();
      } else if (btnA.innerHTML === 'Inception' && playing) {
        moviesRandom();
        addScore();
        switchPlayer();
      } else {
        switchPlayer();
        buttonsInfo();
      }
    };

    btnB.onclick = function () {
      if (btnB.innerHTML === 'Tomorrowland' && playing) {
        moviesRandom();
        addScore();
        switchPlayer();
      } else {
        switchPlayer();
        buttonsInfo();
      }
    };

    btnC.onclick = function () {
      if (btnC.innerHTML === 'Alita' && playing) {
        moviesRandom();
        addScore();
        switchPlayer();
      } else if (btnC.innerHTML === 'Avatar' && playing) {
        moviesRandom();
        addScore();
        switchPlayer();
      } else {
        switchPlayer();
        buttonsInfo();
      }
    };

    btnD.onclick = function () {
      if (playing) switchPlayer();
      buttonsInfo();
    };
  }
});
