const langArr = {
  "title" : {
    "en": "Cars repair",
    "ru": "Починка машин",
  },
  "main" : {
    "en": "Main",
    "ru": "Главная",
  },
  "services" : {
    "en": "Our services",
    "ru": "Наши услуги",
  },
  "about" : {
    "en": "About",
    "ru": "О нас",
  },
  "contacts" : {
    "en": "Contacts",
    "ru": "Контакты",
  },
  "intro__title" : {
    "en": "KEEPING YOU ON THE ROAD WITH SERVICE YOU CAN TRUST",
    "ru": "СЕРВИС, КОТОРОМУ МОЖНО ДОВЕРЯТЬ",
  },
  "intro__btn" : {
    "en": "Show more",
    "ru": "Показать больше",
  },
  "info__title" : {
    "en": "CALL US NOW 222-222-222",
    "ru": "ПОЗВОНИТЬ НАМ 222-222-222",
  },
  "info__sub-title" : {
    "en": "Feel free to call us",
    "ru": "Не стесняйтесь звонить нам",
  },
  "info__appoitmet" : {
    "en": "GET FREE APPOITMET",
    "ru": "Получить бесплатное назначение",
  },
  "info__diagnostic" : {
    "en": "Free Diagnosis & Brake Checks",
    "ru": "Бесплатная диагностика и тормозные проверки",
  },
  "info__map" : {
    "en": "FIND US ON MAP",
    "ru": "Бесплатная диагностика и тормозные проверки",
  },
  "info__position" : {
    "en": "New York, 1286 Ruumu Nanor",
    "ru": "Нью-Йорк, 1286 Рууму Нанор",
  },
  "service__title" : {
    "en": "OUR SERVICES",
    "ru": "НАШИ СЕРВИСЫ",
  },
  "service__sub-title" : {
    "en": "VIEW ALL SERVICES",
    "ru": "Просмотреть все услуги",
  },
  "service__text" : {
    "en": "ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH",
    "ru": "Годовые проверки от вашего мастеравашу машину держат вашу машину в хорошем состоянии",
  },
  "service__text1" : {
    "en": "ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH",
    "ru": "Годовые проверки от вашего мастера держат вашу машину в хорошем состоянии",
  },
  "service__text2" : {
    "en": "ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH",
    "ru": "Годовые проверки от вашего мастера держат вашу машину в хорошем состоянии",
  },
  "service__diagnostic" : {
    "en": "DIAGNOSTIC",
    "ru": "ДИАГНОСТИКА",
  },
  "service__tires" : {
    "en": "TIRES & WHEELS",
    "ru": "Шины и колеса",
  },
  "service__engine" : {
    "en": "ENGINES",
    "ru": "Двигатели",
  },
  "about__title" : {
    "en": "WE UNDERSTAND HOW IMPORTANT IT IS TO FIND THE RIGHT AUTO SERVICE",
    "ru": "Мы понимаем, насколько важно найти правильный автосервис",
  },
  "about__text" : {
    "en": "Car repairs and maintenance can be expensive and no one wants to have pay to repair damage caused by shoddy repair service. When you bring your car into our auto shop, you won’t have to worry because our staff is comprised of ASE certified technicians who are committed to making sure you have a safe dependable car.",
    "ru": "Автомобильный ремонт и обслуживание могут быть дорогими, и никто не хочет платить за ремонт урона, вызванного сервисом ремонта Choddy. Когда вы принесете свою машину в наш автомат, вам не придется беспокоиться, потому что наш персонал состоит из сертифицированных специалистов ASE, которые стремится убедиться, что у вас безопасная надежная машина.",
  },
  "about__link" : {
    "en": "MORE ABOUT US ",
    "ru": "Больше о нас",
  },
  "process__title" : {
    "en": "FAST & EASY",
    "ru": "Быстро и легко",
  },
  "process__sub-title" : {
    "en": "our work process",
    "ru": "Наш рабочий процесс",
  },
  "process__request" : {
    "en": "1.Request your quote",
    "ru": "1. Определите вашу цитату",
  },
  "process__bring" : {
    "en": "02. BRING YOUR VEHICLE",
    "ru": "02. Принесите свой автомобиль",
  },
  "process__car" : {
    "en": "We are car guys at heart",
    "ru": "Мы парни автомобиля в сердце",
  },
  "process__repaired" : {
    "en": "03. GET IT REPAIRED",
    "ru": "03. Получите его отремонтированы",
  },
  "process__quality" : {
    "en": "High quality, low cost car servicing",
    "ru": "Высокое качество, недорогие автомобильные обслуживания",
  },
  "process__need" : {
    "en": "We will be there when you most need us",
    "ru": "Мы будем там, когда вам больше всего нужны",
  },
  "contacts__contact" : {
    "en": "Contact us",
    "ru": "Связаться с нами",
  },
  "contacts__name" : {
    "en": "Name",
    "ru": "Имя",
  },
  "contacts__last-name" : {
    "en": "Last name",
    "ru": "Фамилия",
  },
  "contacts__email" : {
    "en": "email",
    "ru": "Емейл",
  },
  "contacts__phone" : {
    "en": "Phone",
    "ru": "Телефон",
  },
  "contacts__message" : {
    "en": "message",
    "ru": "Сообщение",
  },
  "contacts__btn" : {
    "en": "send",
    "ru": "Отправить",
  },
}


// EN - RU change

const allLng = [`en`, `ru`];
const changeLng = document.querySelectorAll(`.header__wrapper--lng a`)

changeLng.forEach(element => {
  element.addEventListener(`click`, clickOnLng)
});

function clickOnLng() {
  let lang = this.innerHTML;
  location.href = window.location.pathname + `#` + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  console.log(hash);
  if (!allLng.includes(hash)) {
    location.href = window.location.pathname + `#en`
    location.reload(); 
  }
  document.querySelector(`title`).innerHTML = langArr[`title`][hash];
  for (let key in langArr) {
    let elem = document.querySelector(`.lng-` + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}

changeLanguage();


// /EN - RU change END


// changeLng.forEach(function (element) {
//   element.addEventListener("click", changeLngASD);
// });

// function changeLngASD() {
//   changeLng.forEach((n) => n.classList.remove("active"));
//   if (!this.classList.contains("active")) {
//     this.classList.add("active");
//   }
// }
