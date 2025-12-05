// функции по скрытию/открытию вопросов

function hideQuestions(questions) {
  questions.forEach((q) => q.classList.remove('visible'));
}

function showQuestions(questions) {
  questions.forEach((q) => q.classList.add('visible'));
}

function updateQuestionsVisibility() {
  const showQuestionsAnswer = document.querySelector('input[name="confirmation"]:checked');
  const optionalQuestions = document.querySelectorAll('.survey-question:not(.mandatory):not(.message-survey-sent)');

  if (showQuestionsAnswer.value) {
    showQuestions(optionalQuestions);
  } else {
    hideQuestions(optionalQuestions);
  }
}

// обработчики событий запускают функции

document.querySelectorAll('input[name="confirmation"]').forEach((radio) => {
  radio.addEventListener('change', updateQuestionsVisibility);
});

// функция по отправке результатов опроса в гуглоформу

function showMessageSurveySent() {
  const allQuestions = document.querySelectorAll('.visible');
  console.log(allQuestions);
  hideQuestions(allQuestions);

  document.querySelector('.message-survey-sent').classList.add('visible');

  const showQuestionsAnswer = document.querySelector('input[name="confirmation"]:checked');
  if (showQuestionsAnswer.value) {
    document.querySelector('.message-survey-sent.arrival-confirmed').classList.add('visible');
  }
}

function sendSurveyAnswerToGoogleForm() {
  // fetch('https://example', {
  //   method: 'POST',
  //   body: JSON.stringify('{}'),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  showMessageSurveySent();
}

// обработчик события кнопки вызывает отправку результата

document.querySelector('a[class="survey-submit-button"]').addEventListener('click', sendSurveyAnswerToGoogleForm);
