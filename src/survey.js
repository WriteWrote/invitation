// функции по скрытию/открытию вопросов

const CONFIRMED = 'Приду';

function hideQuestions(questions) {
  questions.forEach((q) => q.classList.remove('visible'));
}

function showQuestions(questions) {
  questions.forEach((q) => q.classList.add('visible'));
}

function updateQuestionsVisibility() {
  const showQuestionsAnswer = document.querySelector('input[name="confirmation"]:checked');
  const optionalQuestions = document.querySelectorAll('.survey-question:not(.mandatory):not(.message-survey-sent):not(.companion-name)');

  if (showQuestionsAnswer.value === CONFIRMED) {
    showQuestions(optionalQuestions);
  } else {
    hideQuestions(optionalQuestions);
  }
}

function showCompanionNameInput() {
  const companionToggleChecked = document.querySelector('input[name="companion"]');
  if (companionToggleChecked.checked) {
    document.querySelector('.companion-name').classList.add('visible');
  } else {
    document.querySelector('.companion-name').classList.remove('visible');
  }
}

// обработчики событий запускают функции

document.querySelectorAll('input[name="confirmation"]').forEach((radio) => {
  radio.addEventListener('change', updateQuestionsVisibility);
});

document.querySelector('input[name="companion"]').addEventListener('change', showCompanionNameInput);

// функция по отправке результатов опроса в гуглоформу

function showMessageSurveySent() {
  const allQuestions = document.querySelectorAll('.visible');
  hideQuestions(allQuestions);

  document.querySelector('.message-survey-sent').classList.add('visible');

  const showQuestionsAnswer = document.querySelector('input[name="confirmation"]:checked');
  if (showQuestionsAnswer.value === CONFIRMED) {
    document.querySelector('.message-survey-sent.arrival-confirmed').classList.add('visible');
  }
}

const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSc0L0_y9HeFpoQff88iIqBtdIsNQ4vyGFnWlWMkFaoEYeI-vw/formResponse';

const formFields = {
  fio: 'entry.2092238618',
  companion: 'entry.1273548465',
  confirmation: 'entry.683932808',
  drinks: 'entry.1753222212',
  dishes: 'entry.588393791',
  allergies: 'entry.2109138769',
};

function sendSurveyAnswerToGoogleForm() {
  //todo фронтент не может проверить, отправилась ли успешно форма, только бекенд

  // Если есть выбранный radio — возьми его value.
  // Если нет — используй пустую строку, чтобы Google Form не упала

  const fio = document.querySelector('input[name="fio"]').value;
  const companion = document.querySelector('input[name="companion-name"]').value;
  const confirmation = document.querySelector('input[name="confirmation"]:checked')?.value || '';
  const drinks = [...document.querySelectorAll('input[name="drinks"]:checked')].map((el) => el?.value || '');
  const dishes = document.querySelector('input[name="dishes"]:checked')?.value || '';
  const allergies = document.querySelector('input[name="allergies"]').value;

  const formData = new FormData();

  formData.append(formFields.fio, fio);
  formData.append(formFields.companion, companion);
  formData.append(formFields.confirmation, confirmation);
  drinks.forEach((drink) => formData.append(formFields.drinks, drink));
  formData.append(formFields.dishes, dishes);
  formData.append(formFields.allergies, allergies);

  fetch(formUrl, {
    method: 'POST',
    mode: 'no-cors',
    body: formData,
  }).catch((err) => console.error(err));

  showMessageSurveySent();
}

// обработчик события кнопки вызывает отправку результата

document.querySelector('a[class="survey-submit-button"]').addEventListener('click', sendSurveyAnswerToGoogleForm);
