// Copyright (c) 2024 hames.al-sharoa All rights reserved
//
// Created by: hames.al-sharoa
// Created on: Apr 2024
// This file contains the JS functions for index.html

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  alwaysOnButtonChecked = document.getElementById('on-check').checked

  if (alwaysOnButtonChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
      "<p>random number: 7 </p>"
  } else {
    document.getElementById("radio-button-value").innerHTML =
      "<p>random number : -6 </p>"
  }
}
