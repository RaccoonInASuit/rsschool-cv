'use strict';

const regNum = /(?:\+375|80)\s?\(?\d\d\)?\s?\d\d(?:\d[\-\s]\d\d[\-\s]\d\d|[\-\s]\d\d[\-\s]\d\d\d|\d{5})/,
      regMail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

const email = document.querySelector("#input_1"),
      phone = document.querySelector("#dataPhone"),
      statusMessage = document.getElementById('statusMessages'),
      btn = document.querySelector("#submit"),
      emailPlaceholder = email.placeholder;

const message = {
  success: "Correct Number",
  failure: "Wrong Number"
};

email.addEventListener("focus", (e) => {
  email.placeholder = "";
});
email.addEventListener("blur", (e) => {
  email.placeholder = emailPlaceholder;
});
email.addEventListener("paste", function (event) {
  event.preventDefault();
});

const phoneValidate = () => {
  btn.addEventListener('click', (e) => {
    if (!regNum.test(phone.value)) {
      btn.classList.add('Animated_button');
      setTimeout(() => {
        btn.classList.remove('Animated_button');
      }, 1000);
      statusMessage.innerText = message.failure;
      statusMessage.style.display = 'block';
      e.preventDefault();
    } else {
      statusMessage.innerText = message.success;
      statusMessage.style.display = 'block';
    }
    setTimeout(() => {
      statusMessage.style.display = 'none';
    }, 1000);
  });
};

phoneValidate();

const mailValidate = () => {
  btn.addEventListener('click', (e) => {
    if (!regMail.test(email.value)) {
      btn.classList.add('Animated_button');
      setTimeout(() => {
        btn.classList.remove('Animated_button');
      }, 1000);
      email.value = "kramarjaroslav@rambler.ru";
      e.preventDefault();
    } else {
      console.log("yes");
    }
  });
};

mailValidate();
