import moment from 'moment';

interface Comic {
  month: string;
  num: number;
  link: string;
  year: string;
  news: string;
  safe_title: string;
  transcript: string;
  alt: string;
  img: string;
  title: string;
  day: string;
}

const form = document.getElementById('email-form') as HTMLFormElement;
const input = document.getElementById('email-input') as HTMLInputElement;
const comicImage = document.getElementById('comic-image') as HTMLImageElement;
const comicTitle = document.getElementById('comic-title') as HTMLHeadingElement;
const comicDate = document.getElementById('comic-date') as HTMLParagraphElement;
const comicSection = document.getElementById('comic-section') as HTMLElement;

function fetchComicById(id: number): Promise<Comic> {
  const comicApiUrl = `https://fwd.innopolis.university/api/comic?id=${id}`;
  return fetch(comicApiUrl).then(response => response.json());
}

form.addEventListener('submit', function (e: Event) {
  e.preventDefault();

  const email = input.value;
  const apiUrl = `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then((data: number) => fetchComicById(data))
    .then((data: Comic) => {
      comicImage.src = data.img;
      comicImage.alt = data.alt;
      comicTitle.textContent = data.safe_title;
      comicDate.textContent = moment(`${data.year}-${data.month}-${data.day}`).fromNow();
      comicSection.style.display = 'block';
    })
    .catch(error => console.log(error));

  input.value = '';
});

document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
  anchor.addEventListener('click', function (e: Event) {
    e.preventDefault();

    const target = this.getAttribute('href');
    if (target) {
      const element = document.querySelector(target) as HTMLElement;
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});
