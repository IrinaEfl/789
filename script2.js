window.addEventListener("DOMContentLoaded", () => {
  // Добавляем боковые фото в header с анимацией
  const header = document.querySelector("header");
  const avatar = header?.querySelector(".avatar");
  if (header && avatar) {
    const leftImg = document.createElement("img");
    leftImg.src = avatar.src;
    leftImg.className = "side-avatar left";
    const rightImg = document.createElement("img");
    rightImg.src = avatar.src;
    rightImg.className = "side-avatar right";
    header.insertBefore(leftImg, avatar);
    header.appendChild(rightImg);
  }

  // Добавляем гиф в блок контакты справа
  const contactCard = document.querySelector("#contact .card");
  if (contactCard) {
    const gif = document.createElement("img");
    gif.src = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";
    gif.alt = "Анимация";
    gif.className = "contact-gif";
    contactCard.style.position = "relative";
    contactCard.appendChild(gif);
  }

  // Открытие и обработка формы связи
  const openFormButton = document.getElementById("open-form");
  openFormButton?.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.id = "contact-modal";
    Object.assign(modal.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      background: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "1000",
    });

    const form = document.createElement("form");
    form.style.background = "white";
    form.style.padding = "20px";
    form.style.borderRadius = "12px";
    form.style.width = "320px";
    form.innerHTML = `
      <h2>Форма связи</h2>
      <label>Имя:<br><input type="text" name="name" required></label><br><br>
      <label>Email:<br><input type="email" name="email" required></label><br><br>
      <label>Сообщение:<br><textarea name="message" required></textarea></label><br><br>
      <button type="submit">Отправить</button>
      <button type="button" id="close-form" style="margin-left: 10px;">Закрыть</button>
    `;

    modal.appendChild(form);
    document.body.appendChild(modal);

    document.getElementById("close-form").onclick = () => {
      document.body.removeChild(modal);
    };

    form.onsubmit = (e) => {
      e.preventDefault();
      alert("Форма отправлена!");
      document.body.removeChild(modal);
    };
  });

  // Слайдер: переключение слайдов
  (() => {
    const slides = document.getElementById("slides");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    let currentIndex = 0;

    function updateSlider() {
      if (!slides) return;
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[currentIndex].classList.add("active");
    }

    prevBtn?.addEventListener("click", () => {
      currentIndex = currentIndex === 0 ? dots.length - 1 : currentIndex - 1;
      updateSlider();
    });

    nextBtn?.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % dots.length;
      updateSlider();
    });

    dots.forEach((dot) =>
      dot.addEventListener("click", (e) => {
        currentIndex = parseInt(e.target.dataset.index, 10);
        updateSlider();
      })
    );

    updateSlider();
  })();

  // Добавляем три флип-карты в flipset с жёлто-синими цветами
  const flipset = document.getElementById("flipset");
  if (flipset) {
    const cardsData = [
      {
        title: "Проект 1",
        descFront: "Описание проекта 1 кратко",
        titleBack: "Детали 1",
        descBack: "Технологии: HTML, CSS, JS.",
      },
      {
        title: "Проект 2",
        descFront: "Описание проекта 2 кратко",
        titleBack: "Детали 2",
        descBack: "Технологии: React, API.",
      },
      {
        title: "Проект 3",
        descFront: "Описание проекта 3 кратко",
        titleBack: "Детали 3",
        descBack: "Роль: Frontend-разработчик.",
      },
    ];

    cardsData.forEach(({ title, descFront, titleBack, descBack }) => {
      const flipcard = document.createElement("div");
      flipcard.className = "flipcard";
      flipcard.innerHTML = `
        <div class="flipface">
          <div>
            <h3>${title}</h3>
            <p>${descFront}</p>
          </div>
        </div>
        <div class="flipback">
          <div>
            <h3>${titleBack}</h3>
            <p>${descBack}</p>
          </div>
        </div>
      `;
      flipset.appendChild(flipcard);
    });
  }
});
