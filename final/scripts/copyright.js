const currentYearSpan = document.querySelector("#current-year");

const currentYear = new Date().getFullYear();

currentYearSpan.textContent = `${currentYear}`;
