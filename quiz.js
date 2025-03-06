document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      question: "Вярвате ли, че мирът е възможен във вашата страна?",
      type: "multiple-choice",
      options: ["Да", "Не", "По-скоро не", "По-скоро да"],
    },
    {
      question: "Смятате ли, че образованието помага за постигането на мир?",
      type: "multiple-choice",
      options: ["Да", "Не", "По-скоро не", "По-скоро да"],
    },
    {
      question: "Бихте ли участвали в доброволческа инициатива за мир?",
      type: "multiple-choice",
      options: ["Да", "Не", "По-скоро не", "По-скоро да"],
    },
    {
      question: "Мислите ли, че социалните мрежи допринасят за напрежение?",
      type: "multiple-choice",
      options: ["Да", "Не", "По-скоро не", "По-скоро да"],
    },
    {
      question:
        "Смятате ли, че всеки човек може да допринесе за по-мирен свят?",
      type: "multiple-choice",
      options: ["Да", "Не", "По-скоро не", "По-скоро да"],
    },
    {
      question: "Смятате ли, че светът може да бъде по-мирен чрез образование?",
      type: "multiple-choice",
      options: ["Да", "Не", "По-скоро не", "По-скоро да"],
    },
    {
      question:
        "Подкрепяте ли действията на международните организации за насърчаване на мира?",
      type: "multiple-choice",
      options: ["Да", "Не", "По-скоро не", "По-скоро да"],
    },
    {
      question:
        "Смятате ли, че мирът започва от личните усилия на всеки човек?",
      type: "multiple-choice",
      options: ["Да", "Не", "По-скоро не", "По-скоро да"],
    },
    {
      question: "Вярвате ли, че политическите лидери играят важна роля в мира?",
      type: "multiple-choice",
      options: ["Да", "Не", "По-скоро не", "По-скоро да"],
    },
  ];

  let currentQuestionIndex = 0;
  let responses = [];

  const startScreen = document.querySelector(".start-screen");
  const quizPopup = document.querySelector(".quiz-popup");
  const resultPopup = document.querySelector(".result-popup");

  const questionTextEl = document.querySelector(".question-text");
  const answerOptionsEl = document.querySelector(".answer-options");
  const questionStatusEl = document.querySelector(".question-status");
  const nextQuestionBtn = document.querySelector(".next-question-btn");
  const resultMessageEl = document.querySelector(".result-message");
  const tryAgainBtn = document.querySelector(".try-again-btn");

  document
    .querySelector(".start-quiz-btn")
    .addEventListener("click", function () {
      startScreen.classList.remove("active");
      quizPopup.classList.add("active");
      loadQuestion();
    });

  function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      questionTextEl.innerText = currentQuestion.question;
      answerOptionsEl.innerHTML = "";

      if (currentQuestion.type === "multiple-choice") {
        currentQuestion.options.forEach((answer) => {
          const option = document.createElement("li");
          option.classList.add("answer-option");
          option.innerText = answer;
          option.addEventListener("click", () => {
            document.querySelectorAll(".answer-option").forEach((opt) => {
              opt.classList.remove("selected");
            });
            responses[currentQuestionIndex] = answer.toLowerCase();
            option.classList.add("selected");
          });
          answerOptionsEl.appendChild(option);
        });
      }

      updateQuestionStatus();
    } else {
      showResults();
    }
  }

  // Обновяване на текста "Въпрос X от Y"
  function updateQuestionStatus() {
    questionStatusEl.innerText = `Въпрос ${currentQuestionIndex + 1} от ${
      questions.length
    }`;
  }

  // Преминаване към следващ въпрос
  nextQuestionBtn.addEventListener("click", function () {
    if (responses[currentQuestionIndex] != null) {
      currentQuestionIndex++;
      loadQuestion();
    } else {
      alert("Моля, изберете отговор, преди да продължите.");
    }
  });

  // Показване на резултатите
  function showResults() {
    let yesCount = responses.filter((r) => r === "да").length;
    let noCount = responses.filter((r) => r === "не").length;
    let maybeYesCount = responses.filter((r) => r === "по-скоро да").length;
    let maybeNoCount = responses.filter((r) => r === "по-скоро не").length;

    resultMessageEl.innerHTML = `
          <p>Отговори "Да": ${yesCount} (${(
      (yesCount / questions.length) *
      100
    ).toFixed(0)}%)</p>
          <p>Отговори "Не": ${noCount} (${(
      (noCount / questions.length) *
      100
    ).toFixed(0)}%)</p>
          <p>Отговори "По-скоро да": ${maybeYesCount} (${(
      (maybeYesCount / questions.length) *
      100
    ).toFixed(0)}%)</p>
          <p>Отговори "По-скоро не": ${maybeNoCount} (${(
      (maybeNoCount / questions.length) *
      100
    ).toFixed(0)}%)</p>
      `;

    quizPopup.classList.remove("active");
    resultPopup.classList.add("active");
  }

  // Рестарт на анкетата
  // Връщане на потребителя на началния екран
  tryAgainBtn.addEventListener("click", function () {
    currentQuestionIndex = 0;
    responses = [];
    resultPopup.classList.remove("active");
    startScreen.classList.add("active");
  });

  // Функция за генериране на текст за резултатите
  function generateResultsText() {
    let resultText = "Резултати от анкетата:\n\n";

    // Преглед на отговорите и добавяне на текст за всеки въпрос
    questions.forEach((question, index) => {
      resultText += `${question.question}\nОтговор: ${
        responses[index] || "Не е отговорено"
      }\n\n`;
    });

    return resultText;
  }

  // Добавяне на обработчик за изпращане на резултатите
  document
    .querySelector("#result-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Предотвратяване на автоматичното изпращане на формата

      // Проверка дали има резултати (можете да добавите валидация тук, ако е необходимо)
      const resultText = generateResultsText();

      // Присвояване на резултатите към скритото поле
      const formResultsField = document.querySelector("#form-results");
      if (formResultsField) {
        formResultsField.value = resultText; // Поставяне на резултатите в скритото поле
      } else {
        console.error("Скритото поле не беше намерено!");
      }

      // Изпращане на формата
      this.submit(); // Изпраща формата след като попълни резултатите
    });
});
