// home and back to top button
document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.createElement('button');
  backToTopButton.textContent = 'Back to Top';
  backToTopButton.style.position = 'fixed';
  backToTopButton.style.bottom = '20px';
  backToTopButton.style.right = '20px';
  backToTopButton.style.display = 'none'; // Hide the button by default

  const homeButton = document.createElement('button');
  homeButton.textContent = 'Back to Home';
  homeButton.style.position = 'fixed';
  homeButton.style.left = '20px';
  homeButton.style.bottom = '20px';

  const currentUrl = window.location.href;
  const localIndexPath = '/ds-porto-web/index.html';
  const remoteIndexPath = 'https://datawithalvin.github.io/ds-porto-web/';

  document.body.appendChild(backToTopButton);
  
  // Add homeButton only if current page is not index.html or site.baseurl
  if (currentUrl !== remoteIndexPath && window.location.pathname !== localIndexPath) {
    document.body.appendChild(homeButton);
  }

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  homeButton.addEventListener('click', () => {
    window.location.href = '/ds-porto-web/index.html';
  });  
});


// navigation buttons
const listItems = document.querySelectorAll(".list-item");
let currentPage = 1;
const totalPages = Math.ceil(listItems.length / 8);

function updateNavigationButtons() {
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

function navigate(direction) {
  currentPage += direction;
  listItems.forEach((item) => {
    if (parseInt(item.getAttribute("data-page")) === currentPage) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
  updateNavigationButtons();
}

document.getElementById("prev-button").addEventListener("click", () => navigate(-1));
document.getElementById("next-button").addEventListener("click", () => navigate(1));

listItems.forEach((item, index) => {
  if (parseInt(item.getAttribute("data-page")) !== currentPage) {
    item.classList.add("hidden");
  }
});
updateNavigationButtons();