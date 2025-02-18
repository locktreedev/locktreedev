const currentYear = new Date().getFullYear();
const container = document.querySelector('[data-current-year-key]');

container.innerHTML = currentYear;