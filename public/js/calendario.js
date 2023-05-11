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
