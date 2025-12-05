// функции по скрытию/открытию вопросов

const optionalQuestions = document.querySelectorAll('.survey-question:not(.mandatory)');

function hideOptionalQuestions() {
  optionalQuestions.forEach((q) => q.classList.remove('visible'));
}

function showOptionalQuestions() {
  optionalQuestions.forEach((q) => q.classList.add('visible'));
}

function updateQuestionsVisibility() {
  const showQuestions = document.querySelector('input[name="confirmation"]:checked');

  if (showQuestions.value) {
    console.log('show');
    showOptionalQuestions();
  } else {
    console.log('hide');
    hideOptionalQuestions();
  }
}

// обработчики событий запускают функции

document.querySelectorAll('input[name="confirmation"]').forEach((radio) => {
  radio.addEventListener('change', updateQuestionsVisibility);
});
