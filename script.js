const searchBox = document.getElementById('search-box');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  if (searchBox.value === '') {
    searchBox.classList.toggle('active');
    btn.classList.toggle('active');
  } else {
    console.log(searchBox.value);
  }
});
