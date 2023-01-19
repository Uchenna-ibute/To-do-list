const checker = () => {
  const check = document.querySelectorAll('.item');
  check.forEach((item) => item.addEventListener('click', () => {
    item.classList.toggle('it');
  }));
};

export default checker;