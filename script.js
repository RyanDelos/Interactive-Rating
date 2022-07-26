'use strict';

let ratings = document.querySelectorAll('.circle'); // all divs with number
let button = document.querySelector('.button'); // submit button
let mainCard = document.querySelector('.main-box'); // main card
let numberSelected = document.querySelector('.num-selected');
let thankyouCard = document.querySelector('.thank-you'); // thank you card

// loop through all the number of divs
for (let i = 0; i < ratings.length; i++) {
  // listen for user click on number
  ratings[i].addEventListener('click', function () {
    // store rating selected by user in rating
    let rating = ratings[i].innerHTML;

    // looping through the numbers to check for a previously selected rating and removing if such. //
    // Necessary in order to have only one rating selected at a time //
    for (let i = 0; i < ratings.length; i++) {
      ratings[i].classList.contains('selected');
      ratings[i].classList.remove('selected');
    }

    // add the selected class which highlights the selected rating //
    ratings[i].classList.add('selected');

    // listening for a click on the btn in order to hide the current div and display the Thank You div with the chosen rating in the span //
    button.addEventListener('click', function (e) {
      e.preventDefault();
      mainCard.style.display = 'none';
      thankyouCard.style.display = 'block';
      numberSelected.innerHTML = rating;
    });

    thankyouCard.addEventListener('click', function () {
      mainCard.style.display = 'block';
      thankyouCard.style.display = 'none';
    });
  });
}
