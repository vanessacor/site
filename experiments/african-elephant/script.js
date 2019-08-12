function main () {
  const button = document.getElementById('top-button');

  function goToTop () {
    document.documentElement.scrollTop = 0;
  }

  button.addEventListener('click', goToTop);

  function scrollFunction () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }

  window.addEventListener('scroll', scrollFunction);
}

window.addEventListener('load', main);
