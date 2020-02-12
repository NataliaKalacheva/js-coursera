"use strict";

// Код валидации формы

function validateForm(obj) {
  //variables
  var form = document.getElementById(obj.formId);
  var inputs = Array.from(document.querySelectorAll(`#${obj.formId} input`));
  // var validate = false;

  // events
  inputs.forEach(function(input) {
    input.addEventListener("blur", function(e) {
      if (!valideElement(e.target)) {
        e.target.classList.add(obj.inputErrorClass);
      } else {
        e.target.classList.remove(obj.inputErrorClass);
      }
    });
  });

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("Отпрака формы");
  });

  //handlers
  function valideElement(el) {
    var validateEl = false;

    if (el.dataset.hasOwnProperty("required")) {
      // if (el.value.length > 0) validateEl = true;
      // if (el.value.length <= 0) validateEl = false;
      validateEl = validateRequired(el);
    } else {
      validateEl = true;
    }
    console.log(validateEl);
    if (el.dataset.hasOwnProperty("validator")) {
      if (el.dataset.validator === "letters") validateEl = validateLetters(el);
      console.log(validateEl);
      if (el.dataset.validator === "number") validateEl = validateNumber(el);
    }

    return validateEl;
  }

  function validateRequired(el) {
    if (el.value.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  function validateLetters(el) {
    return /^[a-zа-я]+$/gi.test(el.value);
  }

  function validateNumber(el) {
    var min = el.dataset.validatorMin;
    var max = el.dataset.validatorMax;

    if (min === "undefined" && max === "undefined")
      return /^[0-100]+$/gi.test(el.value);

    if (el.value > max || el.value < min) {
      return false;
    } else {
      return true;
    }
  }
}
