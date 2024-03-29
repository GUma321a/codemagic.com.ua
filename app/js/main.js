// ************************** Burger Menu ************************** //
function burgerMenu() {
  const burger  = document.querySelector(".header__burger");
  const menu    = document.querySelector(".header__menu-list");

  burger.addEventListener("click", () => {
    if (!menu.classList.contains("header__menu-list-active")) {
      menu.classList.add("header__menu-list-active");
      burger.classList.add("active-burger");
      document.body.style.overflow = "hidden";
    } else {
      menu.classList.remove("header__menu-list-active");
      burger.classList.remove("active-burger");
      document.body.style.overflow = "visible";
    }
  });

  menu.addEventListener("click", handleMenuClick);
  function handleMenuClick(event) {
    if (event.target instanceof HTMLAnchorElement) {
      menu.classList.remove("header__menu-list-active");
      burger.classList.remove("active-burger");
      document.body.style.overflow = "visible";
    }
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 999) {
      menu.classList.remove("header__menu-list-active");
      burger.classList.remove("active-burger");
    }
  });
}
burgerMenu();
// ************************** Burger Menu ************************** //

// ************************** Telegram Form ************************** //
const telegramChatID = "-780517028";
const telegramBotToken = "bot5572452932:AAEqjC4_b6ZKHRJyBeTCK0iQxVowJ_qiUVA";
const telegramURL = `https://api.telegram.org/${telegramBotToken}/sendMessage`;
const telegramForm = document.querySelectorAll('.telegram-form');
const messageStatus = document.querySelector('.form-status');


for ( let i = 0; i < telegramForm.length; i++ ) {
  telegramForm[i].addEventListener("submit", async e => {
    e.preventDefault();
    let telegramDataArray = [];
    let formData = new FormData(e.target);
    let telegramFormInputs = e.target.getAttribute('names').split(" ");
    let telegramFormTitle = e.target.getAttribute('formTitle');

    telegramFormInputs.forEach(name => {
      telegramDataArray.push({
          'name': name,
          'value': formData.get(name)
      });
    });

    let telegramText = `New request from ${telegramFormTitle}`;
    telegramDataArray.forEach(d => {
      telegramText += `<b>\n ${d.name}</b>: ${d.value}`;
    });

    const sendMessage = await fetch(telegramURL, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: telegramChatID,
          text: telegramText,
          parse_mode: 'html'
        }),
    });

    if (sendMessage.ok) {
      messageStatus.classList.add('success');
      setTimeout(() => {
        messageStatus.classList.remove('success');
      }, 3000);
    } else {
      messageStatus.textContent = "Message failed to send :(";
    }
   
    e.target.reset();
  });
}
// ************************** Telegram Form ************************** //