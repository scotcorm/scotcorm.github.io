@@ -0, 0 + 1, 59 @@
/**
 * app.js
 * main application script
 */
"use strict";

/**
 * use document.querySelector() to get references to the following
 * and store the results in variables: sc
 * - the <input id="name-input"> 
 * - the <p class="name-output"> element
 * - the <select id="animation-select"> element
 * - the <button id="animate-button"> element
 */

/**
 * add an event listener for the "input" event on the name-input.
 * whenever that event occurs, update the text content of the name-output
 * to be "Hello, " + the value of the input.
 * if the input value is zero-length, just clear the text content
 */



var nameInput = document.querySelector("name-input");
var outputPara = document.querySelector("p.name-output");
var greeting = "Hello, "
name - input.addEventListener("name-input", function () {
  document.getElementById(".name-output").textContent = greeting.concat(", name-input")
});

var animateElem = document.querySelector(".animation-select");
var animateButton = document.querySelector(".animate-button");
animateButton.addEventListener("click", function () {
  //add the `bounce` style class to trigger a bounce animation
  nameOutput.classList.add("bounce");

  //when the animation ends, remove that `bounce` style class
  animateElem.addEventListener("animationend", function () {
    animateElem.classList.remove("bounce");
  }, { once: true });
});






/**
 * add an event listener for the "click" event on the animate button.
 * whenever that occurs, get the selected animation name from the 
 * animation-select and add that animation name to the class list
 * on the name-ouput element.
 * to enable animating the element more than once, add a one-time
 * event listener for the "animationend" event on the name-ouput
 * element, and remove the animation name from the class list.
 * that way, when you add the animation name to the class list again, 
 * the animation will occur.
 */
 