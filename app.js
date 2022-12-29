// selecting the elements

const toggleBtn = document.querySelector(".sidebar-toggle");
const aside = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

// adding the event to the toggle button

toggleBtn.addEventListener("click", function () {
  const hasClass = aside.classList;
  if (hasClass.contains("show-sidebar")) {
    hasClass.remove("show-sidebar");
  } else {
    hasClass.add("show-sidebar");
  }
});

// adding event to close button

closeBtn.addEventListener("click", function () {
  const hasClass = aside.classList;
  if (hasClass.contains("show-sidebar")) {
    hasClass.remove("show-sidebar");
  }
});
