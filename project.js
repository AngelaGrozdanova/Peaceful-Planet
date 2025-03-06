const translations = {
  english: {
    navHome: "Home",
    navAbout: "About",
    navInitsiative: "Initsiative",
    navProject: "Project",
    navEvent: "Event",
    btnLogin: "Form",
    btnSearch: "Quiz",
    heroSubtitle: "Welcome to Peace Planet",
    heroTitle:
      "Love, Protect, and Restore Our <strong>Peaceful Planet</strong>",
    heroText:
      "Join us on a journey through exciting initiatives, personal stories, events, and projects that inspire change.",
    btnExplore: "Explore",
    btnWatchStory: "Watch Our Story",
    feature1Title: "Safe Shelter",
    feature1Text:
      "Providing secure, sustainable housing for communities and wildlife alike.",
    feature2Title: "Clean Water",
    feature2Text:
      "Ensuring access to pure water through eco-friendly innovations.",
    feature3Title: "Eco Balance",
    feature3Text:
      "Promoting biodiversity and sustainable practices for a thriving planet.",
    feature4Title: "Environment",
    feature4Text:
      "Embracing renewable energy and conservation to safeguard our natural resources.",
    subtitle: "Our Projects",
    title: "Explore Our Sustainable Projects",
    text1:
      "Our projects focus on creating harmony between humanity and nature. We work towards a sustainable future with initiatives that promote environmental protection and community collaboration.",
    text2:
      "We have undertaken numerous projects globally, ranging from eco-friendly infrastructure to renewable energy solutions. Together, we aim to protect the planet for future generations.",
    btn: "View Projects",
    slogan1: "Choose peace!",
    slogan2: "End conflict!",
    ctaSubtitle: "Get Involved",
    ctaTitle:
      "Join Our Collective Efforts in Creating a Brighter More Sustainable",
    ctaTitleSpan: "Peaceful Future for All",
    ctaBtn1: "Join Our Initiatives",
    ctaBtn2: "Take Action and Spread Awareness",
    gallerySubtitle: "Our Projects Post",
    galleryTitle: "Latest Article of Nutrition",

    footerText:
      "Join us in making the world a peaceful place. Together, we can create a sustainable future for all. Let's take action today for a better tomorrow.",
    footerCategoryTitle: "Category",
    footerInformationTitle: "Information",
    footerContactTitle: "Contact Me",
    footerHomeLink: "Home page",
    footerAboutLink: "About page",
    footerInitsiativeLink: "Initsiative page",
    footerProjectLink: "Project page",
    footerEventLink: "Event page",
    footerAdditionalInfoLink: "Additional information",
    footerFormLink: "Form",
    footerQuizLink: "Quiz",
    footerSitemapLink: "Website map",
    footerAddress: "ul. Mechna Karvicheva No 23",
    footerCopyright:
      "© 2025 Peaceful Planet | Created for educational purposes by Angela Grozdanova",
    footerPrivacyPolicyLink: "Privacy Policy",
    footerTermsLink: "Terms of Use",
  },
  bulgarian: {
    navHome: "Начало",
    navAbout: "За нас",
    navInitsiative: "Инициативи",
    navProject: "Проекти",
    navEvent: "Събития",
    btnLogin: "Форма",
    btnSearch: "Анкета",
    heroSubtitle: "Добре дошли в Мирна планета",
    heroTitle: "Обичайте и предпазвайте нашата <strong>Мирна планета</strong>",
    heroText:
      "Присъединете се към нас в пътешествие през вълнуващи инициативи, лични истории, събития и проекти, които вдъхновяват промяна.",
    btnExplore: "Разгледай",
    btnWatchStory: "Гледай нашата история",
    feature1Title: "Сигурно убежище",
    feature1Text:
      "Осигуряване на сигурно, устойчиво жилище за общности и дивата природа.",
    feature2Title: "Чиста вода",
    feature2Text: "Осигуряване на достъп до чиста вода чрез еко иновации.",
    feature3Title: "Еко баланс",
    feature3Text:
      "Популяризиране на биоразнообразието и устойчивите практики за просперираща планета.",
    feature4Title: "Околна среда",
    feature4Text:
      "Използване на възобновяеми енергийни източници и опазване на природните ресурси.",
    subtitle: "Нашите проекти",
    title: "Разгледайте нашите устойчиви проекти",
    text1:
      "Нашите проекти се фокусират върху създаването на хармония между човечеството и природата. Работим за устойчиво бъдеще чрез инициативи, които насърчават опазването на околната среда и сътрудничеството в общността.",
    text2:
      "Реализирали сме множество проекти по целия свят – от екологична инфраструктура до решения за възобновяема енергия. Заедно се стремим да защитим планетата за бъдещите поколения.",
    btn: "Вижте проектите",
    slogan1: "Избери мира!",
    slogan2: "Сложи край на конфликтите!",
    ctaSubtitle: "Включете се",
    ctaTitle:
      "Присъединете се към нашите колективни усилия за създаване на по-светло и устойчиво",
    ctaTitleSpan: "Мирно бъдеще за всички",
    ctaBtn1: "Разгледайте нашите инициативи",
    ctaBtn2: "Действайте и разпространявайте информация",
    gallerySubtitle: "Нашият проект пост",
    galleryTitle: "Последна статия за хранене",

    footerText:
      "Присъединете се към нас, за да направим света мирно място. Заедно можем да създадем устойчиво бъдеще за всички. Нека действаме днес за по-добро утре.",
    footerCategoryTitle: "Категории",
    footerInformationTitle: "Информация",
    footerContactTitle: "Контакт",
    footerHomeLink: "Начало",
    footerAboutLink: "За нас",
    footerInitsiativeLink: "Инициативи",
    footerProjectLink: "Проекти",
    footerEventLink: "Събития",
    footerAdditionalInfoLink: "Допълнителна информация",
    footerFormLink: "Форма",
    footerQuizLink: "Викторина",
    footerSitemapLink: "Карта на сайта",
    footerAddress: "ул. Мечна Кървичева № 23",
    footerCopyright:
      "© 2025 Мирна Планета | Създадено за учебни цели от Ангела Грозданова",
    footerPrivacyPolicyLink: "Политика за поверителност",
    footerTermsLink: "Общи условия",
  },
};

