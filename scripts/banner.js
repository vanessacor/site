'use strict'

  function addStyle(link) {
  const stylesLink = document.createElement('link');
  stylesLink.href = link;
  stylesLink.setAttribute('rel', 'stylesheet');
  stylesLink.setAttribute('type', 'text/css');
  document.head.appendChild(stylesLink);
}

function createBanner() {
  const divBanner = document.createElement('div');
  divBanner.setAttribute('class','banner-wrapper');
  document.body.appendChild(divBanner);
  const banner = document.createElement('div');
  banner.setAttribute('id', 'banner')
  banner.innerHTML = `<div id="banner">
  <a href="https://vanessacor.github.io/site/">Vanessa<br>Poppe</a>
</div>`;
  divBanner.appendChild(banner);

  addStyle('../../styles/banner.css');
  addStyle('https://fonts.googleapis.com/css?family=Raleway&display=swap');

}

window.addEventListener('load', createBanner);