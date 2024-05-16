// Copyright (c) 2024 hames.al-sharoa All rights reserved
//
// Created by: hames.al-sharoa
// Created on: Apr 2024
// This file contains the JS functions for index.html

/**
 * This function displays the slider value.
 */

function generateRandomNumber() {
  // Get the value of the selected radio button
  const radioButton = document.querySelector('input[name="numberType"]:checked');

  // Check if a radio button is selected
  if (!radioButton) {
    alert('Please select a number type (Positive/Negative).');
    return;
  }

  // Get the value of the selected radio button (Positive/Negative)
  const numberType = radioButton.value;
  // Generate a random number
  let randomNumber;
  if (numberType === 'positive') {

    // Generate a random positive number
    randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
  } else if (numberType === 'negative') {
    // Generate a random negative number
    randomNumber = -1 * (Math.floor(Math.random() * 100) + 1); // Random number between -1 and -100
  }

  // Display the generated random number
  document.getElementById('output').innerHTML = `${randomNumber >= 0 ? '+' : ''}${randomNumber}`;
}