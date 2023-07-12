// script.js

// Add smooth scrolling to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Handle email submission and generate comic
document.getElementById('email-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const emailInput = document.getElementById('email-input');
  const email = emailInput.value;
  const apiUrl = `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const comicId = data;
      const comicApiUrl = `https://fwd.innopolis.university/api/comic?id=${comicId}`;

      return fetch(comicApiUrl);
    })
    .then(response => response.json())
    .then(data => {
      const comicImage = document.getElementById('comic-image');
      const comicTitle = document.getElementById('comic-title');
      const comicDate = document.getElementById('comic-date');
      const comicSection = document.getElementById('comic-section');

      comicImage.src = data.img;
      comicImage.alt = data.alt;
      comicTitle.textContent = data.safe_title;
      comicDate.textContent = new Date(data.year, data.month - 1, data.day).toLocaleDateString();
      comicSection.style.display = 'block';
    })
    .catch(error => console.log(error));

  emailInput.value = ''; // Clear the email input after submission
});