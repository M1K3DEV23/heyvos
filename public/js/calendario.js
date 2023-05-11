document.addEventListener("DOMContentLoaded", function () {
  let calendarEl = document.getElementById("calendar");

  let calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,dayGridWeek,listMonth",
    },
    locale: "es",
    selectable: true,
    select: () => {
      let myModal = new bootstrap.Modal(document.getElementById("myModal"), {
        keyboard: false,
      });
      myModal.toggle();
    },
    buttonIcons: true,
    weekNumbers: false,
    navLinks: false,
    editable: false,
    dayMaxEvents: true,
    events: "/api/eventos",
  });

  calendar.render();
  calendar.setOption("locale", "es");
});

let hamburger = document.querySelector(".hamburger");
let calendario = document.querySelector(".calendar");
// let navBar = document.querySelector(".nav-bar");

hamburger.onclick = function () {
  let navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");

  if (navBar.classList.contains("active")) {
    calendario.style.display = "none";
  } else {
    calendario.style.display = "block";
  }
};
