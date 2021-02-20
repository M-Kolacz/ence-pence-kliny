const yearElements = document.querySelectorAll('.year');
const yearBack = document.querySelectorAll('.yearBack');

const year = new Date().getFullYear();
const yearMinus = new Date().getFullYear() - 1;

yearElements.forEach((yearElement) => {
    yearElement.textContent = year;
});
yearBack.forEach((yearElement) => (yearElement.textContent = yearMinus));