function changeLanguage(lang) {
  document.getElementById("navHome").innerText = translations[lang].navHome;
  document.getElementById("navAbout").innerText = translations[lang].navAbout;
  document.getElementById("navInitsiative").innerText =
    translations[lang].navInitsiative;
  document.getElementById("navProject").innerText =
    translations[lang].navProject;
  document.getElementById("navEvent").innerText = translations[lang].navEvent;
  document.getElementById("btnLogin").innerText = translations[lang].btnLogin;
  document.getElementById("btnSearch").innerText = translations[lang].btnSearch;
  document.getElementById("heroSubtitle").innerText =
    translations[lang].heroSubtitle;
  document.getElementById("heroTitle").innerHTML = translations[lang].heroTitle;
  document.getElementById("heroText").innerText = translations[lang].heroText;
  document.getElementById("btnExplore").innerText =
    translations[lang].btnExplore;
  document.getElementById("btnWatchStory").innerText =
    translations[lang].btnWatchStory;
  document.getElementById("feature1Title").innerText =
    translations[lang].feature1Title;
  document.getElementById("feature1Text").innerText =
    translations[lang].feature1Text;
  document.getElementById("feature2Title").innerText =
    translations[lang].feature2Title;
  document.getElementById("feature2Text").innerText =
    translations[lang].feature2Text;
  document.getElementById("feature3Title").innerText =
    translations[lang].feature3Title;
  document.getElementById("feature3Text").innerText =
    translations[lang].feature3Text;
  document.getElementById("feature4Title").innerText =
    translations[lang].feature4Title;
  document.getElementById("feature4Text").innerText =
    translations[lang].feature4Text;
  document.getElementById("aboutSubtitle").textContent =
    translations[lang].subtitle;
  document.getElementById("aboutTitle").textContent = translations[lang].title;
  document.getElementById("aboutText1").textContent = translations[lang].text1;
  document.getElementById("aboutText2").textContent = translations[lang].text2;
  document.getElementById("aboutBtn").textContent = translations[lang].btn;
  document.getElementById("slogan1").textContent = translations[lang].slogan1;
  document.getElementById("slogan2").textContent = translations[lang].slogan2;
  document.getElementById("ctaSubtitle").textContent =
    translations[lang].ctaSubtitle;
  document.getElementById("ctaTitle").childNodes[0].textContent =
    translations[lang].ctaTitle + " ";
  document.getElementById("ctaTitleSpan").textContent =
    translations[lang].ctaTitleSpan;
  document.getElementById("ctaBtn1").textContent = translations[lang].ctaBtn1;
  document.getElementById("ctaBtn2").textContent = translations[lang].ctaBtn2;
  document.getElementById("gallerySubtitle").innerText =
    translations[lang].gallerySubtitle;
  document.getElementById("galleryTitle").innerText =
    translations[lang].galleryTitle;

  document.getElementById("footerText").innerText =
    translations[lang].footerText;
  document.getElementById("footerCategoryTitle").innerText =
    translations[lang].footerCategoryTitle;
  document.getElementById("footerInformationTitle").innerText =
    translations[lang].footerInformationTitle;
  document.getElementById("footerContactTitle").innerText =
    translations[lang].footerContactTitle;

  document.getElementById("footerHomeLink").innerText =
    translations[lang].footerHomeLink;
  document.getElementById("footerAboutLink").innerText =
    translations[lang].footerAboutLink;
  document.getElementById("footerInitsiativeLink").innerText =
    translations[lang].footerInitsiativeLink;
  document.getElementById("footerProjectLink").innerText =
    translations[lang].footerProjectLink;
  document.getElementById("footerEventLink").innerText =
    translations[lang].footerEventLink;

  document.getElementById("footerAdditionalInfoLink").innerText =
    translations[lang].footerAdditionalInfoLink;
  document.getElementById("footerFormLink").innerText =
    translations[lang].footerFormLink;
  document.getElementById("footerQuizLink").innerText =
    translations[lang].footerQuizLink;
  document.getElementById("footerSitemapLink").innerText =
    translations[lang].footerSitemapLink;

  document.getElementById("footerAddress").innerText =
    translations[lang].footerAddress;
  document.getElementById("footerCopyright").innerHTML =
    translations[lang].footerCopyright; // Внимавай - тук може да има линк вътре

  document.getElementById("footerPrivacyPolicyLink").innerText =
    translations[lang].footerPrivacyPolicyLink;
  document.getElementById("footerTermsLink").innerText =
    translations[lang].footerTermsLink;
}
