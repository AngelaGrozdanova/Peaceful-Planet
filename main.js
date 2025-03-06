function changeLanguage(language) {
  const elements = {
    navHome: {
      english: "Home",
      bulgarian: "Начало",
    },
    navAbout: {
      english: "About",
      bulgarian: "За нас",
    },
    navInitsiative: {
      english: "Initsiative",
      bulgarian: "Инициативи",
    },
    navProject: {
      english: "Project",
      bulgarian: "Проект",
    },
    navEvent: {
      english: "Event",
      bulgarian: "Събитие",
    },
    btnLogin: {
      english: "Form",
      bulgarian: "Форма",
    },
    btnSearch: {
      english: "Quiz",
      bulgarian: "Тест",
    },
    logo: {
      english: "Peace Planet",
      bulgarian: "Мирна планета",
    },
  };

  // Промяна на текста за всеки елемент
  for (let id in elements) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = elements[id][language];
    }
  }
}
