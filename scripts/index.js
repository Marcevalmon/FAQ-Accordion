'use strict';

let selectedElement;

function toggleFAQ(pElement) {

  if (selectedElement) {
    if (selectedElement.id !== pElement.id) {
      selectedElement.classList.remove('active');
    }
  }

  selectedElement = pElement;

  pElement.classList.toggle('active');
}