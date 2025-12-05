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

  if (showQuestionsAnswer.value === "Приду") {
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
  hideQuestions(allQuestions);

  document.querySelector('.message-survey-sent').classList.add('visible');

  const showQuestionsAnswer = document.querySelector('input[name="confirmation"]:checked');
  if (showQuestionsAnswer.value) {
    document.querySelector('.message-survey-sent.arrival-confirmed').classList.add('visible');
  }
}

const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSc0L0_y9HeFpoQff88iIqBtdIsNQ4vyGFnWlWMkFaoEYeI-vw/formResponse';

const formFields = {
  fio: 'entry.2092238618',
  confirmation: 'entry.683932808_sentinel',
  drinks: 'entry.1753222212_sentinel',
  dishes: 'entry.588393791_sentinel',
  allergies: 'entry.2109138769',
};

function sendSurveyAnswerToGoogleForm() {
  const formData = new FormData();

  const fio = document.querySelector('input[name="fio"]').value;
  const confirmation = document.querySelector('input[name="confirmation"]:checked').value;
  const drinks = [...document.querySelectorAll('input[name="drinks"]:checked')].map(el => el.value);
  const dishes = document.querySelector('input[name="dishes"]:checked').value;
  const allergies = document.querySelector('input[name="allergies"]').value;

  formData.append(formFields.fio, fio);
  formData.append(formFields.confirmation, confirmation);
  drinks.forEach((drink) => {formData.append(formFields.drinks, drink);});
  formData.append(formFields.dishes, dishes);
  formData.append(formFields.allergies, allergies);

  //todo фронтент не может проверить, отправилась ли успешно форма, только бекенд

  fetch(formUrl, {
    method: 'POST',
    mode: 'no-cors',
    body: formData,
  });

  showMessageSurveySent();
}

// обработчик события кнопки вызывает отправку результата

document.querySelector('a[class="survey-submit-button"]').addEventListener('click', sendSurveyAnswerToGoogleForm);
