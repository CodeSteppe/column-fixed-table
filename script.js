const tableContainer = document.querySelector('.table-container');
const firstColumn = tableContainer.querySelectorAll('td:first-child, th:first-child');
tableContainer.addEventListener('scroll', () => {
  const scrollLeft = tableContainer.scrollLeft;
  firstColumn.forEach((cell) => {
    cell.style.transform = `translateX(${scrollLeft}px)`;
  });
});